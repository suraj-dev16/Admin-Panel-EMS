import { Component, OnInit } from '@angular/core';
import {topcard,topcards} from './top-cards-data';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service-layer/employee.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent implements OnInit {

  employeeCount:number = 0;
  topcards:topcard[];

  constructor(private router :Router,private empService : EmployeeService) { 

    this.topcards=topcards;
  }

  ngOnInit(): void {
    this.empService.getEmployeesList().subscribe(
      
      (data:any)=>{
        console.log("getting all employee in top cards :"+data);
        let totalCount: number = 0;

        // Loop through the array
        for (let i = 0; i < data.length; i++) {
            // Increment the counter for each object in the array
            totalCount++;
        }
         // Store the total count of employees in the employeeCount variable
      this.employeeCount = totalCount;
      }
    );
   
  }

}
