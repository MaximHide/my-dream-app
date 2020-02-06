export class Book {

  bookId: number;
  bookName: string;
  price: number;
  authorId: number;

  constructor(bookId: number, bookName: string, price: number, authorId?: number) {
    this.bookId = bookId;
    this.bookName = bookName;
    this.price = price;
    this.authorId = authorId;
  }
}
