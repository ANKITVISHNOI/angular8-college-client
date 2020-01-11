import { Component, OnInit } from '@angular/core';
import { StudentService } from "../student.service";
import { Student } from "../student";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
  }

  newStudent(): void{
    this.submitted = false;
    this.student = new Student();
  }

  onSubmit(){
    this.submitted = true;
    this.saveStudent();
  }

  saveStudent(){
    this.studentService.saveStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
      this.student = new Student();
      this.studentList();
  }

  studentList() {
    this.router.navigate(['/studentList']);
  }

}
