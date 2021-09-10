//------------------ UI elements ------------------
// hello page
let helloPage = document.getElementById('hello-cont')
let cloudLink = document.getElementById('cloud')
let localLink = document.getElementById('local')
//---- home page ----
let homePage = document.getElementById('full-cont')
// nav
let signIn = document.getElementById('signIn')
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
// book buttons
let deleteBook = document.querySelector('.exit-x')
let editBook = document.querySelector('.edit-pem')


//---- hello page choice making ----
// cloud link choice
cloudLink.addEventListener('click', e => {
    // open the cloud sign in
})

// local link choice
localLink.addEventListener('click', e => {
    helloPage.style.display = 'none'
    homePage.style.display = 'block'
})

// sign in to cloud from local link
signIn.addEventListener('click', e => {
    // open the cloud sign in
})

// display form for new book to be added
displayForm.addEventListener('click', e => {
    window.scrollTo(0, 0); // scroll to top
    document.documentElement.style.overflow = "hidden" // remove scrollability
    formContainer.style.display = "flex";
})

// close down form 
closeForm.addEventListener('click', e => {
    document.documentElement.style.overflow = "visible" // allow scrollability again
    formTitle.value = ""
    formAuthor.value = ""
    formReadPages.value = ""
    formTotalPages.value = ""
    formError.innerHTML = ""
    formContainer.style.display = "none";
})

// function to check form entries
function checkFormValues() {
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

// function when add book form is submitted
formSubmit.addEventListener('click', e => {
    if (checkFormValues()) {
        console.log("yes")
    } else {
        console.log("no")
    }
})

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
    static displayBooks() {
        // this is hard coded for testing purposes only
        const storedBooks = [
            {
                title: "Book One",
                author: "Author One",
                pagesRead: 23,
                pagesTotal: 200,
                isbn: '45672'
            },
            {
                title: "Book Two",
                author: "Author Two",
                pagesRead: 200,
                pagesTotal: 200,
                isbn: '45674'
            }
        ]

        const books = storedBooks;

        // Loop : books and add each to list 
        books.forEach((book) => UI.addBookToList(book));
    }

    // Function : to add Book to List
    static addBookToList(book) {
        // Get : the container of books
        let library = document.getElementById('container')

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
                <p>ISBN : ${book.isbn}</p>
            </div>
            <div class="btns">
                <p><i class="fas fa-times exit-x"></i></p>
                <p><i class="fas fa-pen edit-pen"></i></p>
            </div>
        `;

        // Append : the item created above in the container
        library.appendChild(item);
    }
}

// Store Class : represents the storing of the books 

// Event : Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : Add a Book

// Event : Remove a Book
