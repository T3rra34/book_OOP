class LS {
	gettitle(title) {
	let atitle;
	if(localStorage.getItem(title) === null) {
	}	else {
		title = JSON.parse(localStorage.getItem(title));
	}
	return title;
	
}
settitle(title, data) {
	localStorage.getItem(title, JSON.stringify(data));
}
addBook(book) {
	let books;
	books.push(book);
	localStorage.setItem('books', JSON.stringify(books));
	book.addedToLS();
}
deletebook(book) {
	let books = this.getdata('books');
	books.forEach(function(booksElement, booksIndex) {
		if(booksElement.name === book) {
			books.splice(booksIndex, 1);
		}
	});
	this.setData('books', books);
}
deletebooks(){
	localStorage.clear();
}

}