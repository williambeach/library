let myLibrary = [{title: "The Principles of Object-Oriented JavaScript", author: "Nicholas C. Zakas",
pages: 120, read: true}, {title: "Inside the Machine: An Illustrated Introduction to Microprocessors and Computer Architecture", author: "Jon Stokes", 
pages: 320, read: false}, {title: "Structure and Interpretation of Computer Programs", author: "Harold Abelson, Gerald Jay Sussman, Julie Sussman",
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

const settingsOptions = ["Blue Theme", "Green Theme", "Red Theme", "Yellow Theme", "Reset"];

const buttons = document.querySelectorAll('button');
const books = document.querySelectorAll('.book');
const sortDiv = document.createElement("div");
const sortSelect = document.createElement("select");
const sortButton = document.querySelector('#sort');
const sortSelectButton = document.createElement('button');
const settingsButton = document.querySelector('#settings');
const settingsDiv = document.createElement("div");
const settingsSelect = document.createElement("select");
const settingsSelectButton = document.createElement('button');
const accountButton = document.querySelector('#account');
const main = document.querySelector('main');
const body = document.querySelector('body');
const header = document.querySelector('header');
const searchDiv = document.createElement("div");
const searchButton = document.querySelector('#search');
const searchBar = document.createElement("input");
const searchBarButton = document.createElement("button");
const showAll = document.createElement("button");

function showBooks() {
    for (let i =0;i<myLibrary.length;i++) {
        newDiv = document.createElement("div");
        newDiv.classList.add('book');
        newDiv.title = myLibrary[i].title;
        main.appendChild(newDiv);
    }
}

function showSortedAuthorBooks() {
    for (let i=0; i<authorSortedObjectArray.length;i++) {
        newDiv = document.createElement("div");
        newDiv.classList.add('book');
        newDiv.title = authorSortedObjectArray[i].title;
        main.appendChild(newDiv);
    }
}

function showSortedTitleBooks() {
    for (let i=0; i<titleSortedObjectArray.length;i++) {
        newDiv = document.createElement("div");
        newDiv.classList.add('book');
        newDiv.title = titleSortedObjectArray[i].title;
        main.appendChild(newDiv);
    }
}

function deleteBooks() {
    const books = document.querySelectorAll('.book');
    for (let i =0; i<books.length;i++) {
        books[i].remove();
    }
    showAll.remove();
}

function addSortOptions() {
    for (let i=0;i<sortOptions.length;i++) {
        let option = document.createElement("option");
        option.value = sortOptions[i];
        option.text = sortOptions[i];
        sortSelect.appendChild(option);
    }
}

function addSettingsOptions() {
    for (let i=0;i<settingsOptions.length;i++) {
        let option = document.createElement("option");
        option.value = settingsOptions[i];
        option.text = settingsOptions[i];
        settingsSelect.appendChild(option);
    }
}


function hoverEffect() {
    const books = document.querySelectorAll('.book');
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
    if (searchButton.value == "off") {
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
        settingsTheme();
        searchDiv.remove();
        showAll.remove();
        body.style.gridTemplateColumns = "60px 1fr";
    }
}

function search() {
    const books = document.querySelectorAll('.book');
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
       deleteBooks();
       showBooks();
       hoverEffect();
       settingsTheme();
    });
} 

