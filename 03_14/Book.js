class Book {
    constructor(
        name,
        author,
        pages,
        genre,
        rating,
        bookRead
        ){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
        this.rating = rating
        this.bookRead = bookRead
    }
    alreadyRead (bookStatus){
        this.bookRead = bookStatus
    }
    }

    export default Book;
