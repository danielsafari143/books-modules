const displayBooks = (booksList) => {
  const booksContainer = document.getElementById('books');
  booksContainer.innerHTML = '';
  for (let i = 0; i < booksList.length; i += 1) {
    booksContainer.innerHTML += `
            <br>
            <div class="main-div">  <p class="pargraph-books">"${booksList[i].title}" by ${booksList[i].author}</p>
            <div class="buton-books"> <button  id="remove${i}" onclick="removeItem(${i})" >Remove</button><br/></div> 
            <br/></div>
          `;
  }
};
export default displayBooks;