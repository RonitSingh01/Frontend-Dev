// Q3: Library Management System (Classes + Objects) 

class Book {
    constructor(title, author, ISBN) {
        this.title = title; // [cite: 23]
        this.author = author; // [cite: 23]
        this.ISBN = ISBN; // [cite: 23]
        this.isIssued = false; // [cite: 23]
    }

    // Method to issue the book [cite: 24]
    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            return true; // Success
        }
        return false; // Already issued
    }

    // Method to return the book [cite: 24]
    returnBook() {
        if (this.isIssued) {
            this.isIssued = false;
            return true; // Success
        }
        return false; // Already returned
    }
}

// Create an array of book objects [cite: 25]
const library = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "978-0-7432-7356-5"),
    new Book("1984", "George Orwell", "978-0-452-28423-4"),
    new Book("To Kill a Mockingbird", "Harper Lee", "978-0-06-112008-4"),
    new Book("The Catcher in the Rye", "J.D. Salinger", "978-0-316-76948-0")
];

// DOM Elements
const bookListElement = document.getElementById("available-books-list");
const issueBtn = document.getElementById("issue-btn");
const isbnInput = document.getElementById("isbn-input");
const messageArea = document.getElementById("message-area");

// Function to display all available books [cite: 26]
function displayAvailableBooks() {
    bookListElement.innerHTML = ""; // Clear current list
    
    const availableBooks = library.filter(book => !book.isIssued); // [cite: 26]
    
    if (availableBooks.length === 0) {
        bookListElement.innerHTML = "<li>No books are currently available.</li>";
        return;
    }

    availableBooks.forEach(book => {
        const li = document.createElement("li");
        li.textContent = `"${book.title}" by ${book.author} (ISBN: ${book.ISBN})`;
        bookListElement.appendChild(li);
    });
}

// Function to handle issuing a book [cite: 27]
function handleIssueBook() {
    const isbnToIssue = isbnInput.value.trim();
    messageArea.textContent = "";

    if (!isbnToIssue) {
        messageArea.textContent = "Please enter an ISBN.";
        messageArea.style.color = "red";
        return;
    }

    // Find the book by ISBN [cite: 27]
    const book = library.find(b => b.ISBN === isbnToIssue);

    if (!book) {
        messageArea.textContent = "Book with this ISBN not found.";
        messageArea.style.color = "red";
    } else if (book.isIssued) {
        messageArea.textContent = `"${book.title}" is already issued.`;
        messageArea.style.color = "orange";
    } else {
        book.issueBook(); // Issue the book [cite: 24]
        messageArea.textContent = `Successfully issued "${book.title}".`;
        messageArea.style.color = "green";
        isbnInput.value = "";
        displayAvailableBooks(); // Refresh the list
    }
}

// Initial display on page load
document.addEventListener("DOMContentLoaded", () => {
    displayAvailableBooks();
    issueBtn.addEventListener("click", handleIssueBook);
});