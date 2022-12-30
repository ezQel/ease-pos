import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BottomMenuComponent,
    ProfileCardComponent,
    SideMenuComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule
  ],
  exports: [
    SideMenuComponent,
    BottomMenuComponent,
    TopBarComponent,
    NgbDropdownModule,
    NgbModalModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
