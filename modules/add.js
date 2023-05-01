const adding = (books, displayBooks, localBooks) => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  if (title.value.length > 1 && author.value.length > 1) {
    books = localBooks(books);
    books.push({
      id: Date.now(),
      title: title.value,
      author: author.value,
    });
    localStorage.setItem('Books', JSON.stringify(books));
    displayBooks(localBooks(books));
    title.value = '';
    author.value = '';
  }
};

export default adding;
