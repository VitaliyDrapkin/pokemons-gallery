import {Component, OnInit} from '@angular/core';
import {EditorService} from "../../../services/logic/editor.service";

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {
  inputValue = ''

  constructor(public editService: EditorService) {
  }

  ngOnInit(): void {
  }

  clearInput() {
    this.inputValue = ''
    this.editService.searchedPokemons = []
  }

  changeInput(value: string) {
    this.inputValue = value
    this.editService.searchPokemons(this.inputValue)
  }

  onChange() {
    if (this.inputValue.length > 1) {
      this.editService.searchPokemons(this.inputValue)
    } else {
      this.editService.searchedPokemons = []
    }
  }
}
