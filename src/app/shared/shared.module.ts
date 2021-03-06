import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment          from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment }         from 'moment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
const moment = _rollupMoment || _moment;
import {
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatListModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatMenuModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
    MatExpansionModule
} from '@angular/material';

/*Component*/
import { NotFoundComponent }      from '@app/shared/not-found/not-found.component';
import { HeaderComponent }        from '@app/shared/header/header.component';
import { FooterComponent }        from '@app/shared/footer/footer.component';
import { NavbarComponent }        from '@shared/nav/navbar.component';

/*Pipe*/
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { ErrorFieldComponent } from './error-field/error-field.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const CUSTOM_FORMATS = {
    parse: {
      dateInput: 'LL',
    },
    display: {
      dateInput: 'LL',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
};


@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatButtonModule
    ],
    exports: [
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        MatIconModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatListModule,
        MatSidenavModule,
        MatStepperModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatMenuModule,
        MatGridListModule,
        MatDividerModule,
        MatProgressSpinnerModule,
        MatExpansionModule,
        FormsModule,
        ReactiveFormsModule,

        NotFoundComponent,
        ErrorFieldComponent,
        ObjectKeysPipe,

        NavbarComponent,
        HeaderComponent,
        FooterComponent,
        ErrorPageComponent


    ],
    declarations: [
        NotFoundComponent,
        NavbarComponent,
        HeaderComponent,
        FooterComponent,
        ObjectKeysPipe,

        ErrorFieldComponent,

        UnauthorizedComponent,

        ErrorPageComponent
    ],
    providers: [
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

        {provide: MAT_DATE_FORMATS, useValue: CUSTOM_FORMATS}

    ]
})
export class SharedModule { }

