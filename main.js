// When clicking local 
let localLink = document.getElementById('local')
localLink.addEventListener('click', e => {
    // turn hello page display none
    document.getElementById('hello-cont').style.display = 'none'
    // turn local page display on
    document.getElementById('full-cont').style.display = 'block'
})

// object of book 
function Book(title, author, pagesTotal, pagesRead) {
    this.title = title
    this.author = author
    this.pagesTotal = pagesTotal
    this.pagesRead = pagesRead
    this.info = function() {
        if (read) {
            read = "read"
        } else {
            read = "not read yet"
        }

        if (pagesRead === pagesTotal) {
            pages = "fully read"
        } else {
            pages = pagesRead + " pages read from " + pagesTotal + " total" 
        }

        return title + ", " + author + ", " + pages
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

// function to add a new book in the myLibrary array
let addBook = document.getElementById('addBook')
let error = document.getElementById('errorSpan')

// all form values
let newTitle = document.getElementById('title')
let newAuthor = document.getElementById('author')
let totalPages = document.getElementById('totalPages')
let readPages = document.getElementById('readPages')

// function to open the pop up form for new book
let add = document.getElementById('add')
add.addEventListener('click', e => {
    window.scrollTo(0, 0);
    document.documentElement.style.overflow = "hidden"
    document.getElementById('form-container').style.display = "flex";
})
// function to close the pop up window and delete the text written
let close = document.getElementById('close')
close.addEventListener('click', e => {
    document.documentElement.style.overflow = "visible"
    newTitle.value = "";
    newAuthor.value = "";
    totalPages.value = ''
    readPages.value = ''
    error.innerHTML = ""
    document.getElementById('form-container').style.display = "none";
})

addBook.addEventListener('click', e => {
    // only if form is complete 
    if (newTitle.value && newAuthor.value && totalPages.value && readPages.value && totalPages.valueAsNumber >= readPages.valueAsNumber) {
        error.innerHTML = ''

        const title = document.createElement('h2')
        title.innerHTML = '"' + newTitle.value + '"'

        const author = document.createElement('h3')
        author.innerHTML = "~ " + newAuthor.value

        const pagesRead = document.createElement('p')
        pagesRead.innerHTML = "Pages read: " + readPages.valueAsNumber

        const pagesTotal = document.createElement('p')
        pagesTotal.innerHTML = "Total pages: " + totalPages.valueAsNumber

        // create div and add info class style
        const info = document.createElement('div')
        info.classList.add('info')

        // add the values in the info div
        info.appendChild(title)
        info.appendChild(author)
        info.appendChild(pagesRead)
        info.appendChild(pagesTotal)

        // create the x button
        const iconX = document.createElement('i')
        iconX.classList.add('fas')
        iconX.classList.add('fa-times')

        // create the p tag to have the i tag in 
        const pTag = document.createElement('p')

        // put the iconX in the pTag
        pTag.appendChild(iconX)

        // create the btns div to add the pTag
        const btns = document.createElement('div')
        btns.classList.add('btns')
        btns.appendChild(pTag)

        // create div and add book class style
        const item = document.createElement('div')
        item.classList.add('book')
        if (totalPages.valueAsNumber > readPages.valueAsNumber) {
            item.classList.add('book-not-read')
        } else {
            item.classList.add('book-read')
        }

        // add the info and btns cont
        item.appendChild(info)
        item.appendChild(btns)

        // append the item in the container
        container.insertBefore(item, container.firstChild)

        // remove values and close form
        newTitle.value = "";
        newAuthor.value = "";
        totalPages.value = ''
        readPages.value = ''
        document.getElementById('form-container').style.display = "none";


        document.documentElement.style.overflow = "visible"
        displayBooks(myLibrary)
    } // error handling
    else {
        error.innerHTML = "You forgot to input something"
    }
})