const localBooks = (books) => {
  const storage = JSON.parse(localStorage.getItem('Books'));
  return storage || books;
};

export default localBooks;