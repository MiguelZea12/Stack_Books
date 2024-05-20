let books = [];

function updateBookList() {
    const bookList = document.getElementById('books');
    bookList.innerHTML = '';
    books.forEach(book => {
        const list = document.createElement('li');
        list.textContent = book;
        bookList.appendChild(list);
    });
}

function addBook() {
    const bookInput = document.getElementById('bookInput');
    const newBook = bookInput.value.trim().toLocaleLowerCase();
    if (newBook) {
        if (books.includes(newBook)) {
            alert(`El libro ${newBook} ya está en el stack`);
        } else {
            books.push(newBook);
            alert(`Ya se ha incluido el libro ${newBook} al stack`);
            updateBookList();
        }
        bookInput.value = '';
    } else {
        alert('Por favor, ingresa el nombre del libro');
    }
}

function removeBook() {
    if (books.length > 0) {
        books.pop();
        alert('Se ha eliminado el último libro del stack');
        updateBookList();
    } else {
        alert('No hay libros para eliminar');
    }
}

function exitApp() {
    console.log('Adios');
    alert('La aplicación se cerrará');
    window.close();
}