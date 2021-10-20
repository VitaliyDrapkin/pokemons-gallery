import {Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {GalleryService} from "../../services/logic/gallery.service";

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {
  searchInput = ''
  selectedType = ''

  constructor(public galleryService: GalleryService, private router: Router) {
  }

  ngOnInit(): void {
    this.galleryService.getGallery()
  }

  goToEdit(): void {
    this.router.navigateByUrl('/edit')
  }

}
