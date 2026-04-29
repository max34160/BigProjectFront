import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule, MatCardImage, MatCard } from '@angular/material/card';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-methodo',
  imports: [MatCardModule,NgFor, RouterModule, MatCardImage, MatCard, NgForOf, RouterLink],
  templateUrl: './card-methodo.html',
  styleUrl: './card-methodo.scss',
})
export class CardMethodo {
  images = [
    { src: '', alt: 'image 1', link: '' },
    { src: '', alt: 'image 2', link: '' },
    { src: '', alt: 'image 3', link: '' }
  ];
}
