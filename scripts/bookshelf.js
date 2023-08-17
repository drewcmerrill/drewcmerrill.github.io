let heightMultplier = (1.0948 * window.innerWidth) / 375;

const books = [
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    genres: ["Classic", "Fiction"],
    goodreads: "https://www.goodreads.com/book/show/24280.Les_Mis_rables",
    webp: "images/books/Les_Miserables.webp",
    height: 75 * heightMultplier,
    heightRatio: 0.355,
  },
  {
    title: "A Knight of the Seven Kingdoms",
    author: "George R.R. Martin",
    genres: ["Fantasy"],
    goodreads: "",
    webp: "images/books/A_knight_of_The_seven_Kingdoms.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.208,
  },
  {
    title: "Fire & Blood",
    author: "George R.R. Martin",
    genres: ["Fantasy"],
    goodreads: "",
    webp: "images/books/Fire_&_Blood.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.233,
  },
  {
    title: "Nightlord: Sunset",
    webp: "images/books/Nightlord_Sunset.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.262,
  },

  {
    title: "Replay",
    webp: "images/books/Replay.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.136,
  },
  {
    title: "Sea of Tranquility",
    webp: "images/books/Sea_of_Tranquility.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.149,
  },
  {
    title: "The Catcher in the Rye",
    webp: "images/books/The_Catcher_in_the_Rye.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.139,
  },
  {
    title: "The Song of Achilles",
    webp: "images/books/The_Song_of_Achilles.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.157,
  },
  {
    title: "Wuthering Heights",
    webp: "images/books/Wuthering_Heights.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.225,
  },
  {
    title: "The Wheel of Time",
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    genres: ["Classic", "Fiction"],
    goodreads: "https://www.goodreads.com/book/show/24280.Les_Mis_rables",
    webp: "images/books/Les_Miserables.webp",
    height: 75 * heightMultplier,
    heightRatio: 0.355,
  },
  {
    title: "A Knight of the Seven Kingdoms",
    author: "George R.R. Martin",
    genres: ["Fantasy"],
    goodreads: "",
    webp: "images/books/A_knight_of_The_seven_Kingdoms.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.208,
  },
  {
    title: "Fire & Blood",
    author: "George R.R. Martin",
    genres: ["Fantasy"],
    goodreads: "",
    webp: "images/books/Fire_&_Blood.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.233,
  },
  {
    title: "Nightlord: Sunset",
    webp: "images/books/Nightlord_Sunset.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.262,
  },

  {
    title: "Replay",
    webp: "images/books/Replay.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.136,
  },
  {
    title: "Sea of Tranquility",
    webp: "images/books/Sea_of_Tranquility.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.149,
  },
  {
    title: "The Catcher in the Rye",
    webp: "images/books/The_Catcher_in_the_Rye.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.139,
  },
  {
    title: "The Song of Achilles",
    webp: "images/books/The_Song_of_Achilles.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.157,
  },
  {
    title: "Wuthering Heights",
    webp: "images/books/Wuthering_Heights.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.225,
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    genres: ["Classic", "Fiction"],
    goodreads: "https://www.goodreads.com/book/show/24280.Les_Mis_rables",
    webp: "images/books/Les_Miserables.webp",
    height: 75 * heightMultplier,
    heightRatio: 0.355,
  },
  {
    title: "A Knight of the Seven Kingdoms",
    author: "George R.R. Martin",
    genres: ["Fantasy"],
    goodreads: "",
    webp: "images/books/A_knight_of_The_seven_Kingdoms.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.208,
  },
  {
    title: "Fire & Blood",
    author: "George R.R. Martin",
    genres: ["Fantasy"],
    goodreads: "",
    webp: "images/books/Fire_&_Blood.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.233,
  },
  {
    title: "Nightlord: Sunset",
    webp: "images/books/Nightlord_Sunset.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.262,
  },

  {
    title: "Replay",
    webp: "images/books/Replay.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.136,
  },
  {
    title: "Sea of Tranquility",
    webp: "images/books/Sea_of_Tranquility.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.149,
  },
  {
    title: "The Catcher in the Rye",
    webp: "images/books/The_Catcher_in_the_Rye.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.139,
  },
  {
    title: "The Song of Achilles",
    webp: "images/books/The_Song_of_Achilles.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.157,
  },
  {
    title: "Wuthering Heights",
    webp: "images/books/Wuthering_Heights.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.225,
  },
];

