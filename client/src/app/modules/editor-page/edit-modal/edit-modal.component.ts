import {Component, OnInit} from '@angular/core';
import {EditorService} from "../../../services/logic/editor.service";

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  constructor(public editService: EditorService) {
  }

  ngOnInit(): void {
  }

  cancel() {
    this.editService.isModalOpen = false
  }

  confirm() {
    if (this.editService.isAddMode) {
      this.editService.addPokemonToGallery()
    } else {
      this.editService.removePokemonFromGallery()
    }
  }
}
