import { Component, OnInit } from '@angular/core';
import { StudentService } from "../student.service";
import { Student } from "../student";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

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

  studentList() {
    this.router.navigate(['/studentList']);
  }

}
