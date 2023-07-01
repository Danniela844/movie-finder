import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    DetailsComponent
  ],
  imports: [ CommonModule ],
  exports: [ HeaderComponent, FooterComponent, ButtonComponent ]
})
export class ComponentsModule { }
