import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './shared';
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
    {
        path: '**',
        redirectTo: '/404'
    },
    {
        path: '404',
        component: NotFoundComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true })
    ],

    exports: [RouterModule]
})

export class AppRoutingModule {}
