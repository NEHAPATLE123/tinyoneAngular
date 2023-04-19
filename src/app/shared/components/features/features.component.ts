import { Component, OnInit } from '@angular/core';
import { IfeatureCard } from '../../models/data';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  featureCardsArray : Array<IfeatureCard> = [ 
    {
      icon : '<i class="fa-sharp fa-solid fa-crop fa-3x"></i>',
      title : 'Fully Responsive',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-regular fa-lemon fa-3x""></i>',
      title : 'Fully Layered PSD',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-regular fa-folder fa-3x"></i>',
      title : 'Font Awesome Icons',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-solid fa-code fa-3x"></i>',
      title : 'HTML3 & CSS3 ',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-regular fa-envelope fa-3x"></i>',
      title : 'Email Template',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-solid fa-download fa-3x"></i>',
      title : 'Free to download',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
