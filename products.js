
// Products array of objects

let products = [
    {
      id: 1,
      Image: "https://i.postimg.cc/G3Kzr6wK/shopping.webp",
      title: "Naledi His Love",
      description: "The epic love story centered on eight Zulu men, whose surname is Zulu, continues, Naledi his Love, focuses on Qhawe and the woman he comes to love, Naledi. ",
      author: "Dudu Busani-Dube",
      price: "R165",
    },
    {
      id: 2,
      Image: "https://i.postimg.cc/CxB4G1Zr/58687126-720x.jpg",
      title: "Finding Me",
      description: "In this book, you will meet a little girl named Viola who ran from her past until she made a life-changing decision to stop running forever.",
      author: "Viola D",
      price: "R345"
    },
    {
      id: 3,
      Image: "https://i.postimg.cc/bw793hky/i-choose-to-live.jpg",
      title: "I Choose To Live",
      description:"When Letshego Zulu set off with her husband, South African racing champion Gugulethu Zulu, to conquer Mount Kilimanjaro in July 2016, she had no idea that she would return to South Africa days later with her husband’s body in a coffin",
      author: "Letshego Zulu",
      price: "R254"
    },
    {
      id: 4,
      Image: "https://i.postimg.cc/bvn3hJpS/41ysigp-RIo-L-SL500.jpg",
      title: "Let Love Have The Last Word",
      description: "Common believes that the phrase 'let love have the last word' is not just a declaration; it is a statement of purpose, a daily promise. Love is the most powerful force on the planet, and ultimately the way you love determines who you are and how you experience life.",
      author: "Common",
      price: "R369",
    },
    {
      id: 5,
      Image: "https://i.postimg.cc/RhgTRJQy/shopping-1.webp",
      title: "It End With Us",
      description: "It Ends With Us is a standalone contemporary romance novel ,So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life suddenly seems almost too good to be true. Ryle is assertive, stubborn, maybe even a little arrogant.",
      author: "Colleen Hoover",
      year: "2023",
      price: "R159",
    },
    {
      id: 6,
      Image: "https://i.postimg.cc/7YQVJ7LT/shopping-2.webp",
      title: "All Your Perfects",
      author: "Colleen Hoover",
      description: "Quinn and Graham's perfect love is threatened by their imperfect marriage. The memories, mistakes, and secrets that they have built up over the years are now tearing them apart. The one thing that could save them might also be the very thing that pushes their marriage beyond the point of repair.",
      year: "2023",
      price: "R154",
    },
  ];
  
  let dispProduct = document.querySelector(".products");
  products.forEach((data) => {
    dispProduct.innerHTML += `
    <div class="col-12 col-md-4 col-sm-6">
      <div class= "product card m-4 p-3" style="width: 400px">
      <img src="${data.Image}">  
      <div class="card-body">
     <h3>Description</h3>
      <p class="text-black">${data.description} </p>
      <p class="text-black display-5">${data.price}</p>
      <button>Add to Cart</button>
      </div>
      </div>`;
   
  // flip card

// const card = document.getElementById("card")

// card.addEventListener("click",flipCard);

// function flipCard() {
//   card.classList.toggle("flipCard");
// }

// const card2 = document.getElementById("card2")

// card2.addEventListener("click",flipCard);

// function flipCard() {
//   card2.classList.toggle("flipCard");
// }

// const card3 = document.getElementById("card3")

// card3.addEventListener("click",flipCard);

// function flipCard() {
//   card3.classList.toggle("flipCard");
// }
});