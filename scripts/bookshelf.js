const books = [
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    genres: ["Classic", "Fiction"],
    goodreads: "https://www.goodreads.com/book/show/24280.Les_Mis_rables",
    png: "images/books/Les_Miserables.png",
    height: 300,
    heightRatio: 0.355,
  },
  {
    title: "A Knight of the Seven Kingdoms",
    author: "George R.R. Martin",
    genres: ["Fantasy"],
    goodreads: "",
    png: "images/books/A_knight_of_The_seven_Kingdoms.png",
    height: 350,
    heightRatio: 0.208,
  },
  {
    title: "Fire & Blood",
    author: "George R.R. Martin",
    genres: ["Fantasy"],
    goodreads: "",
    png: "images/books/Fire_&_Blood.png",
    height: 350,
    heightRatio: 0.233,
  },
  {
    title: "Nightlord: Sunset",
    png: "images/books/Nightlord_Sunset.png",
    height: 350,
    heightRatio: 0.262,
  },
  {
    title: "Replay",
    png: "images/books/Replay.png",
    height: 325,
    heightRatio: 0.136,
  },
  {
    title: "Sea of Tranquility",
    png: "images/books/Sea_of_Tranquility.png",
    height: 325,
    heightRatio: 0.149,
  },
  {
    title: "The Catcher in the Rye",
    png: "images/books/The_Catcher_in_the_Rye.png",
    height: 325,
    heightRatio: 0.139,
  },
  {
    title: "The Song of Achilles",
    png: "images/books/The_Song_of_Achilles.png",
    height: 325,
    heightRatio: 0.157,
  },
  {
    title: "Wuthering Heights",
    png: "images/books/Wuthering_Heights.png",
    height: 325,
    heightRatio: 0.225,
  },
];

function buildBookshelf(bookList) {
  const bookshelf = document.querySelector(".bookshelf");
  while (bookshelf.firstChild) {
    bookshelf.removeChild(bookshelf.firstChild);
  }

  let currentShelf = document.createElement("div");
  currentShelf.classList.add("shelf");
  document.querySelector(".bookshelf").appendChild(currentShelf);

  let remainingShelfWidth = currentShelf.getBoundingClientRect().width;

  bookList.forEach(function (book) {
    if (book.height * book.heightRatio > remainingShelfWidth) {
      currentShelf = document.createElement("div");
      currentShelf.classList.add("shelf");
      document.querySelector(".bookshelf").appendChild(currentShelf);
      remainingShelfWidth = currentShelf.getBoundingClientRect().width;
    }
    const cover = document.createElement("img");
    cover.classList.add("book");
    cover.src = book.png;
    cover.height = book.height;
    currentShelf.appendChild(cover);
    remainingShelfWidth -= book.height * book.heightRatio;
  });
}

buildBookshelf(books);
// window.addEventListener("resize", function () {
//   buildBookshelf(books);
// });
