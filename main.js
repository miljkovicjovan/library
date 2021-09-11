//------------------ UI elements ------------------
// hello page
let helloPage = document.getElementById('hello-cont')
let cloudLink = document.getElementById('cloud')
let localLink = document.getElementById('local')
//---- home page ----
let homePage = document.getElementById('full-cont')
// nav
let signIn = document.getElementById('signIn')
// alert 
let alert = document.getElementById('alert');
// add button
let displayForm = document.getElementById('add')
// form container
let formContainer = document.getElementById('form-container')
let closeForm = document.getElementById('close')
let formTitle = document.getElementById('title')
let formAuthor = document.getElementById('author')
let formReadPages = document.getElementById('readPages')
let formTotalPages = document.getElementById('totalPages')
let formSubmit = document.getElementById('addBook')
let formError = document.getElementById('errorSpan')
// info cont
let booksAdded = document.getElementById('booksAdded')
let booksRead = document.getElementById('booksRead')
let pagesRead = document.getElementById('pagesRead')
// books cont
let library = document.getElementById('container')
// book buttons
let deleteBook = document.querySelector('.exit-x')
let editBook = document.querySelector('.edit-pem')

// Book class : represents each book added (title/author/pages read/total pages)
class Book {
    constructor(title, author, pagesRead, pagesTotal, isbn) {
        this.title = title;
        this.author = author;
        this.pagesRead = pagesRead;
        this.pagesTotal = pagesTotal;
        this.isbn = isbn;
    }
}



// UI Class : represents User Interface and all actions connected 
class UI {

    // Function : to display the books that are in the list
    static displayBooks() {

        const storedBooks = []

        // to make a global variable
        window.books = storedBooks;

        // Loop : books and add each to list 
        books.forEach((book) => UI.addBookToList(book));
    }


    // Function : create an ISBN that is not on the list
    static getISBN() {
        let isbn;
        while (true) {
            isbn = Math.floor(Math.random() * 99999);

            books.forEach((book) => {
                if (isbn === book.isbn) {
                    UI.getISBN;
                }
            });
            break;
        }
        return isbn;
    }

    // Function : to add Book to List
    static addBookToList(book) {

        // Create the div : for each book and make it of class book
        const item = document.createElement('div');
        item.classList.add('book');

        // Check : if book-read or book-not-read
        if (book.pagesRead === book.pagesTotal) {
            item.classList.add('book-read');
        } else {
            item.classList.add('book-not-read');
        }

        // Create : the inner HTML look of the book div
        item.innerHTML = `
            <div class="info">
                <h2>"${book.title}"</h2>
                <h3>~ ${book.author}</h3>
                <p>Pages read: ${book.pagesRead}</p>
                <p>Total pages: ${book.pagesTotal}</p>
                <p id="isbn">ISBN : ${book.isbn}</p>
            </div>
            <div class="btns">
                <p><i class="fas fa-times exit-x"></i></p>
                <p><i class="fas fa-pen edit-pen"></i></p>
            </div>
        `;

        // Append : the item created above in the container
        library.appendChild(item);
    }

    // Function : clear form fields (for when exiting and submiting)
    static clearFormFields() {
        document.documentElement.style.overflow = "visible"; // allow scrollability again
        formTitle.value = "";
        formAuthor.value = "";
        formReadPages.value = "";
        formTotalPages.value = "";
        formError.innerHTML = "";
        formContainer.style.display = "none";
    }

    // Function : check form values and display errors
    static checkFormValues() {
        if (formTitle.value && formAuthor.value && formReadPages.value && formTotalPages.value) {
            if (formReadPages.valueAsNumber <= formTotalPages.valueAsNumber) {
                return true
            } else {
                formError.innerHTML = "You made a mistake when inputting page details"
                return false
            }
        } else {
            formError.innerHTML = "You forgot to input book details"
            return false
        }
    }

    // Function : show alerts (book added/book deleted)
    static showAlert(message, style) {
        const div = document.createElement('div');
        div.className = `alert alert-${style}`;
        div.appendChild(document.createTextNode(message));
        alert.appendChild(div);

        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    // Function : delete the book that the x was located in 
    static deleteBook(target) {
        if (target.classList.contains('exit-x')) {
            target.parentElement.parentElement.parentElement.remove();
        }
    }
}

// Store Class : represents the storing of the books 

// Event : Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : Choosing local storage on the welcome page
localLink.addEventListener('click', e => {
    helloPage.style.display = 'none';
    homePage.style.display = 'block';
})

// Event : display form for new book to be added
displayForm.addEventListener('click', e => {
    window.scrollTo(0, 0); // scroll to top
    document.documentElement.style.overflow = "hidden"; // remove scrollability
    formContainer.style.display = "flex";
})

// Event : close down form and delete all values left
closeForm.addEventListener('click', e => {
    UI.clearFormFields();
})

// Event : Add a Book
formSubmit.addEventListener('click', e => {

    // Action : Get form values
    const title = formTitle.value;
    const author = formAuthor.value;
    const pagesRead = formReadPages.value;
    const pagesTotal = formTotalPages.value;
    const isbn = UI.getISBN();

    // Action : check form values
    if (UI.checkFormValues()) {
        // Action : Instantiate book
        const book = new Book(title, author, pagesRead, pagesTotal, isbn);

        // Action : add book to the UI
        UI.addBookToList(book);

        // Action : show success alert
        UI.showAlert(`The book "${book.title} has been added to your Library"`, 'success');

        // Action : clear form fields
        UI.clearFormFields();
    }
    
});

// Event : Remove a Book
library.addEventListener('click', e => {
    UI.deleteBook(e.target);

    // Action : show success alert
    UI.showAlert(`The book has been deleted from your Library`, 'danger');
});
