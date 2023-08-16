let heightMultplier = (1.0948 * window.innerWidth) / 375;

const books = [
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    genres: ["Classic", "Fiction"],
    goodreads: "https://www.goodreads.com/book/show/24280.Les_Mis_rables",
    png: "images/books/Les_Miserables.png",
    height: 75 * heightMultplier,
    heightRatio: 0.355,
  },
  {
    title: "A Knight of the Seven Kingdoms",
    author: "George R.R. Martin",
    genres: ["Fantasy"],
    goodreads: "",
    png: "images/books/A_knight_of_The_seven_Kingdoms.png",
    height: 100 * heightMultplier,
    heightRatio: 0.208,
  },
  {
    title: "Fire & Blood",
    author: "George R.R. Martin",
    genres: ["Fantasy"],
    goodreads: "",
    png: "images/books/Fire_&_Blood.png",
    height: 100 * heightMultplier,
    heightRatio: 0.233,
  },
  {
    title: "Nightlord: Sunset",
    png: "images/books/Nightlord_Sunset.png",
    height: 100 * heightMultplier,
    heightRatio: 0.262,
  },

  {
    title: "Replay",
    png: "images/books/Replay.png",
    height: 100 * heightMultplier,
    heightRatio: 0.136,
  },
  {
    title: "Sea of Tranquility",
    png: "images/books/Sea_of_Tranquility.png",
    height: 100 * heightMultplier,
    heightRatio: 0.149,
  },
  {
    title: "The Catcher in the Rye",
    png: "images/books/The_Catcher_in_the_Rye.png",
    height: 100 * heightMultplier,
    heightRatio: 0.139,
  },
  {
    title: "The Song of Achilles",
    png: "images/books/The_Song_of_Achilles.png",
    height: 100 * heightMultplier,
    heightRatio: 0.157,
  },
  {
    title: "Wuthering Heights",
    png: "images/books/Wuthering_Heights.png",
    height: 100 * heightMultplier,
    heightRatio: 0.225,
  },
  {
    title: "The Wheel of Time",
  },
];

const WheelOfTime = [
  {
    title: "New Spring",
    author: "Robert Jordan",
    png: "images/books/New_Spring.png",
    height: 100 * heightMultplier,
    heightRatio: 0.15,
  },
  {
    title: "The Eye of the World",
    author: "Robert Jordan",
    png: "images/books/The_Eye_of_the_World.png",
    height: 100 * heightMultplier,
    heightRatio: 0.198,
  },
  {
    title: "The Great Hunt",
    author: "Robert Jordan",
    png: "images/books/The_Great_Hunt.png",
    height: 100 * heightMultplier,
    heightRatio: 0.181,
  },
  {
    title: "The Dragon Reborn",
    author: "Robert Jordan",
    png: "images/books/The_Dragon_Reborn.png",
    height: 100 * heightMultplier,
    heightRatio: 0.189,
  },
  {
    title: "The Shadow Rising",
    author: "Robert Jordan",
    png: "images/books/The_Shadow_Rising.png",
    height: 100 * heightMultplier,
    heightRatio: 0.191,
  },
  {
    title: "The Fires of Heaven",
    author: "Robert Jordan",
    png: "images/books/The_Fires_of_Heaven.png",
    height: 100 * heightMultplier,
    heightRatio: 0.185,
  },
  {
    title: "Lord of Chaos",
    author: "Robert Jordan",
    png: "images/books/Lord_of_Chaos.png",
    height: 100 * heightMultplier,
    heightRatio: 0.168,
  },
  {
    title: "A Crown of Swords",
    author: "Robert Jordan",
    png: "images/books/A_Crown_of_Swords.png",
    height: 100 * heightMultplier,
    heightRatio: 0.197,
  },
  {
    title: "The Path of Daggers",
    author: "Robert Jordan",
    png: "images/books/The_Path_of_Daggers.png",
    height: 100 * heightMultplier,
    heightRatio: 0.2,
  },
  {
    title: "Winter's Heart",
    author: "Robert Jordan",
    png: "images/books/Winter's_Heart.png",
    height: 100 * heightMultplier,
    heightRatio: 0.164,
  },
  {
    title: "Crossroads of Twilight",
    author: "Robert Jordan",
    png: "images/books/Crossroads_of_Twilight.png",
    height: 100 * heightMultplier,
    heightRatio: 0.213,
  },
  {
    title: "Knife of Dreams",
    author: "Robert Jordan",
    png: "images/books/Knife_of_Dreams.png",
    height: 100 * heightMultplier,
    heightRatio: 0.161,
  },
  {
    title: "The Gathering Storm",
    author: "Robert Jordan",
    png: "images/books/The_Gathering_Storm.png",
    height: 100 * heightMultplier,
    heightRatio: 0.25,
  },
  {
    title: "Towers of Midnight",
    author: "Robert Jordan",
    png: "images/books/Towers_of_Midnight.png",
    height: 100 * heightMultplier,
    heightRatio: 0.205,
  },
  {
    title: "A Memory of Light",
    author: "Robert Jordan",
    png: "images/books/A_Memory_of_Light.png",
    height: 100 * heightMultplier,
    heightRatio: 0.225,
  },
];

