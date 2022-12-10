import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ dataFake } from '../../data/data-fake'; 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/08/cropped-Ultimato-Tony-Stark.jpg"
  contentTitle:string="NOTICIA EXEMPLO"
  contentDescription:string="aisjfifjsdgfnauwcpawjdfkdjfnf"
  private id:string | null= "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id= (value.get("id")))
  }

  setValuesToComponent(id:string){
    const result  = dataFake.filter(article => article.id == id)
  }
}
