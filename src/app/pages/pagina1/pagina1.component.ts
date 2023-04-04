import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges,
DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  
  nombre : string = 'Fernando';
  
  constructor() {
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log('Method ngOnChanges.');
  }
  ngDoCheck(): void {
    console.log('Method ngDoCheck.');
  }
  ngAfterContentInit(): void {
    console.log('Method ngAfterContentInit.');
  }
  ngAfterContentChecked(): void {
    console.log('Method ngAfterContentChecked.');
  }
  ngAfterViewInit(): void {
    console.log('Method ngAfterViewInit.');
  }
  ngAfterViewChecked(): void {
    console.log('Method ngAfterViewChecked.');
  }
  ngOnDestroy(): void {
    console.log('Method ngOnDestroy.');
  }


  
  

  ngOnInit(): void {
    console.log('ngOninit');
  }


  guardar(){
    console.log('Guardar');
  }

}
