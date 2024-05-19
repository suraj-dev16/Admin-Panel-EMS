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

  constructor(private employeeService:EmployeeService,
    private route: Router) { 

    this.employee=Employee;
  }

  ngOnInit(): void {
    this.readEmpData();
  }

  readEmpData(){
    this.employeeService.getEmployeesList().subscribe((data:any)=>{
      this.employee = data;
      console.log(this.employee);
    }
    )
  
  }


}
