import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepositoriesComponent } from './repositories-component';

@NgModule({
  declarations: [
    RepositoriesComponent,
  ],
  imports: [
    IonicPageModule.forChild(RepositoriesComponent),
  ],
  exports: [
    RepositoriesComponent
  ]
})
export class RepositoriesComponentModule {}
