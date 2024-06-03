import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminModeComponent } from './adminViews/admin-mode/admin-mode.component';
import { HistoryTableComponent } from './adminViews/history-table/history-table.component';
import { DesignateRUserComponent } from './adminViews/designate-ruser/designate-ruser.component';
import { GuardModeComponent } from './guardViews/guard-mode/guard-mode.component';
import { ManualModeComponent } from './guardViews/manual-mode/manual-mode.component';
import { ScanModeComponent } from './guardViews/scan-mode/scan-mode.component';
import { GuestModeComponent } from './guestViews/guest-mode/guest-mode.component';
import { GuestProfileComponent } from './guestViews/guest-profile/guest-profile.component';
import { CommonModeComponent } from './userViews/commonUser/common-mode/common-mode.component';
import { CommonProfileComponent } from './userViews/commonUser/common-profile/common-profile.component';
import { CommonPetitionComponent } from './userViews/commonUser/common-petition/common-petition.component';
import { InChargeModeComponent } from './userViews/inChargeUser/in-charge-mode/in-charge-mode.component';
import { InChargeUsersComponent } from './userViews/inChargeUser/in-charge-users/in-charge-users.component';
import { InChargeInviteComponent } from './userViews/inChargeUser/in-charge-invite/in-charge-invite.component';
import { InChargeAssignComponent } from './userViews/inChargeUser/in-charge-assign/in-charge-assign.component';
import { InChargeRequestComponent } from './userViews/inChargeUser/in-charge-request/in-charge-request.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'admin',
        component: AdminModeComponent,
        title: 'Admin'
    },
    {
        path: 'admin/history',
        component: HistoryTableComponent,
        title: 'Admin History'
    },
    {
        path: 'admin/design-ruser',
        component: DesignateRUserComponent,
        title: 'Designate Resident'
    },
    {
        path: 'guard',
        component: GuardModeComponent,
        title: 'Guard Mode'
    },
    {
        path: 'guard/manual-mode',
        component: ManualModeComponent,
        title: 'Manual Mode'
    },
    {
        path: 'guard/scan-mode',
        component: ScanModeComponent,
        title: 'Scan Mode'
    },
    {
        path: 'guest',
        component: GuestModeComponent,
        title: 'Guest'
    },
    {
        path: 'guest/profile',
        component: GuestProfileComponent,
        title: 'Profile'
    },
    {
        path: 'user',
        component: CommonModeComponent,
        title: 'User'
    },
    {
        path: 'user/profile',
        component: CommonProfileComponent,
        title: 'Profile'
    },
    {
        path: 'user/petition',
        component: CommonPetitionComponent,
        title: 'Petition'
    },
    {
        path: 'incharge',
        component: InChargeModeComponent,
        title: 'In Charge'
    },
    {
        path: 'incharge/users',
        component: InChargeUsersComponent,
        title: 'Users'
    },
    {
        path: 'incharge/invites',
        component: InChargeInviteComponent,
        title: 'Invites'
    },
    {
        path: 'incharge/assign',
        component: InChargeAssignComponent,
        title: 'Assign'
    },
    {
        path: 'incharge/request',
        component: InChargeRequestComponent,
        title: 'Requuests'
    }
    
];
