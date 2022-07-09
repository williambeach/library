let myLibrary = [{title: "The Principles of Object-Oriented JavaScript", author: "Nicholas C. Zakas",
pages: 120, read: true}, {title: "Inside the Machine: An Illustrated Introduction to Microprocessors and Computer Architecture", author: "Jon Stokes", 
pages: 320, read: false}, {title: "Structure and Interpretation of Computer Programs", author: "Harold Abelson, Gerald Jay, Sussman Julie Sussman",
pages: 657, read: false}, {title: "Design Patterns: Elements of Reusable Object-Oriented Software", author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
pages: 416, read: false}, {title: "Code: The Hidden Language of Computer Hardware and Software", author: "Charles Petzold",
pages: 400, read: false}, {title: "Cracking the Coding Interview: 189 Programming Questions and Solutions", author: "Gayle Laakmann McDowell",
pages: 687, read: true}, {title: "Code Complete: A Practical Handbook of Software Construction", author: "Steve McConnell", 
pages: 960, read: false}, {title: "Programming Pearls", author: "Jon Bentley",
pages: 256, read: false}, {title: "The Pragmatic Programmer: Your Journey to Mastery", author: "Andrew Hunt, David Thomas",
pages: 352, read: false}, {title: "Code Simplicity", author: "Max Kanat-Alexander",
pages: 84, read: false}, {title: "Algorithms to Live By: The Computer Science of Human Decisions", author: "Brian Christian, Tom Griffiths",
pages: 368, read: false}, {title: "Clean Code: A Handbook of Agile Software Craftmanship", author: "Robert C. Martin",
pages: 464, read: false}, {title: "Think Like a Programmer: An Introduction to Creative Problem Solving", author: "V. Anton Spraul",
pages: 256, read: false}, {title: "Introduction to Algorithms", author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
pages: 1312, read: false}];

const sortOptions = ["Sort By Author", "Sort By Title"];

const buttons = document.querySelectorAll('button');
const books = document.querySelectorAll('.book');
const sortDiv = document.createElement("div");
const sortSelect = document.createElement("select");
const sortButton = document.querySelector('#sort');
const sortSelectButton = document.createElement('button');
const main = document.querySelector('main');
const body = document.querySelector('body');
const header = document.querySelector('header');
const searchDiv = document.createElement("div");
const searchButton = document.querySelector('#search');
const searchBar = document.createElement("input");
const searchBarButton = document.createElement("button");
const showAll = document.createElement("button");

function addSortOptions() {
    for (let i=0;i<sortOptions.length;i++) {
        let option = document.createElement("option");
        option.value = sortOptions[i];
        option.text = sortOptions[i];
        sortSelect.appendChild(option);
    }
}


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
        header.after(searchDiv);
        searchDiv.classList.add("searchDiv");
        searchBar.placeholder = "Search By Title or Author";
        searchBar.classList.add('searchBar');
        searchDiv.appendChild(searchBar);
        searchBarButton.classList.add('searchBarButton');
        searchDiv.appendChild(searchBarButton);
        body.style.gridTemplateColumns = "60px 1fr 1fr";
        for (let i=0;i<buttons.length;i++) {
            if (buttons[i].id != "search") {
                buttons[i].addEventListener('click', ()=> {
                    searchButton.value = "off";
                    searchDiv.remove();
                });
            }
        }
    } else {
        searchButton.value = "off";
        for (let i=0;i<books.length;i++) {
            books[i].classList.remove('hideBook');
        }
        searchDiv.remove();
        showAll.remove();
        body.style.gridTemplateColumns = "60px 1fr";
    }
}

function search() {
    for (let i=0; i<myLibrary.length;i++) {
        searchBar.value = searchBar.value.toLowerCase();
        if (myLibrary[i].author.toLowerCase().includes(searchBar.value) || myLibrary[i].title.toLowerCase().includes(searchBar.value)) {
            for (let j=0; j< books.length;j++) {
                if (myLibrary[i].title != books[j].getAttribute("title")) {
                    books[j].classList.add('hideBook');
                }
            }
        }
    }
}

function searchAlgo() {
    searchBarButton.addEventListener('click', ()=> {
        searchButton.value = "off";
        if (searchBar.value != "") {
            search();
        }
        searchDiv.remove();
        body.style.gridTemplateColumns = "60px 1fr";
        showAll.classList.add('showAll');
        main.appendChild(showAll);
    });
}

function showAllButton() {
    showAll.addEventListener('click', ()=> {
        for (let i=0;i<books.length;i++) {
            books[i].classList.remove('hideBook');
        }
        showAll.remove();
    });
} 

function sortBooks() {
    let sortButtonValue = sortButton.value;
    if (sortButtonValue == "off") {
        sortButton.value = "on";
        header.after(sortDiv);
        body.style.gridTemplateColumns = "60px 1fr 1fr";
        sortDiv.classList.add("sortDiv");
        sortSelect.classList.add('sortSelect');
        sortDiv.appendChild(sortSelect);
        sortSelectButton.classList.add('sortSelectButton');
        sortDiv.appendChild(sortSelectButton);
        for (let i=0;i<buttons.length;i++) {
            if (buttons[i].id != "sort") {
                buttons[i].addEventListener('click', ()=> {
                    sortButton.value = "off";
                    sortDiv.remove();
                });
            }
        }
    } else {
        sortButton.value = "off";
        sortDiv.remove();
        body.style.gridTemplateColumns = "60px 1fr";
    }
}


function sortAlgo() {
    sortSelectButton.addEventListener('click', ()=> {
        if (sortSelect.value == "Sort By Author") {
            let myArray = Array.from(books);
            myArray.sort((a,b) => {
                indexOfA = myLibrary.findIndex(item => item.title == a.title);
                indexOfB = myLibrary.findIndex(item => item.title == b.title);
                authorOfA = myLibrary[indexOfA].author; //author string of a
                authorOfB = myLibrary[indexOfB].author; //author string of b
                if (authorOfA.includes(",")) {
                    author_a_array = authorOfA.split(",");
                    for (let i=0; i<author_a_array.length;i++) {
                        author_a_array[i].split(" ");
                    }
                }
                a.author = authorOfA;
                b.author = authorOfB;
                if (a.author < b.author) {
                    return -1;
                } else {
                    return 1;
                }
            });
            for (let i=0;i<myArray.length;i++) {
                main.appendChild(myArray[i]);
            }
            sortButton.value = "off";
            sortDiv.remove();
            body.style.gridTemplateColumns = "60px 1fr";
        } else {
            console.log(sortSelect.value);
        }
    });
}




hoverEffect();
searchBooks();
searchAlgo();
showAllButton();
sortBooks();
addSortOptions();
sortAlgo();