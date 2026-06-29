const library = document.querySelector(`.library`);
const showBook = document.querySelector(`#showBook`);
const newBook = document.querySelector(`#newBook`);
const myLibrary = [];

function Book(title, author, year, id){
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");}
    this.title = title;
    this.author = author;
    this.year = year;
    this.id = id;
    this.insight = insight;
};

function addBook(event){
    const title = document.querySelector(`#title`).value;
    const author = document.querySelector(`#author`).value;
    const year = document.querySelector(`#year`).value;
    myLibrary.push(new Book(`${title}`, `${author}`, Number(year), id = crypto.randomUUID(), insight = false));
    event.preventDefault();
};
newBook.addEventListener(`click`, addBook);

function seeLibrary(){
    let dLibro = [];
    let dTitle = [];
    let dData = [];

    for(let i = 0 ; i < myLibrary.length ; i++){
        if(myLibrary[i].insight === false){
            dLibro[i] = document.createElement(`dl`);

            dTitle[i] = document.createElement(`dt`);
            dTitle[i].textContent = myLibrary[i].title;

            library.appendChild(dLibro[i]);
            dLibro[i].appendChild(dTitle[i]);

            for(let e = 0 ; e < 3 ; e++){
                dData[e] = document.createElement(`dd`);
                dLibro[i].appendChild(dData[e]);
            }
            dData[0].textContent = `Author: ${myLibrary[i].author}`;
            dData[1].textContent = `Year: ${myLibrary[i].year}`;
            dData[2].textContent = `ID: ${myLibrary[i].id}`;

            myLibrary[i].insight = true;
        };
    };
};
showBook.addEventListener(`click`, seeLibrary);