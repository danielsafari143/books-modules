const removeItem = (items) => {
  if (items !== undefined) {
    let localItem = JSON.parse(localStorage.getItem('Books'));
    const booksContainer = document.getElementById('books');
    const removedItem = localItem.filter(
      (item) => item.id !== localItem[items].id,
    );
    localStorage.setItem('Books', JSON.stringify(removedItem));
    booksContainer.innerHTML = '';
    localItem = JSON.parse(localStorage.getItem('Books'));
    for (let i = 0; i < localItem.length; i += 1) {
      booksContainer.innerHTML += `
              <br>
              <div class="main-div">  <p class="pargraph-books">"${localItem[i].title}" by ${localItem[i].author}</p>
              <div class="buton-books"> <button  id="remove${i}" onclick="removeItem(${i})" >Remove</button><br/></div> 
              <br/></div>
            `;
    }
  }
};
removeItem();