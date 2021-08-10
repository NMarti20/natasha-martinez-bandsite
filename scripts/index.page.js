let comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    image: "../",
  },

  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",

    image: "",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    image: "",

    //"../assets/images/Mohan-muruge.jpg",
  },
];

const commentsPosted = document.querySelector(".comments__posted");

const commentsOutline = (commentsData) => {
  const listedCommentsSection = document.createElement("section");
  listedCommentsSection.classList.add("comments__listed-section");

  commentsPosted.appendChild(listedCommentsSection);

  //create img div

  const commentsPicContainer = document.createElement("div");
  commentsPicContainer.classList.add("comments__pic-container");

  listedCommentsSection.appendChild(commentsPicContainer);

  //create img
  const commentsPostedUserImg = document.createElement("img");
  commentsPostedUserImg.classList.add("comments__posted-user-img");
  // commentsPostedUserImg.src = item.image;
  // commentsPostedUserImg.alt = "user image";

  commentsPicContainer.appendChild(commentsPostedUserImg);

  //create comments__Container element, class and appendChild to commentsContainer
  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments__container");

  listedCommentsSection.appendChild(commentsContainer);

  //create div for name and date
  const nameDateContainer = document.createElement("div");
  nameDateContainer.classList.add("comments__name-date-container");

  commentsContainer.appendChild(nameDateContainer);

  //create comments__user-name element, class and appendChild to commentsPosted
  const commentsUserName = document.createElement("p");
  commentsUserName.classList.add("comments__user-name");
  commentsUserName.innerText = commentsData.name;

  nameDateContainer.appendChild(commentsUserName);

  //create date
  const commentsDatePosted = document.createElement("p");
  commentsDatePosted.classList.add("comments__date-posted");
  commentsDatePosted.innerText = commentsData.date;

  nameDateContainer.appendChild(commentsDatePosted);

  //create comments__user-comment element, class and appendChild to commentsPosted
  const commentsUserComment = document.createElement("p");
  commentsUserComment.classList.add("comments__user-comment");
  commentsUserComment.innerText = commentsData.comment;

  commentsContainer.appendChild(commentsUserComment);

  //hr tag
  const commentsDivider = document.createElement("hr");
  commentsDivider.classList.add("comments__divider");

  commentsPosted.appendChild(commentsDivider);

  return listedCommentsSection;
};

const displayComments = (comments) => {
  comments.forEach((comment) => {
    const commentsData = comment;
    console.log("Comments Data: ", commentsData);

    const commentsSection = commentsOutline(commentsData);
    console.log("Comments Section: ", commentsSection);

    commentsPosted.appendChild(commentsSection);
  });
};

displayComments(comments);

//On submit event

const commentsForm = document.querySelector(".comments__form");
// console.log(commentsForm);

commentsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // console.log(event.target);

  //prints to console
  const nameInsert = event.target.name.value;
  console.log(nameInsert);
  const commentInsert = event.target.comment.value;
  console.log(commentInsert);

  //validate errors, doesn't post while empty and reset when inputted
  if (nameInsert === "") {
    event.target.name.classList.add("comments__validate");

    return false;
  } else {
    event.target.name.classList.remove("comments__validate");
  }

  if (commentInsert === "") {
    event.target.comment.classList.add("comments__validate");

    return false;
  } else {
    event.target.comment.classList.remove("comments__validate");
  }

  // grab current date

  let formatDate =
    "0" +
    new Date(Date.now()).getMonth() +
    "/" +
    "0" +
    new Date(Date.now()).getDate() +
    "/" +
    new Date(Date.now()).getFullYear();

  //new comment form
  let newComment = {
    name: nameInsert,
    date: formatDate,
    comment: commentInsert,
    img: "",
  };

  comments.unshift(newComment);

  event.target.reset();

  const clearComments = document.querySelector(".comments__posted");
  clearComments.innerHTML = "";

  displayComments(comments);
});
