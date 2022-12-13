import { Author, Book } from "./types";

const BOOKS: Book[] = [
  { id: 1, title: "Dragon fight", authorId: 1 },
  { id: 2, title: "Duck riding for dummies", authorId: 1 },
  { id: 3, title: "Graphql for dummies", authorId: 2 },
  { id: 4, title: "Dataloader for Albert E", authorId: 3 },
  { id: 5, title: "Black holes and where to find them", authorId: 3 },
  { id: 6, title: "Lion dentistry 101", authorId: 4 },
];
const AUTHORS: Author[] = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Hermonie Granger" },
  { id: 3, name: "Leo Tolstoy" },
  { id: 4, name: "Anna Smith" },
];

class FakeDb {
  constructor(books: Book[], authors: Author[]) {
    this.books = books;
    this.authors = authors;
  }
  private books: Book[];
  private authors: Author[];
  public counter: number = 0;

  private async sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  public async getAllAuthors() {
    await this.sleep(1000);
    return this.authors;
  }

  public async getBookById(id: number) {
    console.log("call counter", this.counter);
    this.counter++;
    await this.sleep(1000);
    return this.books.filter((book) => book.authorId === id);
  }

  public resetCounter() {
    this.counter = 0;
    return;
  }
}

const fakeDb = new FakeDb(BOOKS, AUTHORS);

export default fakeDb;
