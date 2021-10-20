import {NgModule} from '@angular/core';
import {GalleryPageComponent} from "./gallery-page.component";
import {GalleryRoutingModule} from "./gallery-routing.module";
import {MatCardModule} from "@angular/material/card";
import {NameFilterPipe} from "../../pipes/name-filter.pipe";
import {TypeFilterPipe} from "../../pipes/type-filter.pipe";

@NgModule({
  declarations: [GalleryPageComponent, NameFilterPipe, TypeFilterPipe],
  imports: [GalleryRoutingModule, MatCardModule],
})
export class GalleryModule {
}
