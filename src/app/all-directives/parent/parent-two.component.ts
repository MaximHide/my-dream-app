import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../service/general.service';
import {GetDataService} from '../service/get-data.service';
import {Book} from '../model/book';
import {Author} from '../model/author';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.css']
})
export class ParentTwoComponent implements OnInit {
  books: Book[] = [];
  authors: Author[] = [];


  constructor(public service: GeneralService, public dataService: GetDataService) {
  }

  ngOnInit() {
    this.books = this.dataService.getAllBooks();
    this.authors = this.dataService.getAllAuthors();
  }

  clickButton() {
    this.service.buttonWasClicked();
  }

  deleteAllBooks() {
    this.books = [];
  }

}
