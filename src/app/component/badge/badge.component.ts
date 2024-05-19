import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "src/app/modelData/Employee";
import { EmployeeDetails } from "src/app/modelData/EmployeeDetail";
import { EmployeeService } from "src/app/service-layer/employee.service";
@Component({
  templateUrl: "badge.component.html",
})
export class BadgeComponent implements OnInit { 
  submitted: boolean = false;
  id: number = 0;
  employee: EmployeeDetails;

  constructor(private activeRouter :ActivatedRoute,private router:Router,
    private employeeService : EmployeeService) {
      this.employee =new EmployeeDetails();
     }
ngOnInit(): void {
  this.employee = new EmployeeDetails();
  // this.id = this.activeRouter.snapshot.params['id'];
  this.activeRouter.params.subscribe(params=>{
    this.id = +params['id']; //use the parameter value
  });
  // this.activeRouter.queryParams.subscribe(params => {
  //   this.id = +params['id']; // + converts string to number
  // });

  this.employeeService.getEmployee(this.id).subscribe(
    data=>{
      this.employee = data;
      // console.log("this is employee data in badges "+data+"and employee :"+this.employee);
    },errors => console.log(errors)  
  );
}
updateEmployee(){
  this.employeeService.updateEmployee(this.id,this.employee).subscribe(
    (data:any)=>{
      console.log(data);
      //save employee after update
      this.employeeService.saveEmployeeDetails(data).subscribe(
        (data:any)=>{
          console.log(data);
        }
      );
      this.submitted = true;
    }
  );
}

onSubmit(){
  this.updateEmployee();
  this.gotoList();
}


gotoList() {
  this.router.navigate(['/table']);
  //this.router.navigate(['/user']);
}
  
}
