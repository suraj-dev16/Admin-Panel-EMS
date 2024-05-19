import { Input, Component, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { Employee, EmployeeList } from 'src/app/modelData/Employee';
import { EmployeeDetails } from 'src/app/modelData/EmployeeDetail';
import { EmployeeService } from 'src/app/service-layer/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngbd-alert',
  templateUrl: 'alert.component.html',
  standalone:true,
})
export class NgbdAlertBasicComponent implements OnInit{
  employee:EmployeeDetails = new EmployeeDetails();
  submitted =false;
  constructor(private empService:EmployeeService,
    private route:Router){
      
  }
  ngOnInit(): void{
    console.log("This is alert component ngOnInit() nnnn"+this.employee);
  }

  onSubmit(){
    console.log("This is alert component OnSubmit()");
    this.submitted = true;
    console.log("This is alert component OnSubmit()"+this.submitted);
  }
  save(){
    this.empService.saveEmployeeDetails(this.employee).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );
  }

}


