import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LbRomanaComponent } from "./lb-romana/lb-romana.component";


const routeConfig: Routes = [
    {
        path: '',
        component: LbRomanaComponent,
        title: 'Limba Romana'
    }
];

export default routeConfig;