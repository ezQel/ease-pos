import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [
    BottomMenuComponent,
    ProfileCardComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideMenuComponent,
    BottomMenuComponent,
  ]
})
export class SharedModule { }
