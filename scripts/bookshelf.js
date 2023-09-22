let heightMultplier = (1.15 * window.innerWidth) / 375;

document
  .querySelector(".popup-background")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      this.style.display = "none";
    }
  });

const books = [
  {
    title: "Sea of Tranquility",
    webp: "images/books/The_Sea_of_Tranquility.webp",
    height: 89 * heightMultplier,
    heightRatio: 0.117,
    author: "",
    pages: 0,
    read: true,
    startDate: "unknown",
    finishDate: "unknown",
    daysToFinish: 0,
    thoughts: "hardly ever",
    genres: [],
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
    height: 96 * heightMultplier,
    heightRatio: 0.234,
  },
  {
    title: "A Knight of the Seven Kingdoms",
    author: "George R.R. Martin",
    genres: ["Fantasy"],
    goodreads: "",
    webp: "images/books/A_knight_of_The_seven_Kingdoms.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.149,
  },
  {
    title: "Fire & Blood",
    author: "George R.R. Martin",
    genres: ["Fantasy"],
    goodreads: "",
    webp: "images/books/Fire_&_Blood.webp",
    height: 100 * heightMultplier,
    heightRatio: 0.198,
  },
  {
    title: "Nightlord: Sunset",
    webp: "images/books/Nightlord_Sunset.webp",
    height: 97 * heightMultplier,
    heightRatio: 0.192,
  },

  {
    title: "Replay",
    webp: "images/books/Replay.webp",
    height: 86 * heightMultplier,
    heightRatio: 0.095,
  },

  {
    title: "The Catcher in the Rye",
    webp: "images/books/The_Catcher_in_the_Rye.webp",
    height: 84 * heightMultplier,
    heightRatio: 0.091,
  },
  {
    title: "The Song of Achilles",
    webp: "images/books/The_Song_of_Achilles.webp",
    height: 84 * heightMultplier,
    heightRatio: 0.115,
  },
  {
    title: "Wuthering Heights",
    webp: "images/books/Wuthering_Heights.webp",
    height: 89 * heightMultplier,
    heightRatio: 0.159,
  },

  {
    title: "Jonathan Strange & Mr Norrell",
    webp: "images/books/Jonathan_Strange_&_Mr_Norrell.webp",
    height: 81.6 * heightMultplier,
    heightRatio: 0.247,
  },
  {
    title: "Dune",
    webp: "images/books/Dune.webp",
    height: 86.2 * heightMultplier,
    heightRatio: 0.127,
  },
  {
    title: "SPQR",
    webp: "images/books/SPQR.webp",
    height: 86.2 * heightMultplier,
    heightRatio: 0.122,
  },
  {
    title: "H is for Hawk",
    webp: "images/books/H_Is_For_Hawk.webp",
    height: 86.2 * heightMultplier,
    heightRatio: 0.087,
  },
  {
    title: "Red Rising",
    webp: "images/books/Red_Rising.webp",
    height: 86.2 * heightMultplier,
    heightRatio: 0.109,
  },
  {
    title: "Golden Son",
    webp: "images/books/Golden_Son.webp",
    height: 86.2 * heightMultplier,
    heightRatio: 0.109,
  },
  {
    title: "Endurance",
    webp: "images/books/Endurance.webp",
    height: 86.2 * heightMultplier,
    heightRatio: 0.115,
  },
  {
    title: "The Count of Monte Cristo",
    webp: "images/books/The_Count_Of_Monte_Cristo.webp",
    height: 86.2 * heightMultplier,
    heightRatio: 0.288,
  },
  {
    title: "This Book is Full of Spiders",
    webp: "images/books/This_Book_Is_Full_Of_Spiders.webp",
    height: 86.2 * heightMultplier,
    heightRatio: 0.13,
  },
  {
    title: "The Goblin Emperor",
    webp: "images/books/The_Goblin_Emperor.webp",
    height: 86.2 * heightMultplier,
    heightRatio: 0.128,
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

const HarryPotter = [];

//Get the width of all the wheel of time books together
function getWoTWidth(books) {
  const WoT = books.filter((book) => book.author === "Robert Jordan");
  return WoT.reduce(
    (totalWidth, currentBook) =>
      totalWidth + currentBook.height * currentBook.heightRatio,
    0
  );
}

//Get the width of all the Harry Potter books together
function getHarryPotterWidth(books) {
  const HP = books.filter((book) => book.author === "J.K. Rowling");
  return HP.reduce(
    (totalWidth, currentBook) =>
      totalWidth + currentBook.height * currentBook.heightRatio,
    0
  );
}

//creates a new bookshelf
function createShelf() {
  let shelfHeight = 10 * heightMultplier;
  shelfHeight = Math.min(shelfHeight, 70);

  //create a new shelfSpace
  let shelfSpace = document.createElement("div");
  shelfSpace.classList.add("shelf-space");
  shelfSpace.style.marginBottom = `${shelfHeight * 2}px`;
  document.querySelector(".bookshelf").appendChild(shelfSpace);

  //create a new shelf
  let shelf = document.createElement("div");
  shelf.classList.add("shelf");

  let shelfMargin = 30 * heightMultplier;

  shelf.style.width = `${window.innerWidth - shelfMargin}px`;
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
  let coverMaxHeight = 900;
  cover.style.maxHeight = coverMaxHeight;
  book.height = Math.min(
    book.height,
    (coverMaxHeight * book.height) / (100 * heightMultplier)
  );

  cover.src = book.webp;
  cover.height = book.height;
  cover.id = book.title;
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

  cover.addEventListener("click", () => {
    const popup = document.querySelector(".popup-background");
    const title = popup.querySelector(".title");
    title.innerText = book.title;
    popup.style.display = "block";
  });
}

function addGroupOfBooks(group, shelf) {
  //add each wheel of time book to the shelf
  group.forEach(function (book) {
    addCoverToShelf(book, shelf);
  });
}

function getBookWidth(title) {
  //search the main books list
  let book = books.find((book) => book.title === title);

  //search The Wheel of Time
  if (!book) {
    book = WheelOfTime.find((book) => book.title === title);
  }

  //search Harry Potter
  if (!book) {
    book = HarryPotter.find((book) => book.title === title);
  }
  return book.height * book.heightRatio;
}

function getRemainingShelfWidth(shelf) {
  let remainingShelfWidth = shelf.querySelector(".shelf").style.width;
  remainingShelfWidth = parseInt(remainingShelfWidth.slice(0, -2));
  for (let cover of shelf.querySelectorAll(".cover")) {
    remainingShelfWidth -= getBookWidth(cover.id);
  }
  return remainingShelfWidth;
}

//adds all books to the bookshelf
function buildBookshelf(bookList) {
  const completedCoversHeader = document.querySelector(".header-covers");
  completedCoversHeader.innerText = `Covers Completed: ${
    books.length + WheelOfTime.length - 1
  }/184`;
  const bookshelf = document.querySelector(".bookshelf");

  //create a new shelf
  let currentShelf = createShelf();

  //get the amount of empty shelf remaining
  let remainingShelfWidth = getRemainingShelfWidth(currentShelf);

  bookList.forEach(function (book) {
    if (book.title === "The Wheel of Time") {
      //Add the wheel of time books
      //If they can't fit on the current shelf, create a new shelf
      if (getWoTWidth(WheelOfTime) > remainingShelfWidth) {
        //creating a new shelf
        const WoTShelf = createShelf();
        WoTShelf.style.justifyContent = "center";

        addGroupOfBooks(WheelOfTime, WoTShelf);
      } else {
        //If they can fit on the current shelf, add them to the current shelf
        addGroupOfBooks(WheelOfTime, currentShelf);
      }
    } else if (book.title === "Harry Potter") {
      //Add the Harry Potter books
      //If they can't fit on the current shelf, create a new shelf
      if (getHarryPotterWidth(HarryPotter) > remainingShelfWidth) {
        //creating a new shelf
        const HarryPotterShelf = createShelf();
        HarryPotterShelf.style.justifyContent = "center";

        addGroupOfBooks(HarryPotter, HarryPotterShelf);
      } else {
        //If they can fit on the current shelf, add them to the current shelf
        addGroupOfBooks(HarryPotter, currentShelf);
      }
    } else {
      //if the book is too big for the remaining shelf width, create a new shelf
      if (book.height * book.heightRatio > remainingShelfWidth) {
        //check to see if there's a shelf at the end that could be filled (Wot or Harry Potter) and that it has room for the book
        if (
          currentShelf !== bookshelf.lastElementChild &&
          book.height * book.heightRatio <
            getRemainingShelfWidth(bookshelf.lastElementChild)
        ) {
          currentShelf = bookshelf.lastElementChild;
          remainingShelfWidth = getRemainingShelfWidth(currentShelf);
        } else {
          currentShelf = createShelf();
          remainingShelfWidth = getRemainingShelfWidth(currentShelf);
        }
      }

      addCoverToShelf(book, currentShelf);

      //subtract the book width from the remaining shelf space
      remainingShelfWidth -= book.height * book.heightRatio;
    }
  });
}

buildBookshelf(books);
