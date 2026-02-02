let books = [
    {
        "name": "Die Geheimnisse des Ozeans",
        "author": "Clara Meer",
        "likes": 1250,
        "liked": true,
        "price": 19.99,
        "publishedYear": 2018,
        "genre": "Fantasy",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
            },
            {
                "name": "Bookworm84",
                "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
            },
            {
                "name": "FantasyFanatic",
                "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
            },
            {
                "name": "SciFiGuru",
                "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
            },
            {
                "name": "NovelLover",
                "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
            }
        ]
    },
    {
        "name": "Die Farben des Himmels",
        "author": "Laura Blau",
        "likes": 1520,
        "liked": true,
        "price": 22.95,
        "publishedYear": 2019,
        "genre": "Romantik",
        "comments": [
            {
                "name": "LeserPeter",
                "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
            },
            {
                "name": "BookLover21",
                "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
            },
            {
                "name": "FantasyNerd",
                "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
            },
            {
                "name": "SciFiEnthusiast",
                "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
            },
            {
                "name": "ReadingAddict",
                "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
            }
        ]
    },
    {
        "name": "Das Rätsel der Zeit",
        "author": "Alexander Weiss",
        "likes": 750,
        "liked": false,
        "price": 18.00,
        "publishedYear": 2020,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "BuchKenner",
                "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
            },
            {
                "name": "LeseWurm",
                "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
            }
        ]
    }
]

let currentIndex = 0;
let MainSectionRef = document.getElementById('content');
let CommentSectionRef = document.getElementById('commentSection');

function renderBooks() {
    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        const book = books[bookIndex];
        MainSectionRef.innerHTML += getBookHTML(book, bookIndex);
    }

}

function getBookHTML(book, bookIndex) {
    return `<section class="mainContainer">
        <div class="bookContent" id="book${bookIndex}">
            <article class="bookContentHead">
                <img src="book.png" alt="book-image"></img>
                <h2>${book.name}</h2>
            </article>
            <p>-----------------------------------------------------------------------------------</p>
            <div class="bookContentMain">
                <article class="PriceLikes">
                    <div>${book.price}€</div>
                    <div>Likes: ${book.likes}</div>
                </article>
                <article class="bookDetails">
                    <ul>
                        <li>Author: ${book.author}</li>
                        <li>Year: ${book.publishedYear}</li>
                        <li>Genre: ${book.genre}</li>
                    </ul>
                </article>
            </div>
            <p>-----------------------------------------------------------------------------------</p> 
             <div class="commentsContainer">
            <h3>Kommentare:</h3>
           <ul class="commentBox" id="commentBox${bookIndex}">
    ${renderComments(book, bookIndex)}
           </ul>
             </div>
        <input type="text" id="name${bookIndex}" placeholder="Namen eingeben....">
        <input type="text" id="message${bookIndex}" placeholder="Nachricht eingeben..."> 
        <button onclick="sendMessage(${bookIndex})">Senden</button>
    </section>`
}


function renderComments(book, bookIndex) {
    let bookComments = "";
    for (let commentsIndex = 0; commentsIndex < book.comments.length; commentsIndex++) {
        let comments = book.comments[commentsIndex];
        bookComments += getCommentsHTML(comments, bookIndex);

    }
    return bookComments;
}

function getCommentsHTML(comment) {
    return `<li class="comment">
                 <p>${comment.name}:</p>
                 <p>${comment.comment}</p>
            </li>`
}

function sendMessage(bookIndex) {
    let messageInput = document.getElementById('message' + bookIndex);
    let nameInput = document.getElementById('name' + bookIndex);
    let commentBox = document.getElementById('commentBox' + bookIndex);

    let message = messageInput.value;
    let name = nameInput.value;

    if (message !== null) {
        books[bookIndex].comments.unshift({
            name: name || "Unbekannt",
            comment: message
        });
    }
    commentBox.innerHTML = renderComments(books[bookIndex], bookIndex);
    messageInput.value = '';
    nameInput.value = '';
}
