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
// books cont
let library = document.getElementById('container')
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