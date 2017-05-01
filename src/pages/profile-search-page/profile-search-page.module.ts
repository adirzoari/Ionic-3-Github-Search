import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchPage } from './profile-search-page';

@NgModule({
  declarations: [
    ProfileSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchPage),
  ],
  exports: [
    ProfileSearchPage
  ]
})
export class ProfileSearchPageModule {}
