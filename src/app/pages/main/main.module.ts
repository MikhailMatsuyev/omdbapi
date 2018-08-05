import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';

const components = [
    MainComponent
];

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatInputModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        BrowserAnimationsModule,
        FormsModule,
        MatListModule,
        MatCardModule
    ],
    declarations: [...components],
    exports: [...components]
})
export class MainModule { }
