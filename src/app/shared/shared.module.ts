import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    BottomMenuComponent,
    ProfileCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
