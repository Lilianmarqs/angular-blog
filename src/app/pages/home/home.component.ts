import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photoCover:string="https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/08/cropped-Ultimato-Tony-Stark.jpg"
  contentTitle:string=""
  contentDescription:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
