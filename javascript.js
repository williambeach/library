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

const settingsOptions = ["Reset","Blue Theme", "Green Theme", "Red Theme", "Yellow Theme"];

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
const addBookButton = document.querySelector("#addBook");
const addBookForm = document.querySelector(".hide");
const bookFormExit = document.querySelector(".formExitButton");
const submitBookButton = document.querySelector("#submit");
const deleteBookButton = document.querySelector("#deleteBook");




function showBooks() {
    for (let i =0;i<myLibrary.length;i++) {
        newDiv = document.createElement("div");
        newDiv.setAttribute("type", "button");
        newDiv.setAttribute("value", "on");
        newDiv.setAttribute("onclick", "transform(this);");
        newDiv.classList.add('book');
        newDiv.title = myLibrary[i].title;
        if (myLibrary[i].hasOwnProperty('imageURL')) {
            imgUrl = myLibrary[i].imageURL;
            newDiv.style.cssText += `background-image:url(${imgUrl})`;
        }
        main.appendChild(newDiv);
    }
}

function showSortedAuthorBooks() {
    for (let i=0; i<authorSortedObjectArray.length;i++) {
        newDiv = document.createElement("div");
        newDiv.setAttribute("type", "button");
        newDiv.setAttribute("value", "on");
        newDiv.setAttribute("onclick", "transform(this);");
        newDiv.classList.add('book');
        newDiv.title = authorSortedObjectArray[i].title;
        if (authorSortedObjectArray[i].hasOwnProperty('imageURL')) {
            imgUrl = authorSortedObjectArray[i].imageURL;
            newDiv.style.cssText += `background-image:url(${imgUrl})`;
        }
        main.appendChild(newDiv);
    }
}

function showSortedTitleBooks() {
    for (let i=0; i<titleSortedObjectArray.length;i++) {
        newDiv = document.createElement("div");
        newDiv.setAttribute("type", "button");
        newDiv.setAttribute("value", "on");
        newDiv.setAttribute("onclick", "transform(this);");
        newDiv.classList.add('book');
        newDiv.title = titleSortedObjectArray[i].title;
        if (titleSortedObjectArray[i].hasOwnProperty('imageURL')) {
            imgUrl = titleSortedObjectArray[i].imageURL;
            newDiv.style.cssText += `background-image:url(${imgUrl})`;
        }
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
        deleteBooks();
        showBooks();
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
        hoverEffect();
        body.style.gridTemplateColumns = "60px 1fr";
    }
}

function search() {
    const books = document.querySelectorAll('.book');
    searchBar.value = searchBar.value.toLowerCase();
    for (let i=0; i<myLibrary.length;i++) {
        if (!myLibrary[i].author.toLowerCase().includes(searchBar.value) || myLibrary[i].title.toLowerCase().includes(searchBar.value)) {
            books[i].classList.add('hideBook');
        }
        hoverEffect();
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
        deleteBooks();
        showBooks();
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
            if (buttons[i].id == "deleteBook") {
                buttons[i].addEventListener('click', ()=> {
                    sortButton.value = "off";
                    sortDiv.remove();
                    body.style.gridTemplateColumns = "60px 1fr";
                });
            }
        }
    } else {
        sortButton.value = "off";
        sortDiv.remove();
        body.style.gridTemplateColumns = "60px 1fr";
        hoverEffect();
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
        deleteBooks();
        showBooks();
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
            if (buttons[i].id == "deleteBook") {
                buttons[i].addEventListener('click', ()=> {
                    settingsButton.value = "off";
                    settingsDiv.remove();
                    body.style.gridTemplateColumns = "60px 1fr";
                });
            }
        }
    } else {
        settingsButton.value = "off";
        settingsDiv.remove();
        body.style.gridTemplateColumns = "60px 1fr";
        hoverEffect();
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
        hoverEffect();
    });
}

function accountButtonClick() {
    accountButton.addEventListener('click', ()=> {
        window.open('https://github.com/williambeach', '_blank');
        body.style.gridTemplateColumns = "60px 1fr";
    });
}

function addBook() {
    const inputs = document.querySelectorAll(".inputs");
    deleteBooks();
    showBooks();
    hoverEffect();
    if (addBookButton.value == "off") {
        for (let i=0;i<inputs.length;i++) {
            inputs[i].setAttribute('novalidate', false);
        }
        addBookButton.value = "on";
        body.style.gridTemplateColumns = "60px 1fr minmax(238px, 1fr)";
        addBookForm.classList.remove('hide');
        addBookForm.classList.add('addBookDiv');
        for (let i=0;i<buttons.length;i++) {
            if (buttons[i].id != "addBook" && buttons[i].id != "submit") {
                buttons[i].addEventListener('click', ()=> {
                    addBookButton.value = "off";
                    addBookForm.classList.remove('addBookDiv');
                    addBookForm.classList.add('hide');
                });
            }
            if (buttons[i].id == "deleteBook") {
                buttons[i].addEventListener('click', ()=> {
                    addBookButton.value = "off";
                    addBookForm.classList.add('hide');
                    body.style.gridTemplateColumns = "60px 1fr";
                });
            }
        }
    } else {
        addBookButton.value = "off";
        addBookForm.classList.add('hide');
        body.style.gridTemplateColumns = "60px 1fr";
    }
}

function exitForm() {
    bookFormExit.addEventListener('click', ()=> {
        addBookButton.value = "off";
        addBookForm.classList.add('hide');
        body.style.gridTemplateColumns = "60px 1fr";
    });
}

