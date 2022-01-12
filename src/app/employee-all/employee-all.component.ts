import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-all',
  templateUrl: './employee-all.component.html',
  styleUrls: ['./employee-all.component.css']
})
export class EmployeeAllComponent implements OnInit {

  //Define array variable
  employees: Employee[] = [];
  message: string = '';

  //Dependency Injection
  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  //Call service method to fetch data
  getAllEmployee() {
    this.service.fetchAllEmployee().subscribe(
      data => {
        this.employees = data;
      }, error => {
        console.log(error);
      }
    );
  }

  //Call service method to delete employee data
  deleteEmployee(id: number) {
    //alert('Delete clicked '+id);
    this.service.removeOneEmployee(id).subscribe(
      data => {
        this.message = data;
        this.getAllEmployee();
      }, error => {
        console.log(error);
      }
    );
  }
}
