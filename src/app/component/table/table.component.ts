import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service-layer/employee.service';
import { Employee,EmployeeList } from 'src/app/modelData/Employee';

@Component({
  selector: 'app-table',
  standalone: true,
  imports:[NgFor],
  templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit{
    employee: EmployeeList[];

  constructor(private employeeService: EmployeeService,
    private router: Router) {
      this.employee = Employee;
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
     this.employeeService.getEmployeesList().subscribe((data:any)=>{
      this.employee=data;
      console.log(data)
    })
  }

  employeeDetails(id:number){
    console.log("id of the updating user is :"+id);
      // this.router.navigate(['/badges',id],{ queryParams: { id: id} });
      this.router.navigate(['/component/badges',id]);
      console.log("routing is completed in table");
  }

  deleteEmployee(id: number){
      this.employeeService.deleteEmployee(id).subscribe(
        data=>{
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
      }
  }

  
