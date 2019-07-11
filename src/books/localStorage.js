function fetch() {
    let books = localStorage.getItem('books');
    if(books === null) {
        books = [];
    } else {
        books = JSON.parse(books);
    }
    return books;
}

function store(books) {
    localStorage.setItem('books', JSON.stringify(books));
}

export default { fetch, store };
