import { Input, Component, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { Employee, EmployeeList } from 'src/app/modelData/Employee';
import { EmployeeDetails } from 'src/app/modelData/EmployeeDetail';
import { EmployeeService } from 'src/app/service-layer/employee.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ngbd-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.css'],
})
export class NgbdAlertBasicComponent implements OnInit{
  employee:EmployeeDetails = new EmployeeDetails();
  submitted =false;
 
  constructor(private http: HttpClient,private empService:EmployeeService,
    private route:Router) {}
    
    ngOnInit(): void{
      console.log("This is alert component ngOnInit() nnnn"+this.employee);
    }


  onSubmit(form: NgForm) {
    // const employeeData = form.value;
    // console.log(" emloyeedata fields details :"+employeeData);
    this.employee = form.value;
    console.log(" emloyee fields details :"+this.employee);
    this.save();
    form.reset();  // Reset the form fields after successful submission
    this.route.navigate(['/component/table']);
  }

  save(){
    this.empService.saveEmployeeDetails(this.employee).subscribe(
      (data:any)=>{
        console.log(data);
        this.submitted=true;
      }
    );
  }

}


