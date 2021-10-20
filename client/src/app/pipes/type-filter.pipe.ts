import {Pipe, PipeTransform} from '@angular/core';
import {Pokemon} from "../models/Pokemon.model";

@Pipe({
  name: 'typeFilter',
})
export class TypeFilterPipe implements PipeTransform {
  transform(pokemons: Pokemon[], type: string): Pokemon[] {
    if (!type) {
      return pokemons
    }
    return pokemons.filter((pokemon) =>
      pokemon.types.includes(type)
    );
  }
}
