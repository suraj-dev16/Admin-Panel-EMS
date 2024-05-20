import { Component, OnInit } from '@angular/core';
import {Product,TopSelling} from './top-selling-data';
import { Employee, EmployeeList } from 'src/app/modelData/Employee';
import { EmployeeService } from 'src/app/service-layer/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html'
})
export class TopSellingComponent implements OnInit {

  employee:EmployeeList[];
  // currentPage = 1;
  // pageSize = 5;
  // totalUsers = 0;

  constructor(private employeeService:EmployeeService,
    private route: Router) { 

    this.employee=Employee;
  }

  ngOnInit(): void {
    this.readEmpData();
  }

  readEmpData(){
    // const startIndex = (this.currentPage - 1) * this.pageSize;
    this.employeeService.getEmployeeListWithoutPagination().subscribe((data:any)=>{
      this.employee = data;
      console.log(this.employee);
    }
    )
  
  }


}
