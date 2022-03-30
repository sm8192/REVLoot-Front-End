import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html',
  styleUrls: ['./search-test.component.css']
})
export class SearchTestComponent implements OnInit {
  searchText: any;
  products = [
    'Rubber Ball',
    'Ballpoint Pen',
    'Pencil',
    'Mousepad',
    'Gupta',
    'Rubber Ball',
    'Ballpoint Pen',
    'Pencil',
    'Mousepad',
    'Gupta',
    'Rubber Ball',
    'Ballpoint Pen',
    'Pencil',
    'Mousepad',
    'Gupta',
    'Rubber Ball',
    'Ballpoint Pen',
    'Pencil',
    'Mousepad',
    'Gupta',
    'Rubber Ball',
    'Ballpoint Pen',
    'Pencil',
    'Mousepad',
    'Gupta',

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
