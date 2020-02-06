import {Injectable} from '@angular/core';
import {Book} from '../model/book';
import {Author} from '../model/author';

@Injectable({providedIn: 'root'})
export class GetDataService {

  private listOfBooks: Book[] = [];
  private listOfAuthors: Author[] = [];

  constructor() {
    const bookOne = new Book(1, 'A', 10, 1);
    const bookTwo = new Book(2, 'B', 15, 1);
    const bookThree = new Book(3, 'C', 16, 3);
    const bookFour = new Book(4, 'D', 17, 3);
    const bookFive = new Book(5, 'E', 18, 4);
    const bookSix = new Book(6, 'F', 119, 4);
    this.listOfBooks.push(bookOne);
    this.listOfBooks.push(bookTwo);
    this.listOfBooks.push(bookThree);
    this.listOfBooks.push(bookFour);
    this.listOfBooks.push(bookFive);
    this.listOfBooks.push(bookSix);
    const authorOne = new Author(1, 'Pedro');
    const authorTwo = new Author(2, 'Amigo');
    const authorThree = new Author(3, 'Jose');
    const authorFour = new Author(4, 'Luis');
    this.listOfAuthors.push(authorOne);
    this.listOfAuthors.push(authorTwo);
    this.listOfAuthors.push(authorThree);
    this.listOfAuthors.push(authorFour);
  }

  getAllBooks(): Book[] {
    return this.listOfBooks;
  }

  getAllAuthors(): Author[] {
    return this.listOfAuthors;
  }

}
