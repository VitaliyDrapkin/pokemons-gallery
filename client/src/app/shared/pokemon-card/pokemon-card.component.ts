import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models/Pokemon.model";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('faceUp', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('faceUp => flipped', [
        animate('400ms')
      ]),
      transition('flipped => faceUp', [
        animate('400ms')
      ])
    ])
  ]
})

export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon
  faceSide = true

  constructor() {
  }

  ngOnInit(): void {
  }

  flip() {
    this.faceSide = !this.faceSide
  }

  up() {
    console.log('up')
  }
}
