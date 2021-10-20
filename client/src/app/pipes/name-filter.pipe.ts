import {Pipe, PipeTransform} from '@angular/core';
import {Pokemon} from "../models/Pokemon.model";

@Pipe({
  name: 'nameFilter',
})
export class NameFilterPipe implements PipeTransform {
  transform(pokemons: Pokemon[], search: string): Pokemon[] {
    if (search.length < 3) {
      return pokemons
    }
    return pokemons.filter((pokemon) =>
      pokemon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
}
