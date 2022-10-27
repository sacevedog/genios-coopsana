import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Los genios 😎';

  data: any[] = [];

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(){
    this.http.get('https://apps.coopsana.co:8766/api-prueba-tecnica-coopsana/desarrollo-tecnologico/genios', {headers:{user:'santiago.acevedo',pass:'coopsana'}})
    .subscribe((data: any) => {
      this.data = data.genios;
      console.log(data.genios)
      
    })
  }

}