function sortBooks() {
    if (sortButton.value == "off") {
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

function sortObjectByAuthor() {
    authorSortedObjectArray = [];
    authorArray = [];
    tempSplit = [];
    compareArray = [];
    for (let i=0;i<myLibrary.length;i++) {
        if (myLibrary[i].author.includes(",")) {
            tempSplit = myLibrary[i].author.split(",")
            for (let j=0;j<tempSplit.length;j++) {
                fullName = tempSplit[j].split(" ");
                lastName = fullName[fullName.length - 1];
                compareArray.push(lastName);
            }
            compareArray.sort((a,b)=> {
                if (a < b) {return -1} else {return 1};
            });
            authorArray.push(compareArray[0]);
            compareArray = [];
        } else {
            fullName = myLibrary[i].author.split(" ");
            lastName = fullName[fullName.length - 1];
            authorArray.push(lastName);
        }
    }
    authorArray.sort((a,b)=> {
        if (a<b) {return -1} else {return 1};
    });
    for (let i=0;i<authorArray.length;i++) {
        for (let j=0;j<myLibrary.length;j++) {
            if (myLibrary[j].author.includes(authorArray[i])) {
                authorSortedObjectArray.push(myLibrary[j]);
            }
        }
    }
    deleteBooks();
    showSortedAuthorBooks();
    hoverEffect();
    settingsTheme();
}

function sortObjectByTitle() {
    arrayOfSortedTitles = [];
    titleSortedObjectArray = [];
    for (let i = 0;i<myLibrary.length;i++) {
        arrayOfSortedTitles.push(myLibrary[i].title)
    }
    arrayOfSortedTitles.sort((a,b)=> { if (a < b) {return -1} else {return 1}});
    for (let i=0; i<arrayOfSortedTitles.length;i++) {
        for (let j = 0; j<myLibrary.length;j++) {
            if (myLibrary[j].title.includes(arrayOfSortedTitles[i])) {
                titleSortedObjectArray.push(myLibrary[j]);
            }
        }
    }
    deleteBooks();
    showSortedTitleBooks();
    hoverEffect();
    settingsTheme();
}

function sortAlgo() {
    sortSelectButton.addEventListener('click', ()=> {
        if (sortSelect.value == "Sort By Author") {
            sortButton.value = "off";
            sortObjectByAuthor();
            sortDiv.remove();
            body.style.gridTemplateColumns = "60px 1fr";
        }
        else {
            sortButton.value = "off";
            sortObjectByTitle();
            sortDiv.remove();
            body.style.gridTemplateColumns = "60px 1fr"; 
        }
    });
}

function settings() {
    if (settingsButton.value == "off") {
        settingsButton.value = "on";
        header.after(settingsDiv);
        body.style.gridTemplateColumns = "60px 1fr 1fr";
        settingsDiv.classList.add('settingsDiv');
        settingsSelect.classList.add('settingsSelect');
        settingsDiv.appendChild(settingsSelect);
        settingsSelectButton.classList.add('settingsSelectButton');
        settingsDiv.appendChild(settingsSelectButton);
        for (let i=0;i<buttons.length;i++) {
            if (buttons[i].id != "settings") {
                buttons[i].addEventListener('click', ()=> {
                    settingsButton.value = "off";
                    settingsDiv.remove();
                });
            }
        }
    } else {
        settingsButton.value = "off";
        settingsDiv.remove();
        body.style.gridTemplateColumns = "60px 1fr";
    }
}

function settingsTheme() {
    const books = document.querySelectorAll('.book');
    if (settingsSelect.value == "Blue Theme") {
        header.style.backgroundColor = "rgba(6, 243, 243, 0.4)";
    } else if (settingsSelect.value == "Green Theme") {
        header.style.backgroundColor = "rgba(44, 255, 1, 0.4)";
        for (let i=0;i<books.length;i++) {
            books[i].style.border = "1px solid rgb(44, 255, 1)";
        }
    } else if (settingsSelect.value == "Red Theme") {
        header.style.backgroundColor = "rgba(255, 0, 0, 0.4)";
        for (let i=0;i<books.length;i++) {
            books[i].style.border = "1px solid rgb(255,0,0)";
        }
    } else if (settingsSelect.value == "Yellow Theme") {
        header.style.backgroundColor = "rgba(251, 255, 0, 0.4)";
        for (let i=0;i<books.length;i++) {
            books[i].style.border = "1px solid rgb(251,255,0)";
        }
    } else {
        header.style.backgroundColor = "rgba(250,250,250,0.4)";
        for (let i=0;i<books.length;i++) {
            books[i].style.border = "1px solid aqua";
        }
    }
}

function settingsThemeSelect() {
    settingsSelectButton.addEventListener('click', ()=> {
        settingsButton.value = "off";
        settingsTheme();
        settingsDiv.remove();
        body.style.gridTemplateColumns = "60px 1fr";
    });
}

function accountButtonClick() {
    accountButton.addEventListener('click', ()=> {
        window.open('https://github.com/williambeach', '_blank');
        body.style.gridTemplateColumns = "60px 1fr";
    });
    
}






showBooks();
hoverEffect();
searchBooks();
searchAlgo();
showAllButton();
sortBooks();
addSortOptions();
sortAlgo();
accountButtonClick();
settings();
addSettingsOptions();
settingsThemeSelect();

