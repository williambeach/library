let myLibrary = [{title: "The Principles of Object-Oriented JavaScript", author: "Nicholas C. Zakas",
pages: 120, read: true}, {title: "Inside the Machine: An Illustrated Introduction to Microprocessors and Computer Architecture", author: "Jon Stokes", 
pages: 320, read: false}, {title: "Structure and Interpretation of Computer Programs", author: ["Harold Abelson", "Gerald Jay Sussman", "Julie Sussman"],
pages: 657, read: false}, {title: "Design Patterns: Elements of Reusable Object-Oriented Software", author: ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"],
pages: 416, read: false}, {title: "Code: The Hidden Language of Computer Hardware and Software", author: "Charles Petzold",
pages: 400, read: false}, {title: "Cracking the Coding Interview: 189 Programming Questions and Solutions", author: "Gayle Laakmann McDowell",
pages: 687, read: true}, {title: "Code Complete: A Practical Handbook of Software Construction", author: "Steve McConnell", 
pages: 960, read: false}, {title: "Programming Pearls", author: "Jon Bentley",
pages: 256, read: false}, {title: "The Pragmatic Programmer: Your Journey to Mastery", author: ["Andrew Hunt", "David Thomas"],
pages: 352, read: false}, {title: "Code Simplicity", author: "Max Kanat-Alexander",
pages: 84, read: false}, {title: "Algorithms to Live By: The Computer Science of Human Decisions", author: "Jon Bentley",
pages: 368, read: false}, {title: "Clean Code: A Handbook of Agile Software Craftmanship", author: "Robert C. Martin",
pages: 464, read: false}];

const buttons = document.querySelectorAll('button');
const books = document.querySelectorAll('.book');
const searchButton = document.querySelector('#search');
const main = document.querySelector('main');
const body = document.querySelector('body');
const header = document.querySelector('header');
const newDiv = document.createElement("div");


function hoverEffect() {
    for (let i=0; i<buttons.length;i++) {
        buttons[i].addEventListener("mouseover", ()=> {
            buttons[i].classList.add('mouseHover');
        buttons[i].addEventListener("mouseout", ()=> {
            buttons[i].classList.remove("mouseHover");
        });    
        });
    }
    for (let i=0; i<books.length; i++) {
        books[i].addEventListener("mouseover", ()=> {
            books[i].classList.add('bookHover');
        books[i].addEventListener("mouseout", ()=> {
            books[i].classList.remove("bookHover");
        });
        });
    }
}

function searchBooks() {
    let currentValue = searchButton.value;
    if (currentValue == "off") {
        searchButton.value = "on";
        header.after(newDiv);
        body.style.gridTemplateColumns = "60px 1fr 1fr";
    } else {
        searchButton.value = "off";
        newDiv.remove();
        body.style.gridTemplateColumns = "60px 1fr";
    }
}





hoverEffect();
searchBooks();