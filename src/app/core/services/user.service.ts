import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class UserService {

    /* Note: store user hash,token, name, id in sessionStorage */
    userUrl = '/api/user';
    contractUrl = '/api/contract';

    constructor(private _http: HttpClient) { }

    isAuthorized(): boolean {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));

        return user ? true : false;
    }

    isVoted(): boolean {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));

        return user.isVote;
    }

    getRole(): string {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));

        return user ? user.role : '';
    }

    getName(): string {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));

        return user ? user.name : '';
    }

    getId(): string {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));

        return user ? user.id : '';
    }

    /* Do we need it ? */
    getHash(): string {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));

        return user ? user.hash : '';
    }

    updateUserHash(newHash: string): void {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));
        user.hash = newHash;

        sessionStorage.setItem('currentUser', JSON.stringify(user));
    }

    updateUserVote(isVoted: Boolean): void {
        const user = JSON.parse(sessionStorage.getItem('currentUser'));
        user.isVote = isVoted;

        sessionStorage.setItem('currentUser', JSON.stringify(user));
    }

    getUserHash(citizenID: string): Observable<any> {
        return this._http.post(this.userUrl + '/getUserHash',
            JSON.stringify({citizenID: citizenID}), httpOptions)
            .pipe(
                map((res: Response) => {
                    const currentHash = this.getHash();
                    if (res && res['hash'] && res['hash'] !== currentHash) {
                        this.updateUserHash(res['hash']);
                    }
                    return res;
                })
            );
    }
}
