import { Component, OnInit } from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { from, Observable } from 'rxjs';
import { StudentService } from "../student.service";
import { Student } from "../student";
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList: Observable<Student[]>;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.studentList = this.studentService.getStudentList();
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id)
    .subscribe(
         data => {console.log(data); this.getData();},
         error => console.log(error)   
    );
  }

  studentDetails(id: number){
    this.router.navigate(['getById', id]);
  }

}
