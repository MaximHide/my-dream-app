import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-main',
  templateUrl: './component-main.component.html',
  styleUrls: ['./component-main.component.css']
})
export class ComponentMainComponent implements OnInit {

  list: any[] =
    [{name: 'Amigo', age: 27, money: 38, address: 'Kyiv'},
      {name: 'Pedro', age: 31, money: 44, address: 'Kyiv'},
      {name: 'Luiza', age: 42, money: 35, address: 'Kyiv'},
      {name: 'Arnold', age: 44, money: 87, address: 'Kyiv'},
      {name: 'Juanito', age: 58, money: 1000, address: 'Lviv'},
      {name: 'Amigo', age: 76, money: 181, address: 'Kyiv'},
      {name: 'Amigo', age: 41, money: 489, address: 'Mukachevo'},
      {name: 'JuanitoTo', age: 38, money: 41, address: 'Kyiv'},
      {name: 'Amigo', age: 21, money: 19, address: 'Lviv'},
      {name: 'Amigo', age: 18, money: 0, address: 'Mukachevo'},
      {name: 'Rozilda', age: 22, money: 415, address: 'Kyiv'},
      {name: 'Amigo', age: 31, money: 418, address: 'Lviv'},
      {name: 'Jorje', age: 41, money: 359, address: 'Mukachevo'},
      {name: 'Ivan', age: 18, money: 482, address: 'Kyiv'},
      {name: 'Andres', age: 19, money: 441, address: 'Kyiv'},
      {name: 'Amigo', age: 22, money: 10000, address: 'Mukachevo'}];


  constructor() {
  }

  ngOnInit() {
  }

}
