import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public count = [{
    num1: 0,
    num2: 0,
    inputValue: "HELLO WORLD UWU"
  }]
  constructor() {}

  ngOnInit(): void {}

  countFunction(){
    this.count.map((count)=>
    {
      count.num1 +=1,
      count.num2 +=5
    })
  }
}
