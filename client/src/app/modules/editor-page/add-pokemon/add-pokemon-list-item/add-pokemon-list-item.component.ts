import {Pokemon} from "../../../../models/Pokemon.model";
import {EditorService} from "../../../../services/logic/editor.service";
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-pokemon-list-item',
  templateUrl: './add-pokemon-list-item.component.html',
  styleUrls: ['./add-pokemon-list-item.component.scss']
})
export class AddPokemonListItemComponent implements OnInit {
  @Input() pokemon: Pokemon
  @Input() last: Boolean
  @Output() changeInput = new EventEmitter<string>();

  constructor(public editService: EditorService) {
  }

  ngOnInit(): void {
  }

  selectType(value: string) {
    this.changeInput.emit(value)
  }

  selectPokemon() {
    this.editService.selectPokemonToAdd(this.pokemon)
  }
}
