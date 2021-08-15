//create shows array of objects

let apiKeyShows = 'https://project-1-api.herokuapp.com/showdates?api_key=5c5a5b4f-bd76-4c51-bbb6-fb014770cbcf'

let shows = [];

function displayShowsList(){
axios
  .get(apiKeyShows)

  .then((response) => {
    // displayShows(response.data);
    response.data.forEach(entry => {
      shows.push(entry);
    })
    
    displayShows(shows);
    
  })};

displayShowsList();





const showsList = document.querySelector(".shows");


const showsOutline = (showsData) => {
  //to append showsElement with the main div from HTML
  // showsList.appendChild(showsElement);

  //create showsContainer element, class and appendChild
  const showsContainer = document.createElement("div");
  showsContainer.classList.add("shows__container");

  showsList.appendChild(showsContainer);


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
  showsDatesDay.innerText = formattedDate(showsData.date);

  // console.log('shows date: ', showsData.date)

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
  showsVenueName.innerText = showsData.place;

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
  showsLocationName.innerText = showsData.location;

  showsLocation.appendChild(showsLocationName);

  //create button
  const btn = document.createElement("button");
  btn.classList.add("shows__btn");
  btn.innerText = "BUY TICKETS";
  btn.addEventListener("click", () => {
    console.log(showsData.place);
    console.log(showsData.location);
  });

  showsContainer.appendChild(btn);

  //hr tag
  const showsDivider = document.createElement("hr");
  showsDivider.classList.add("shows__divider");

  showsContainer.appendChild(showsDivider);

  return showsContainer;
  // console.log("shows container:", showsContainer);
};

const displayShows = (shows) => {
  shows.forEach((show) => {
    const showsData = show;
    console.log("Shows Data: ", showsData);

    const showsSection = showsOutline(showsData);
    console.log("Shows Section: ", showsSection);

    showsList.appendChild(showsSection);
  });
};

function formattedDate(timestamp){

let dateObj = new Date (Number(timestamp));

console.log( dateObj)

var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];


var formattedDate = monthNames[dateObj.getMonth()] + ' ' + dateObj.getDate()+ ' '+  dateObj.getFullYear();
return formattedDate;

}