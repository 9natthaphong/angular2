import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { CustomPipe } from './custom-pipe.pipe';
import { CustomAttributeDirective } from './custom-attribute.directive';
import { CustomStructuralDirective } from './custom-structural.directive';
import { LoginComponent } from './login/login.component';
import { DemographicComponent } from './demographic/demographic.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    CustomAttributeDirective,
    CustomStructuralDirective,
    LoginComponent,
    DemographicComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
