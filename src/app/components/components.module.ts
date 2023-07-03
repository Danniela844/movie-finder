import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { IconStarComponent } from './icon-star/icon-star.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    NotFoundComponent,
    SpinnerComponent,
    IconStarComponent,
  ],
  imports: [ CommonModule ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    NotFoundComponent,
    SpinnerComponent,
    IconStarComponent,
  ]
})
export class ComponentsModule { }
