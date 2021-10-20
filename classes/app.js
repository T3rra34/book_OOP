ui = new UI();
ls = new LS();

const form = document.querySelector('form');
const title = document.querySelector('title');
const author = document.querySelector('author');
const isbn = document.querySelector('isbn')
const btn = document.querySelector('')

form.addEventListener('publish', addBook);

console.log(document.querySelector('tbody'));

function addBook(e) {
	const bTitle = title.value;
	const bAuthor = author.value;
	const bIsbn = isbn.value;
	ui.addBook(bTitle, bAuthor, bIsbn);
	console.log('pressed')
	e.preventDefault();
}
function deletebook(e) {
	let book = e.target.parentElement.firstChild;
	ui.deletebook(book);
	book = book.TextContent;
}

