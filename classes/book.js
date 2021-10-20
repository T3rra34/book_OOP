class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
	addedTOUI() {
		console.log(this.title + ' is added to UI')
		console.log(this.author + ' is added to UI')
		console.log(this.isbn + ' is added to UI')
	}
	addedTOLS() {
		console.log(this.title + ' is added to LS')
		console.log(this.author + ' is added to LS')
		console.log(this.isbn + ' is added to LS')
	}
}