import { Component, OnInit } from '@angular/core';
import { Iicons } from '../../models/data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

iconsListArray: Array<Iicons> =[
    {
      link: "javascipt:;",
      icon : `<i class="fa-brands fa-square-facebook fa-2x"></i>`
    },
    {
      link: "javascipt:;",
      icon : `<i class="fa-brands fa-square-twitter fa-2x"></i>`,
    },
    { 
      link: "javascipt:;",
      icon : `<i class="fa-brands fa-google-plus fa-2x"></i>`
    },
    {
      link: "javascipt:;",
      icon : `<i class="fa-brands fa-pinterest fa-2x"></i>`
    }
  ]

footerLink1 : Array<any> = [
    {
      link: "javascipt:;",
      icon : `Examples`
    },
    {
      link: "javascipt:;",
      icon : `Shop`,
    },
    {  
      link: "javascipt:;",
      icon : `License`
    }
]

footerLink2 : Array<any> = [
  {
    link: "javascipt:;",
    icon : `Contact`
  },
  {
    link: "javascipt:;",
    icon : `About`,
  },
  {
    link: "javascipt:;",
    icon : `Privacy`,
  },
  {  
    link: "javascipt:;",
    icon : `Terms`
  }
]





footerLink3 : Array<any> = [
  {
    link: "javascipt:;",
    icon : `Download`
  },
  {
    link: "javascipt:;",
    icon : `Support`,
  },
  {  
    link: "javascipt:;",
    icon : `Documents`
  }
]



 footerLink4 : Array<any> = [
  {
    link: "javascipt:;",
    icon : `Media`
  },
  {
    link: "javascipt:;",
    icon : `Blog`,
  },
  {  
    link: "javascipt:;",
    icon : ` Forums`
  }
  ]
  
 

  // comibine

  footerLink = [this.footerLink1, this.footerLink2, this.footerLink3, this.footerLink4]

  constructor() { }

  ngOnInit(): void {
  }

}
