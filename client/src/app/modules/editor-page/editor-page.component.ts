import {Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {EditorService} from "../../services/logic/editor.service";
import {GalleryService} from "../../services/logic/gallery.service";

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor-page.component.html',
  styleUrls: ['./editor-page.component.scss']
})
export class EditorPageComponent implements OnInit {

  constructor(public galleryService: GalleryService, private router: Router, public editService: EditorService) {
  }

  ngOnInit(): void {
    this.galleryService.getGallery()
  }

  goToGallery() {
    this.router.navigateByUrl('/gallery')
  }
}
