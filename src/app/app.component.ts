import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'lifecycle';



  mostrar : boolean = true;


  onClick(){
    this.mostrar = !this.mostrar;
  }

}
