import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.scss']
})

export class InspirationComponent implements OnInit {


  iconsListArray : Array<any> = [
    {
      link: "javascipt:;",
      icon : `<i class="fa-brands fa-apple fa-3x"></i>`
    },
    {
      link: "javascipt:;",
      icon : `<i class="fa-solid fa-mobile fa-3x"></i>`,
    },
    { link: "javascipt:;",
      icon : `<i class="fa-brands fa-windows fa-3x"></i>`
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
