# Book argument flow app

An app that keeps track of arguments made in chapters of a book.

## TODO

Implement initial requirements with minimal design for mobile viewport with in-memory db.

## Requirements

All information is saved to a file at the moment.

A list of books.
A book consists of a title and a cover image.
For now, to add a new book, it has to be added to the database manually.

Clicking on a book cover or its title navigates to a list of chapters.
There’s a plus button below all chapters to add a new one.
The button appends a new chapter list item where the title is an input field.

Clicking on a chapter title navigates to a flow (list) of arguments.
The addition of a new flow item is the same as adding a new chapter.
You can also edit and delete a flow item.
Editing it looks like adding a new one, but the input field is pre-filled.
Deleting it prompts a confirmation message below it.

## Technical stack

- React
- React router
- React bootstrap

## IndexedDB

[Google](https://developers.google.com/web/ilt/pwa/working-with-indexeddb)

[Some blog](https://flaviocopes.com/indexeddb/)

[Promises library](https://github.com/jakearchibald/idb)
