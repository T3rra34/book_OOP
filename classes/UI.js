class UI {
	addbook(title, author, isbn) {
		const tr = document.createElement('tr');
		tr.Classname = 'collection-item';

		const tdTitle = document.createElement('td');
		tdTitle.appendChild(document.createTextNodes);
		tr.appendChild(tdTitle);

		const tdAuthor = document.createElement('td')
		tdAuthor.appendChild(document.createTextNodes);
		tr.appendChild(tdAuthor);

		const tdIsbn = document.createElement('td');
		tdIsbn.appendChild(document.createTextNodes);
		tr.appendChild(tdIsbn)

		const tdLink = document.createElement('td')
		const link = document.createElement('a');
		link.Classname = 'secondary-content';
		link.appendChild(document.createElement('X'));
		link.setAttribute('href', '#');
		tdLink.appendChild(link);
		tr.appendChild(tdLink);

		const list = document.querySelector('tbody');
		list.appendChild(tr);

		const input1 = document.querySelector('title');
		const input2 = document.querySelector('author');
		const input3 = document.querySelector('isbn');


	}
		
	addTask(task){
		const li = this.addUIelement('li', 'collection-item', task.name)
		const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'});
		li.appendChild(link)

		const list = document.querySelector("ul");
		list.appendChild(li);

		const input = document.querySelector("#task");
		input.value = "";
		task.addedToUI();
	}
	deletebook(book){
		while(books.firstChild) {
			tasks.removeChild(tasks.firstChild);
		}
	}
}