function getWoTWidth(books) {
  const WoT = books.filter((book) => book.author === "Robert Jordan");
  return WoT.reduce(
    (totalWidth, currentBook) =>
      totalWidth + currentBook.height * currentBook.heightRatio,
    0
  );
}

function buildBookshelf(bookList) {
  let currentShelf = document.createElement("div");
  currentShelf.style.justifyContent = "center";
  currentShelf.classList.add("shelf-space");
  document.querySelector(".bookshelf").appendChild(currentShelf);
  let shelf = document.createElement("div");
  shelf.classList.add("shelf");
  shelf.style.width = `${window.innerWidth - 40}px`;
  currentShelf.appendChild(shelf);

  let remainingShelfWidth = currentShelf.getBoundingClientRect().width;

  bookList.forEach(function (book) {
    if (book.title !== "The Wheel of Time") {
      if (book.height * book.heightRatio > remainingShelfWidth) {
        currentShelf.style.justifyContent = "center";
        currentShelf = document.createElement("div");
        currentShelf.classList.add("shelf-space");
        document.querySelector(".bookshelf").appendChild(currentShelf);
        shelf = document.createElement("div");
        shelf.classList.add("shelf");
        shelf.style.width = `${window.innerWidth - 40}px`;
        currentShelf.appendChild(shelf);
        remainingShelfWidth = currentShelf.getBoundingClientRect().width;
      }
      const cover = document.createElement("img");
      cover.classList.add("book");
      cover.src = book.png;
      cover.height = book.height;
      currentShelf.appendChild(cover);
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
      remainingShelfWidth -= book.height * book.heightRatio;
    } else {
      if (getWoTWidth(WheelOfTime) > remainingShelfWidth) {
        const WoTShelfSpace = document.createElement("div");
        WoTShelfSpace.style.justifyContent = "center";
        WoTShelfSpace.classList.add("shelf-space");
        document.querySelector(".bookshelf").appendChild(WoTShelfSpace);
        const WoTShelf = document.createElement("div");
        WoTShelf.classList.add("shelf");
        WoTShelf.style.width = `${window.innerWidth - 40}px`;
        WoTShelfSpace.appendChild(WoTShelf);
        WheelOfTime.forEach(function (book) {
          const cover = document.createElement("img");
          cover.classList.add("book");
          cover.src = book.png;
          cover.height = book.height;
          WoTShelfSpace.appendChild(cover);
        });
      } else {
        WheelOfTime.forEach(function (book) {
          const cover = document.createElement("img");
          cover.classList.add("book");
          cover.src = book.png;
          cover.height = book.height;
          currentShelf.appendChild(cover);
          remainingShelfWidth -= book.height * book.heightRatio;
        });
      }
    }
  });
}

buildBookshelf(books);
console.log(getWoTWidth(WheelOfTime));
// window.addEventListener("resize", function () {
//   buildBookshelf(books);
// });
