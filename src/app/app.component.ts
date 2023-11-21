import { Component } from '@angular/core';
import { PediaServiceService } from './pedia-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];
  
  constructor(private ps: PediaServiceService){}

  onEmit(event: string){
    // console.log(event)

    this.ps.getData(event).subscribe((res:any)=> {
      this.pages = res.query.search;
      console.log(this.pages);
      
    });

  }
}
