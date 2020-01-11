import { Component, OnInit } from '@angular/core';
import { StudentService } from "../student.service";
import { Student } from "../student";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: number;
  student: Student;

  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.student = new Student();
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id)
    .subscribe(data => {
      console.log(data)
      this.student = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.updateStudent();
  }

  updateStudent(){
    this.studentService.updateStudent(this.id, this.student)
    .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
    this.studentList();
  }
  studentList() {
    //window.location.reload;
    this.router.navigate(['/studentList']);
  }

}
