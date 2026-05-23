import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  //templateUrl: './ngif.html',
  //templateUrl: './ngSwitchCase.html',
  templateUrl: './ngFor.html',
  //templateUrl: './ngClass.html',
  //templateUrl: './ngStyle.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  {

  //for ngif else
  myCon = true;

  //for ngSwitchCase
  myVar = 'data2';

  //for ngFor
  courses =[
    {id: 1, name: 'Ms dhoni'},
    {id: 2, name: 'Virat'},
    {id: 3, name: 'rohit'}
  ];
  trackMethod(course) {
    return course.id;
  }
  onRemove(course) {
    this.courses.splice(this.courses.indexOf(course), 1);
  }
  onAdd(course) {
    console.log(course);
    if(course.value)
    {
      let ind = this.courses.length;
      this.courses.push({id: ++ind, name: course.value});
    }
  }

  //for ng style and ng class
  isSelected = true;
}
