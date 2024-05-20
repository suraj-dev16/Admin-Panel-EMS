import { Component,OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service-layer/employee.service';
import { Employee,EmployeeList } from 'src/app/modelData/Employee';

@Component({
  selector: 'app-table',
  standalone: true,
  imports:[NgFor],
  templateUrl: 'table.component.html',
  styleUrls:['table.component.css']
})
export class TableComponent implements OnInit{
    employee: EmployeeList[];
    currentPage = 1;
    pageSize = 5;
    totalUsers = 0;
    pages: number[] = [];

  constructor(private employeeService: EmployeeService,
    private router: Router) {
      this.employee = Employee;
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    const startIndex = (this.currentPage - 1) * this.pageSize;
     this.employeeService.getEmployeesList(startIndex.toString(),this.pageSize.toString()).subscribe(
      (data:any)=>{
      this.employee=data;
      console.log("emp data in table ts file : "+data);
      //get call for total user
      this.employeeService.countUser().subscribe(
          (total:any) =>{
          this.totalUsers = total;
          console.log("total user count is : "+this.totalUsers);
          console.log("User pagination details is : |startIndex :"+startIndex +" |pagSize :"+this.pageSize+" and |currentPage :"+this.currentPage);
          this.calculatePages();
        },
        (error:any) => {
          console.error('Error fetching users pagination:', error);
        }
      );
      
    },
    (error:any) => {
      console.error('Error fetching users:', error);
    }
  );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.reloadData();
  }

  calculatePages(): void {
    const totalPages = Math.ceil(this.totalUsers / this.pageSize);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    console.log("pages count is :"+this.pages+" and total pages are :"+totalPages);
  }

  // goToPrevious(){
  //   // curPage = this.currentPage;
  //   for(let page of this.pages){
  //     this.onPageChange(page);
  //   }
  //   if(this.pages.length >=0){
  //     console.log("previous is pressed");
  //     this.onPageChange()
  //   }
  // }

  // goToNext(){
  //   const totalPages = Math.ceil(this.totalUsers / this.pageSize);
  //   if(this.currentPage < totalPages){
  //     console.log("next is pressed");
  //   }
  // }


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

  
