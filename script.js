//You can edit ALL of the code here

// For each episode, AT LEAST following must be displayed:
// the episode's name
// the season number
// the episode number
// the episode's medium-sized image
// the episode's summary text
const rootElem = document.getElementById("root");
const mainContainer= document.getElementsByClassName('container-div')[0];
console.log(mainContainer)

// search bar
function addSearch() {
  //   <nav class="navbar navbar-light bg-light">
  //   <form class="form-inline">
  //     <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
  //     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  //   </form>
  // </nav>
  //searchbar
  const nav = document.createElement("nav");
  nav.classList.add("navbar", "navbar-light", "bg-light");
  nav.style.margin = "20px";
  const form = document.createElement("form");
  form.classList.add("form-inline");
  const input = document.createElement("input");
  input.classList.add("form-control", "mr-sm-2");
  input.setAttribute("type", "text");
  input.setAttribute("id", "myInput");

  input.setAttribute("onkeyup", "myFunction()");

  input.setAttribute("placeholder", "Search");
  input.setAttribute("aria-label", "Search");


  form.appendChild(input);
  // form.appendChild(button);
  nav.appendChild(form);

  mainContainer.appendChild(nav);
  // console.log(nav);

  // const selectInputVal = document.querySelector(".form-control");
  // console.log("selecting input", selectInputVal);
 
}

function myFunction() {
  // Declare variables
  let input, filter, container, div, h3, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  // console.log(filter)
  container = document.getElementById("root");
  cards = container.getElementsByTagName('div');
  // console.log('cards', cards)

  // Loop through all list items, and hide those who don't match the search query
  if ( typeof(filter) !== 'undefined' && filter !== null ) {
  for (card of cards) {
    // console.log('card', card)
    h3 = card.getElementsByClassName("card-title")[0];
    txtValue = h3.textContent || h3.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      card.style.display = "";
      console.log('card length', cards.length)
    } else {
      card.style.display = "none";
    }
  }
}
else return;
}

addSearch();

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  console.log(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  //   <div class="card" style="width: 18rem;">
  //   <img class="card-img-top" src="..." alt="Card image cap">
  //   <div class="card-body">
  //     <h5 class="card-title">Card title</h5>
  //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //     <a href="#" class="btn btn-primary">Go somewhere</a>
  //   </div>
  // </div>

  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  console.log("root element", rootElem);
  episodeList.forEach((episode) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";

    const h3 = document.createElement("h3");
    h3.classList.add("card-title");
    h3.textContent = `${episode.name} - S${episode.season} E${episode.number}`;
    h3.style.margin = "20px 5px auto";
    h3.style.padding = "6px";
    h3.style.textAlign = "center";

    card.appendChild(h3);

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = episode.image.medium;
    img.style.display = "block";
    img.style.margin = "0 auto";
    img.style.width = "30rem";
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.textContent = episode.name;
    h5.style.textAlign = "center";

    const p = document.createElement("p");
    p.classList.add("card-text");
    p.textContent = episode.summary.replace(/<[^>]*>?/gm, "");
    // p.style.paddingRight = "10px";
    p.style.margin = "10px, 15px 0, 0";

    const elementArray = [h5, p];
    elementArray.forEach((el) => cardBody.appendChild(el));

    // console.log(cardBody);
    card.appendChild(cardBody);
    rootElem.appendChild(card);

  
    rootElem.style.display = "flex";
    rootElem.style.flexWrap = "wrap";
    rootElem.style.justifyContent = "space-around";
    rootElem.style.backgroundColor = "black";

    // console.log("name", episode.name, episode.season, episode.number);
  });

  const allCards = document.querySelectorAll(".card");
  console.log(allCards);
  [...allCards].forEach(
    (card) =>
      // console.log(card)
      (card.style.width = "30rem")
  );
  const footer = document.createElement("footer");
  const a = document.createElement("a");
  a.href = "https://www.tvmaze.com/";
  a.textContent = " TVMaze API";
  footer.textContent = `Created by SC using the`;
  console.log(footer);
  footer.appendChild(a);
  rootElem.appendChild(footer);
}


window.onload = setup;
