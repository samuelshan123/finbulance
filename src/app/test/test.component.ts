import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
   type:any = localStorage.getItem("type");



  constructor() { }

  ngOnInit() {

    console.log(this.type);
    
  }

}
