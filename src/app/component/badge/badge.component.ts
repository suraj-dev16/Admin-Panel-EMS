import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "src/app/modelData/Employee";
import { EmployeeDetails } from "src/app/modelData/EmployeeDetail";
import { EmployeeService } from "src/app/service-layer/employee.service";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-ngbd-badge',
  templateUrl: "badge.component.html",
  styleUrls: ['badge.component.css'],
})
export class BadgeComponent implements OnInit { 
  employee:EmployeeDetails;
  submitted =false;
  id: number = 0;
  // employee: EmployeeDetails;

  constructor(private activeRouter :ActivatedRoute,private router:Router,
    private employeeService : EmployeeService,private http: HttpClient) {
       this.employee =new EmployeeDetails();
     }
ngOnInit(): void {
  // this.employee = new EmployeeDetails();

  this.activeRouter.params.subscribe(params=>{
    this.id = +params['id']; //use the parameter value
    console.log("converted value of id :"+this.id);
  });

  this.employeeService.getEmployee(this.id).subscribe(
    data=>{
      this.employee = data;
      console.log("this is employee data in badges "+data+"and employee :"+this.employee+"emp name is "+this.employee.name);
    },errors => console.log(errors)  
  );

}


onUpdate(form: NgForm){
  const updatedUser = form.value;
  console.log(" emloyee fields details :"+updatedUser);
  this.employeeService.updateEmployee(this.id,updatedUser).subscribe(
    (data:any)=>{
      console.log(data);
      this.submitted = true;
      this.gotoList();
    },
    error => {
      console.error('Error updating user details:', error);
    }
  );
}

// onSubmit(form: NgForm){
//   const updatedUser = form.value;
//   console.log(" emloyee fields details :"+updatedUser);
//   this.updateEmployee(updatedUser);
// }

gotoList() {
  this.router.navigate(['/component/table']);
  //this.router.navigate(['/user']);
}

onBackKey(){
  this.router.navigate(['/component/table']);
}
  
}
