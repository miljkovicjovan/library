// object of book 
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if (read) {
            read = "read"
        } else {
            read = "not read yet"
        }
        return title + ", " + author + ", " + pages + " pages, " + read
    }
}

// array of books 
let myLibrary = []

// variables of HTML elements
let book = document.getElementById('book')
let container = document.getElementById('container')

// function to display the books HTML
function displayBooks(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        // get the info of every book
        const title = document.createElement('h2')
        title.innerHTML = myLibrary[i].title

        const author = document.createElement('h3')
        author.innerHTML = myLibrary[i].author

        const pages = document.createElement('p')
        pages.innerHTML = myLibrary[i].pages

        const read = document.createElement('h5')
        read.innerHTML = (myLibrary[i].read)?"Read":"Not Read"

        // create div and add book class style
        const item = document.createElement('div')
        item.classList.add('book')

        // add the info of the books in the item
        item.appendChild(title)
        item.appendChild(author)
        item.appendChild(pages)
        item.appendChild(read)

        // append the item in the container
        container.insertBefore(item, container.firstChild)
    }
} 

// function to open the pop up form for new book
let add = document.getElementById('add')
add.addEventListener('click', e => {
    document.querySelector('.form-container').style.display = "flex";
})
let close = document.querySelector('.close')
close.addEventListener('click', e => {
    document.querySelector('.form-container').style.display = "none";
})

// function to add a new book in the myLibrary array
let addBook = document.getElementById('addBook')
let error = document.getElementById('errorSpan')

addBook.addEventListener('click', e => {
    // all form values
    let newTitle = document.getElementById('title')
    let newAuthor = document.getElementById('author')
    let newPages = document.getElementById('pages')
    let readYes = document.getElementById('yes')
    let readNo = document.getElementById('no')

    // only if form is complete 
    if (newTitle.value && newAuthor.value && newPages.value && (readNo.checked || readYes.checked)) {
        error.innerHTML = ''
        let readAns = (readNo.checked) ? false : true
       
        const title = document.createElement('h2')
        title.innerHTML = newTitle.value

        const author = document.createElement('h3')
        author.innerHTML = newAuthor.value

        const pages = document.createElement('p')
        pages.innerHTML = newPages.value

        const read = document.createElement('h5')
        read.innerHTML = readAns

        // create div and add book class style
        const item = document.createElement('div')
        item.classList.add('book')

        // add the info of the books in the item
        item.appendChild(title)
        item.appendChild(author)
        item.appendChild(pages)
        item.appendChild(read)

        // append the item in the container
        container.insertBefore(item, container.firstChild)

        // remove values and close form
        newTitle.value = "";
        newAuthor.value = "";
        newPages.value = "";
        (readAns) ? readYes.checked = false : readNo.checked = false
        document.querySelector('.form-container').style.display = "none";


        displayBooks(myLibrary)
    } // error handling
    else {
        error.innerHTML = "You forgot to input something"
    }
})