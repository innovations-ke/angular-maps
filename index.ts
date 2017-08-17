import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { GoogleMarkersComponent } from './src/google-maps/google-markers.component';

export * from './src/google-maps/google-markers.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GoogleMarkersComponent
  ],
  declarations: [
    GoogleMarkersComponent
  ]
})
export class MapsModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: MapsModule,
          providers: []
      };
  }
}
