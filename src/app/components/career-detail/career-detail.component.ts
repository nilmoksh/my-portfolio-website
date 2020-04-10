import { Component, OnInit, Input, Output } from '@angular/core';
import { Career } from 'src/app/services/career.model';
import { EventEmitter } from 'protractor';
import { emitKeypressEvents } from 'readline';

@Component({
  selector: 'app-career-detail',
  templateUrl: './career-detail.component.html',
  styleUrls: ['./career-detail.component.scss']
})


export class CareerDetailComponent implements OnInit {

  @Input() career: Career;
  
 


  constructor() { }



  onBlogViewed()
  {
    console.log("view component is being clikc");
   
  }
  ngOnInit() {
  }

}
