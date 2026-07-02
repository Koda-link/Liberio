const library = document.querySelector(`.library`);
const showBook = document.querySelector(`#showBook`);
const newBook = document.querySelector(`#newBook`);
const myLibrary = [];

function Book(title, author, year, pages, id){
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");}
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;

    this.id = id;
    this.insight = insight;
    this.read = read;
};

function addBook(event){
    const title = document.querySelector(`#title`).value;
    const author = document.querySelector(`#author`).value;
    const year = document.querySelector(`#year`).value;
    const pages = document.querySelector(`#pages`).value;

    myLibrary.push(new Book(`${title}`, `${author}`, Number(year), Number(pages), id = crypto.randomUUID(), insight = false, read = false));
    event.preventDefault();
};
newBook.addEventListener(`click`, addBook);

function seeLibrary(){
    let dLibro = [];
    let dTitle = [];
    let dData = [];

    let dErase = [];
    let dRead = [];

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
            myLibrary[i].year < 0 ? dData[1].textContent = `Year: ${-(myLibrary[i].year)} AC` : dData[1].textContent = `Year: ${myLibrary[i].year}`;
            dData[2].textContent = `Pages: ${myLibrary[i].pages}`;

            myLibrary[i].insight = true;
            dLibro[i].setAttribute(`data-id`, `${myLibrary[i].id}`);

            dErase[i] = document.createElement(`button`);
            dErase[i].textContent = `withdraw`;
            dLibro[i].appendChild(dErase[i]);

            dErase[i].addEventListener(`click`, () =>{
                library.removeChild(dLibro[i]);
                myLibrary.splice(i, 1);
            });

            dRead[i] = document.createElement(`button`);
            dRead[i].textContent = `Read`;
            dLibro[i].appendChild(dRead[i]);

            dRead[i].addEventListener(`click`, Book.prototype.readBook = function (){
                if(myLibrary[i].read == true){
                    myLibrary[i].read = false;
                    dRead[i].textContent = `Read`;
                    dLibro[i].classList.remove(`read`);
                }else{
                    myLibrary[i].read = true;
                    dRead[i].textContent = `unRead`;
                    dLibro[i].classList.add(`read`);                    
                }
            });
        };
    };
};
showBook.addEventListener(`click`, seeLibrary);

myLibrary.push(new Book(`flylord`, `goldie`, -1955, 125, id = crypto.randomUUID(), insight = false, read = false));
