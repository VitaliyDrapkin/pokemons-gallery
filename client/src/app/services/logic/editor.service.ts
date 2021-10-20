import {Injectable} from '@angular/core';
import {Pokemon} from "../../models/Pokemon.model";
import {GalleryService} from "./gallery.service";
import {EditorRequestsService} from "../requests/editor-requests.service";
import {GalleryRequestsService} from "../requests/gallery-requests.service";

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  isAddMode = true
  isModalOpen = false
  selectedPokemon: Pokemon | null = null
  searchedPokemons: Pokemon[] = []

  constructor(private galleryService: GalleryService, private editorRequests: EditorRequestsService, private galleryRequests: GalleryRequestsService) {
  }

  selectPokemonToAdd(pokemon: Pokemon): void {
    this.isModalOpen = true
    this.isAddMode = true
    this.selectedPokemon = pokemon
  }

  selectPokemonToRemove(pokemon: Pokemon): void {
    this.isModalOpen = true
    this.isAddMode = false
    this.selectedPokemon = pokemon
  }

  addPokemonToGallery(): void {
    if (!this.selectedPokemon) return
    this.galleryRequests.addPokemonToGallery(this.selectedPokemon?.name).subscribe((data: { status: number }) => {
      if (data.status) {
        this.searchedPokemons = this.searchedPokemons.filter(pokemon => pokemon.name != this.selectedPokemon?.name)
        this.galleryService.addPokemonToGallery(this.selectedPokemon)
        this.isModalOpen = false
      }
    })
  }

  removePokemonFromGallery(): void {
    if (!this.selectedPokemon) return
    this.galleryRequests.removePokemonFromGallery(this.selectedPokemon?.name).subscribe((data: { status: number }) => {
      if (data.status) {
        this.galleryService.pokemons = this.galleryService.pokemons.filter(pokemon => pokemon.name != this.selectedPokemon?.name)
        this.galleryService.removePokemonFromGallery(this.selectedPokemon)
        this.isModalOpen = false
      }
    })
  }

  searchPokemons(value: string): void {
    this.editorRequests.getPokemonsCollection(value).subscribe((pokemons: Pokemon[]) => {
      this.searchedPokemons = pokemons
    })
  }
}
