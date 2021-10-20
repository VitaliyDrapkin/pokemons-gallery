import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EditorPageComponent} from "./editor-page.component";

const routes: Routes = [{path: "edit", component: EditorPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class EditorRoutingModule {
}
