import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  //templateUrl: './pipes.component.html',
  templateUrl: './customPipe.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  course = {
    title: "This is test course",
    rating: 4.9745,
    students: 303030,
    price: 343.45,
    releaseDate: new Date()
  }

  //for custom pipes
  text = "12345678987546455555555555555555555666666666666666666666666666666666654545454545454545454545454545454546666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666";
}
