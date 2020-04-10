import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Career } from 'src/app/services/career.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  title :string = 'Careers';
  careers$ = new Observable<Career[]>();
  selectedCareer: Career;
  careersNb = 0;


  // Pagination
  pageSize = 3;
  start = 0;
  end = this.pageSize;
  currentPage = 1;

  previousPage() {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
    this.currentPage--;
    this.selectedCareer = null;
  }

  nextPage() {
    this.start += this.pageSize;
    this.end += this.pageSize;
    this.currentPage++;
    this.selectedCareer = null;
  }


  onSelect(career: Career) {
    this.selectedCareer = career;
  }

  constructor(private careerService: CareerService) { }

  ngOnInit():void {
    
    
    
    this.careers$ = this
    .careerService
    .careers$
    .pipe(
      tap(results => this.careersNb = results.length)
    );

}

}
