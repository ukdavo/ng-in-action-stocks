import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ManageComponent } from '../app/components/manage/manage.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'manage',
        component: ManageComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);