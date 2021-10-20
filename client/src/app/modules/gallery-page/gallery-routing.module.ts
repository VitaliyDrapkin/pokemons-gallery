import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {GalleryPageComponent} from "./gallery-page.component";

const routes: Routes = [{path: "gallery", component: GalleryPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, SharedModule],
})

export class GalleryRoutingModule {
}
