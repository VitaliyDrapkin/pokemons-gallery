import {Injectable} from '@angular/core';
import {Pokemon} from "../../models/Pokemon.model";
import {GalleryRequestsService} from "../requests/gallery-requests.service";

@Injectable({
  providedIn: 'root'
})

export class GalleryService {
  pokemons: Pokemon[] = []
  allTypes: string[] = [""]

  constructor(private galleryRequests: GalleryRequestsService) {
  }

  getGallery(): void {
    this.galleryRequests.getGallery().subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons
      this.getAllTypes()
    })
  }

  addPokemonToGallery(pokemon: Pokemon | null): void {
    if (!pokemon) return
    if (!this.pokemons.find(item => item.name === pokemon.name)) {
      this.pokemons.push(pokemon)
      this.getAllTypes()
    }
  }

  removePokemonFromGallery(pokemon: Pokemon | null): void {
    if (!pokemon) return
    this.pokemons = this.pokemons.filter(item => item.name !== pokemon.name)
    this.getAllTypes()
  }

  getAllTypes(): void {
    this.allTypes = ['']
    this.pokemons.forEach((pokemon) => {
      pokemon.types.forEach(type => {
        if (!this.allTypes.includes(type)) {
          this.allTypes.push(type)
        }
      })
    })
  }
}

