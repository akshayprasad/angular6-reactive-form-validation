import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },

            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }
        ]
    },
    // {
    //     path: '**',
    //     redirectTo: ''
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true })
    ],

    exports: [RouterModule]
})

export class AppRoutingModule {}
