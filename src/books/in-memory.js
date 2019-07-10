function lastId(items) {
  let id = -1;
  if(items.length > 0) {
    id = items[items.length - 1].id;
  }
  return id;
}

function withNewBook(books, title) {
  return [
    ...books,
    {id: lastId(books) + 1, title, chapters: []},
  ];
}

function withNewChapter(books, bookId, title) {
  const book = books.find(book => book.id === bookId);
  book.chapters.push({
    id: lastId(book.chapters) + 1,
    title,
    arguments: []
  });
  return books;
}

function withNewArgument(books, bookId, chapterId, argument) {
  const book = books.find(book => book.id === bookId);
  const chapter = book.chapters.find(chapter => chapter.id === chapterId);
  chapter.arguments.push(argument);
  return books;
}

export default { withNewBook, withNewChapter, withNewArgument };
