import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
 //templateUrl: './propertyBinding.html',
  //templateUrl: './attributeBinding.html',
  //templateUrl: './classBinding.html',
  //templateUrl: './styleBinding.html',
  //templateUrl: './eventBinding.html',
  //templateUrl: './templateVar.html',
  templateUrl: './twoWayBinding.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  userName = 'Kishan';

  //for property binding:
  imgUrl = 'https://blog.launchdarkly.com/wp-content/uploads/2017/02/maxresdefault-1.jpg';

  //for attribute binding
  isEnabled = false;

   //for class binding
   isRed = true;

   //for style binding
   bgBlue = true;

   //for eventBinding
   onMyClick(event: Event) {
     console.log(event);
   }

   //for template var
   onMychange(email) {
    console.log(email);
   }

   //for two- way binding
   name = 'kishan';
}
