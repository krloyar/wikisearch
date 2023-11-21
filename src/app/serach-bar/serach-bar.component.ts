import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-serach-bar',
  templateUrl: './serach-bar.component.html',
  styleUrls: ['./serach-bar.component.css']
})
export class SerachBarComponent {

  term: string = ''
  @Output() emitter = new EventEmitter<string>();


  // vadaBus(value: string){

  //   this.term = value;
  //   console.log(this.term);
  // }


 onformSubmit(event: any){
  event.preventDefault();
  // console.log(this.term)
  this.emitter.emit(this.term)
 }

}
