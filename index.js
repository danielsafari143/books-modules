import displayBooks from './modules/display.js';
import localBooks from './modules/books.js';
import adding from './modules/add.js';
import './modules/remove.js';
import dates from './modules/date.js';

setInterval(() => {
  dates();
}, 1000);
const books = [];
displayBooks(localBooks(books));
document.getElementById('add').addEventListener('click', () => {
  adding(books, displayBooks, localBooks);
});
document.getElementById('bookInput').style.display = 'none';
document.getElementById('contactInfo').style.display = 'none';

document.getElementById('listLink').addEventListener('click', () => {
  document.getElementById('bookInput').style.display = 'none';
  document.getElementById('contactInfo').style.display = 'none';
  document.getElementById('bookList').style.display = 'block';
});

document.getElementById('inputLink').addEventListener('click', () => {
  document.getElementById('bookList').style.display = 'none';
  document.getElementById('contactInfo').style.display = 'none';
  document.getElementById('bookInput').style.display = 'block';
});
document.getElementById('contactLink').addEventListener('click', () => {
  document.getElementById('bookInput').style.display = 'none';
  document.getElementById('bookList').style.display = 'none';
  document.getElementById('contactInfo').style.display = 'block';
});
