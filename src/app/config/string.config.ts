import { HttpHeaders } from '@angular/common/http';
export const STRING_CONFIG = {
    CURRENT_USER: 'currentUser',
    ACCESS_TOKEN: 'access_token',
    HASH: 'hash'
};
export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': sessionStorage.getItem('access_token') ? JSON.parse(sessionStorage.getItem('access_token')) : ''
    })
};


export const publicModuleStrings = {
    SIGN_IN: 'sign in',
    CITIZEN_ID: 'Citizen\'s ID',
    PASSWORD: 'Password',
    LOGIN_BUTTON_TEXT: 'Go',
    KEEP_SIGNED_IN_TEXT: 'keep me signed in',
    FORGET_PASSWORD: 'forget password?'
};
