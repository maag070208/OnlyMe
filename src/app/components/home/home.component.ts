import { Component, OnInit } from '@angular/core';
import { NgModelGroup } from '@angular/forms';
import { Modelo } from 'src/app/models/modelo/modelo.module';

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
  people: Modelo ={
    name: '',
    age: 0
  };

  
  constructor() {
    this.people.name= "fulanito"
    this.people.age = 20;
  }

  ngOnInit(): void {}

  countFunction(){
    this.count.map((count)=>
    {
      count.num1 +=1,
      count.num2 +=5
    })
  }
}
