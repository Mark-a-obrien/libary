
const content = document.querySelector(".content");

let libary = [
    {author : "J.R.R Tolkien", title : "The Lord of the Rings", pageNum : 500, read : false},
    {author : "J.R.R Tolkien", title : "The Hobbit", pageNum : 400, read : false},
];


// Constructor
function Book(author, title, pageNum, read) {
    this.author = author;
    this.title = title;
    this.pageNum = pageNum;
    this.read = read;
} 


function addBookToLibary() {

}


// displays all the books in the libary
function displayLibary() {
    
    libary.forEach(book => {
        createCard(book);
    });
}


// creates a card with infromation about a book; author, title etc..
function createCard(book) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = "Author : " + book.author;

    const pageNum = document.createElement("p");
    pageNum.textContent = "Page Number : " + book.pageNum;

    const read = document.createElement("p");
    read.textContent = "Read : " + ((read) ? "Read" : "Not read");

    card.append(title, author, pageNum, read);
    content.appendChild(card);
}

displayLibary();


function getFormData() {
    const author = document.getElementById("author");
    const title = document.getElementById("title");
}


// event listener for creating a new card
const createCardButton = document.querySelector(".create");
createCardButton.addEventListener("click", () => {

    createCard(book)
})


// modal
//---------------
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
});

//closes the modal if the overlay is clicked
overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    console.log(modals);
    modals.forEach(modal => {
        closeModal(modal);
        console.log("fgysiuad");
    });
});

closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal"); // finds a parent element with class modal
        closeModal(modal);
        console.log(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}