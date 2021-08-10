//create shows array of objects

let shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

/*

<!---------------SHOWS SECTION---------------->

<article class = 'shows'>

    <h2 class = 'shows__title'>Shows</h2>

    <div class = 'shows__container'>

        <div class = 'shows__dates'>
            <h3 class = 'shows__dates-title'>Dates</h3>
            <p class = 'shows__dates-day'> Mon Sept 06 2021</p>
        </div>

        <div class = 'shows__venue'>
            <h3 class = 'shows__venue-title'>Venue</h3>
            <p class = 'shows__venue-name'> Ronald Lane</p>
        </div>

        <div class = 'shows__location'>
            <h3 class = 'shows__location-title'>Location</h3>
            <p class = 'shows__location-name'> San Francisco, CA</p>
        </div>

    </div>

</article>

*/

const showsList = document.querySelector(".shows");

// function showsDisplay(showsData) {
//create article tag and add class name

// const showsElement = document.createElement("article");
// showsElement.classList.add("shows");
const showsContent = shows.forEach((item) => {
  //to append showsElement with the main div from HTML
  // showsList.appendChild(showsElement);

  //create showsContainer element, class and appendChild
  const showsContainer = document.createElement("div");
  showsContainer.classList.add("shows__container");

  showsList.appendChild(showsContainer);
  //TEST
  //   console.log("test:", item.date);
  //   console.log("test:", item.venue);
  //   console.log("test:", item.location);

  /**************
   SHOWS DATES
 ************/
  //create shows__dates elements class, and appendChild to showsContainer
  const showsDates = document.createElement("div");
  showsDates.classList.add("shows__dates");

  showsContainer.appendChild(showsDates);

  //create shows__dates-title elements class, and appendChild to showsDates
  const showsDatesTitle = document.createElement("h3");
  showsDatesTitle.classList.add("shows__dates-title");
  showsDatesTitle.innerText = "DATES";

  showsDates.appendChild(showsDatesTitle);

  //create shows__dates-day elements, class and appendChild to showsDates
  const showsDatesDay = document.createElement("p");
  showsDatesDay.classList.add("shows__dates-day");
  showsDatesDay.innerText = item.date;

  showsDates.appendChild(showsDatesDay);

  /**************
   SHOWS VENUE
 ************/
  //create shows__venue element, class and appendChild to showsContainer
  const showsVenue = document.createElement("div");
  showsVenue.classList.add("shows__venue");

  showsContainer.appendChild(showsVenue);

  //create shows__venue-title elements, class and appendchild to showsVenue
  const showsVenueTitle = document.createElement("h3");
  showsVenueTitle.classList.add("shows__venue-title");
  showsVenueTitle.innerText = "VENUE";

  showsVenue.appendChild(showsVenueTitle);

  //create shows__venue-name element, class and appendChild to showsVenue
  const showsVenueName = document.createElement("p");
  showsVenueName.classList.add("shows__venue-name");
  showsVenueName.innerText = item.venue;

  showsVenue.appendChild(showsVenueName);

  /**************
   SHOWS LOCATION
 ************/
  //create shows__location element, class and appendChild to showsContainer
  const showsLocation = document.createElement("div");
  showsLocation.classList.add("shows__location");

  showsContainer.appendChild(showsLocation);

  //create shows__location-title element, class and appendChild
  const showsLocationTitle = document.createElement("h3");
  showsLocationTitle.classList.add("shows__location-title");
  showsLocationTitle.innerText = "LOCATION";

  showsLocation.appendChild(showsLocationTitle);

  //create shows__location-name element, class, and appendChild to showsLocation
  const showsLocationName = document.createElement("p");
  showsLocationName.classList.add("shows__location-name");
  showsLocationName.innerText = item.location;

  showsLocation.appendChild(showsLocationName);

  //create button
  const btn = document.createElement("button");
  btn.classList.add("shows__btn");
  btn.innerText = "BUY TICKETS";

  showsContainer.appendChild(btn);

  //hr tag
  const showsDivider = document.createElement("hr");
  showsDivider.classList.add("shows__divider");

  showsContainer.appendChild(showsDivider);
  // return showsContainer;
  // console.log(showsContainer);
});

//when i click on buy tickets button it consoles venue and location
const buyTicketBtn = document.querySelectorAll(".shows__btn");

const generateShows = (shows) => {
  for (let i = 0; i < shows.length; i++) {
    buyTicketBtn[i].addEventListener("click", () => {
      console.log(shows[i].venue);
      console.log(shows[i].location);
    });
  }
};

generateShows(shows);