const WheelOfTime = [
  {
    title: "New Spring",
    author: "Robert Jordan",
    webp: "images/books/New_Spring.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.15,
  },
  {
    title: "The Eye of the World",
    author: "Robert Jordan",
    webp: "images/books/The_Eye_of_the_World.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.198,
  },
  {
    title: "The Great Hunt",
    author: "Robert Jordan",
    webp: "images/books/The_Great_Hunt.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.181,
  },
  {
    title: "The Dragon Reborn",
    author: "Robert Jordan",
    webp: "images/books/The_Dragon_Reborn.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.189,
  },
  {
    title: "The Shadow Rising",
    author: "Robert Jordan",
    webp: "images/books/The_Shadow_Rising.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.191,
  },
  {
    title: "The Fires of Heaven",
    author: "Robert Jordan",
    webp: "images/books/The_Fires_of_Heaven.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.185,
  },
  {
    title: "Lord of Chaos",
    author: "Robert Jordan",
    webp: "images/books/Lord_of_Chaos.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.168,
  },
  {
    title: "A Crown of Swords",
    author: "Robert Jordan",
    webp: "images/books/A_Crown_of_Swords.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.197,
  },
  {
    title: "The Path of Daggers",
    author: "Robert Jordan",
    webp: "images/books/The_Path_of_Daggers.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.2,
  },
  {
    title: "Winter's Heart",
    author: "Robert Jordan",
    webp: "images/books/Winter's_Heart.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.164,
  },
  {
    title: "Crossroads of Twilight",
    author: "Robert Jordan",
    webp: "images/books/Crossroads_of_Twilight.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.213,
  },
  {
    title: "Knife of Dreams",
    author: "Robert Jordan",
    webp: "images/books/Knife_of_Dreams.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.161,
  },
  {
    title: "The Gathering Storm",
    author: "Robert Jordan",
    webp: "images/books/The_Gathering_Storm.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.25,
  },
  {
    title: "Towers of Midnight",
    author: "Robert Jordan",
    webp: "images/books/Towers_of_Midnight.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.205,
  },
  {
    title: "A Memory of Light",
    author: "Robert Jordan",
    webp: "images/books/A_Memory_of_Light.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.225,
  },
];

//Get the width of all the wheel of time books together
function getWoTWidth(books) {
  const WoT = books.filter((book) => book.author === "Robert Jordan");
  return WoT.reduce(
    (totalWidth, currentBook) =>
      totalWidth + currentBook.height * currentBook.heightRatio,
    0
  );
}

//creates a new bookshelf
function createShelf() {
  let shelfHeight = 15 * heightMultplier;
  shelfHeight = Math.min(shelfHeight, 70);

  //create a new shelfSpace
  let shelfSpace = document.createElement("div");
  shelfSpace.classList.add("shelf-space");
  shelfSpace.style.marginBottom = `${shelfHeight * 2}px`;
  document.querySelector(".bookshelf").appendChild(shelfSpace);

  //create a new shelf
  let shelf = document.createElement("div");
  shelf.classList.add("shelf");

  shelf.style.width = `${window.innerWidth - 40}px`;
  shelf.style.height = `${shelfHeight}px`;
  shelf.style.bottom = `${-shelfHeight}px`;
  shelfSpace.appendChild(shelf);
  return shelfSpace;
}

//Adds a book to a shelf
function addCoverToShelf(book, shelf) {
  //add the book to the shelf
  const cover = document.createElement("img");
  cover.classList.add("cover");

  //set a max height of a cover
  let coverMaxHeight = 500;
  cover.style.maxHeight = coverMaxHeight;
  book.height = Math.min(book.height, coverMaxHeight);

  cover.src = book.webp;
  cover.height = book.height;
  shelf.appendChild(cover);

  //prints out the width ratio
  cover.addEventListener("load", function () {
    console.log(
      book.title,
      Math.round(
        (cover.getBoundingClientRect().width /
          cover.getBoundingClientRect().height) *
          1000
      ) / 1000
    );
  });
}

//adds all books to the bookshelf
function buildBookshelf(bookList) {
  //create a new shelf
  let currentShelf = createShelf();

  //get the amount of empty shelf remaining
  let remainingShelfWidth = currentShelf.getBoundingClientRect().width;

  bookList.forEach(function (book) {
    if (book.title !== "The Wheel of Time") {
      //if the book is too big for the remaining shelf width, create a new shelf
      if (book.height * book.heightRatio > remainingShelfWidth) {
        currentShelf = createShelf();
        remainingShelfWidth = currentShelf.getBoundingClientRect().width;
      }

      addCoverToShelf(book, currentShelf);

      //subtract the book width from the remaining shelf space
      remainingShelfWidth -= book.height * book.heightRatio;
    } else {
      //Add the wheel of time books
      //If they can't fit on the current shelf, create a new shelf
      if (getWoTWidth(WheelOfTime) > remainingShelfWidth) {
        //creating a new shelf
        const WoTShelf = createShelf();
        WoTShelf.style.justifyContent = "center";

        //add each wheel of time book to the shelf
        WheelOfTime.forEach(function (book) {
          addCoverToShelf(book, WoTShelf);
        });
      } else {
        //If they can fit on the current shelf, add them to the current shelf
        WheelOfTime.forEach(function (book) {
          addCoverToShelf(book, currentShelf);
        });
      }
    }
  });
}

buildBookshelf(books);
