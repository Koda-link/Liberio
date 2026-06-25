const library = document.querySelector(`.library`);
const myLibrary = [];

function Book(title, author, year, id){
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");}
    this.title = title;
    this.author = author;
    this.year = year;
    this.id = id;
}

function addBook(title, author, year){
    myLibrary.push(new Book(`${title}`, `${author}`, year, id = crypto.randomUUID()));
}

function seeLibrary(){
    let dLibro = [];
    let dTitle = [];
    let dData = [];
    for(let i = 0 ; i < myLibrary.length ; i++){
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
    }
}