function NewBook(newTitle, newAuthor, howManyPages, imageURL, readOrNot) {
    this.title = newTitle;
    this.author = newAuthor;
    this.pages = howManyPages;
    this.imageURL = imageURL;
    this.read = readOrNot;
}

function capitalizeAuthor(arg) {
    let finalString = "";
    let newString = "";
    let tempArray = [];
    if (arg.includes(",")) {
        newArray = arg.split(",");
        for (let i=0;i<newArray.length;i++) {
            fullName = newArray[i].split(" ");
            for (let j=0;j<fullName.length;j++) {
                if (fullName[j] == "") {
                    fullName.splice(j, 1);
                }
                fullName[j] = fullName[j].substring(0,1).toUpperCase() + fullName[j].substring(1).toLowerCase();
            }
            newString = fullName.join(" ");
            tempArray.push(newString)
            finalString = tempArray.join(", ");
        }
    } else {
        fullName = arg.split(" ");
        for (let j=0;j<fullName.length;j++) {
            fullName[j] = fullName[j].substring(0,1).toUpperCase() + fullName[j].substring(1).toLowerCase();
        }
        finalString = fullName.join(" ");
    }
    return finalString;
}

function capitalizeTitle(arg) {
    let newString = "";
    newArray = arg.split(" ");
    tempArray = [];
    for (let i=0;i<newArray.length;i++) {
        upperCase = newArray[i].substring(0,1).toUpperCase() + newArray[i].substring(1).toLowerCase();
        tempArray.push(upperCase);
        newString = tempArray.join(" ");
    }
    return newString;
}

function submitButton() {
        let titleArray = [];
        newBookTitle = document.querySelector("#title").value;
        newBookAuthor = document.querySelector("#author").value;
        newBookPages = Number(document.querySelector("#pages").value);
        newBookImage = document.querySelector("#imageURL").value;
        newBookRead = Boolean(document.querySelector("#read").value);
        newBookTitle = capitalizeTitle(newBookTitle);
        newBookAuthor = capitalizeAuthor(newBookAuthor);
        if (newBookTitle != "" && newBookAuthor != "" && newBookPages != "" && newBookImage != "" && newBookRead != "") {
            let newBook = new NewBook(newBookTitle, newBookAuthor, newBookPages, newBookImage, newBookRead);
            for (let i=0;i<myLibrary.length;i++) {
                titleArray.push(myLibrary[i].title)
            }
            if (!titleArray.includes(newBook.title)) {
                myLibrary.push(newBook);
            }
            addBookButton.value = "off";
            addBookForm.classList.add('hide');
            body.style.gridTemplateColumns = "60px 1fr";
            deleteBooks();
            showBooks();
            titleArray = [];
        }
}

function removeIcons() {
    const redIcons = document.querySelectorAll(".deleteBookIcon");
    for (let i=0;i<redIcons.length;i++) {
        redIcons[i].remove();
    }
}

function removeBook() {
    const redIcons = document.querySelectorAll(".deleteBookIcon");
    for (let i=0;i<redIcons.length;i++) {
        redIcons[i].addEventListener('click', ()=> {
           myLibrary.splice(i, 1);
           removeIcons();
           deleteBooks();
           showBooks();
           hoverEffect();
           deleteBookButton.value = "off";
        });
    }
}

function addRemoveIcons() {
    const books = document.querySelectorAll('.book');
    body.style.gridTemplateColumns = "60px 1fr";
    if (deleteBookButton.value == "off") {
        deleteBookButton.value = "on";
        for (let i=0;i<books.length;i++) {
            redIcon = document.createElement("button");
            redIcon.id = books[i].title;
            redIcon.classList.add('deleteBookIcon');
            books[i].appendChild(redIcon);
        }
        for (let i=0;i<buttons.length;i++) {
            if (buttons[i].classList == "menu") {
                buttons[i].addEventListener('click', ()=> {
                    deleteBookButton.value = "off";
                    removeIcons();
                });
            }
        }
        removeBook();
    } else {
        removeIcons();
        deleteBookButton.value = "off";
    }
}

function addReadButton(val) {
    const books = document.querySelectorAll('.book');
    bookTitle = val.title;
    for (let i=0;i<myLibrary.length;i++) {
        if (myLibrary[i].title.includes(bookTitle)) {
            books[i].appendChild(document.createElement("button"));
            books[i].firstChild.setAttribute("onclick", "event.stopPropagation();");
        }
    }
}

function removeReadButton(val) {
    const books = document.querySelectorAll('.book');
    bookTitle = val.title;
    for (let i=0;i<myLibrary.length;i++) {
        if (myLibrary[i].title.includes(bookTitle)) {
            books[i].removeChild(books[i].firstChild);
        }
    }
}



function transform(val) {
    let count = 0;
    if (val.getAttribute("value") == "on") {
        val.setAttribute("value", "off");
        val.setAttribute("class", "book rotationOne");
        val.addEventListener("transitionend", (e)=> {
            val.setAttribute("class", "book rotationTwo");
            if (e.propertyName == "transform") {
                count ++;
            }
            if (count == 2) {
                addReadButton(val);
            }
        });
    } else {
        val.setAttribute("value", "on");
        val.setAttribute("class", "book rotationThree");
        val.addEventListener("transitionend", ()=> {
            val.setAttribute("class", "book rotationFour");
        });
        removeReadButton(val);
        setTimeout(()=> {
            val.classList = "book";
        }, 700);
    }
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
addBook();
exitForm();
addRemoveIcons();
