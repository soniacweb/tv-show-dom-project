
const rootElem = document.getElementById("root");
const mainContainer= document.getElementsByClassName('container-div')[0];
console.log(mainContainer)
const nav = document.createElement("nav");


function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
  addFilter(allEpisodes);
  addSearch();
  console.log(allEpisodes);
}

// add filter 
function addFilter(allEpisodes) {
  const div = document.createElement('div') 
  div.classList.add("dropdown");
  const button = document.createElement('button') 
  button.classList.add("btn", "btn-secondary", "btn-lg", "dropdown-toggle");
  button.setAttribute("id", "dropdownMenuButton")
  button.setAttribute("data-toggle", "dropdown"); 
  button.setAttribute("aria-haspopup", "true");
  button.setAttribute("aria-expanded", "false");
  button.innerText = 'Filter Episodes'
  div.appendChild(button)

  const dropdown = document.createElement('div');
  dropdown.classList.add("dropdown-menu");
  dropdown.setAttribute("aria-labelledby", "dropdownMenuButton")


allEpisodes.forEach(episode => {
const a = document.createElement('a')
a.classList.add("dropdown-item")
a.setAttribute("href", "#")
a.innerText = `${episode.name} - S${episode.season} E${episode.number}`;
a.style.color = 'black';
dropdown.appendChild(a) 

}
)
div.appendChild(dropdown)
nav.appendChild(div);

// const aTags = Array.from(document.getElementsByClassName('dropdown-item')).forEach((el, i) => console.log(el[i]))

// console.log('a tags', aTags)
// let value;
// for (let item of aTags) {
//   value = item.innerText;
//   console.log(aTags[item], item.innerText);
// }
// console.log(value)
}



// search bar
function addSearch() {
  //searchbar
  nav.classList.add("navbar", "navbar-light", "bg-light");
  nav.style.margin = "20px";
  nav.style.display = 'flex';
  nav.style.justifyContent = 'space-evenly'
  nav.style.height = '400px';
  // nav.style.background = 'url("https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80") cover';
  // nav.style.background.position = 'cover';
  // nav.style.background.height = '100%';


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
  nav.appendChild(form);

  mainContainer.appendChild(nav);
  // console.log(nav);

 
}

function myFunction() {
  // Declare variables
  let input, filter, container, h3, txtValue;
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
      // console.log('card length', cards.length)
    } else {
      card.style.display = "none";
    }
  }
}
else return;
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

  // console.log("root element", rootElem);
  episodeList.forEach((episode) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
    card.style.backgroundColor = 'transparent';

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
  // console.log(allCards);
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
  footer.appendChild(a);
  rootElem.appendChild(footer);
}


window.onload = setup;
