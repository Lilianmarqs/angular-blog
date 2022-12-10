import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover: string= "https://jovemnerd.com.br/wp-content/uploads/2021/12/series-marvel-disney-plus-2021-760x226.jpg"
  @Input()
  cardTitle: string= "NOVA SÉRIE ANUNCIADA"
  @Input()
  Id:string = "0"
   

  constructor() { }

  ngOnInit(): void {
  }

}
