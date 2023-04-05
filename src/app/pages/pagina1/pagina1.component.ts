import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit, OnChanges,
DoCheck, AfterContentInit, 
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

  
  nombre : string = 'Fernando';

  segundos : number = 0;

  timerSubscription!: Subscription;
  
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
    this.timerSubscription.unsubscribe();
    console.log('Timer limpiado');
  }


  
  

  ngOnInit(): void {
    console.log('ngOninit');
    this.timerSubscription =  interval(1000).subscribe( i => {
      this.segundos = i;
    });
  }


  guardar(){
    console.log('Guardar');
  }

}
