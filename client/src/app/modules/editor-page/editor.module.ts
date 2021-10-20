import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {EditorPageComponent} from "./editor-page.component";
import {EditorRoutingModule} from "./editor-routing.module";
import {AddPokemonComponent} from "./add-pokemon/add-pokemon.component";
import {RemovePokemonComponent} from './remove-pokemon/remove-pokemon.component';
import {EditModalComponent} from './edit-modal/edit-modal.component';
import {PokemonListItemComponent} from './remove-pokemon/pokemon-list-item/pokemon-list-item.component';
import {AddPokemonListItemComponent} from './add-pokemon/add-pokemon-list-item/add-pokemon-list-item.component';

@NgModule({
  declarations: [EditorPageComponent, AddPokemonComponent, RemovePokemonComponent, PokemonListItemComponent, AddPokemonListItemComponent, EditModalComponent,],
  imports: [EditorRoutingModule, FormsModule, SharedModule],
})
export class EditorModule {
}
