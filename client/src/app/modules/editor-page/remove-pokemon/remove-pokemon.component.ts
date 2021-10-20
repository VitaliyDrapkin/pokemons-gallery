import { Component, OnInit } from '@angular/core';
import {GalleryService} from "../../../services/logic/gallery.service";

@Component({
  selector: 'app-remove-pokemon',
  templateUrl: './remove-pokemon.component.html',
  styleUrls: ['./remove-pokemon.component.scss']
})
export class RemovePokemonComponent implements OnInit {

  constructor(public galleryService: GalleryService) { }

  ngOnInit(): void {
  }

}
