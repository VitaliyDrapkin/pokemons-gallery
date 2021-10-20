import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../../../models/Pokemon.model";
import {EditorService} from "../../../../services/logic/editor.service";

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: Pokemon
  isHover = false

  constructor(private editService: EditorService) {
  }

  ngOnInit(): void {
  }

  onMouseIn() {
    this.isHover = true
  }

  onMouseOut() {
    this.isHover = false
  }

  removePokemon() {
    this.editService.selectPokemonToRemove(this.pokemon)
  }
}
