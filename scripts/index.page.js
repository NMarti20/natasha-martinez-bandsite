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

const commentsContent = comments.forEach(function displayComments(item) {
  //create img
  const commentsPostedUserImg = document.createElement("img");
  commentsPostedUserImg.classList.add("comments__posted-user-img");
  commentsPostedUserImg.src = item.image;
  commentsPostedUserImg.alt = "user image";

  commentsPosted.appendChild(commentsPostedUserImg);

  //create date
  const commentsDatePosted = document.createElement("p");
  commentsDatePosted.classList.add("comments__date-posted");
  commentsDatePosted.innerText = item.date;

  commentsPosted.appendChild(commentsDatePosted);

  //create comments__Container element, class and appendChild to commentsContainer
  const commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments__container");

  commentsPosted.appendChild(commentsContainer);

  //create comments__user-name element, class and appendChild to commentsPosted
  const commentsUserName = document.createElement("p");
  commentsUserName.classList.add("comments__user-name");
  commentsUserName.innerText = item.name;

  commentsContainer.appendChild(commentsUserName);

  //create comments__user-comment element, class and appendChild to commentsPosted
  const commentsUserComment = document.createElement("p");
  commentsUserComment.classList.add("comments__user-comment");
  commentsUserComment.innerText = item.comment;

  commentsContainer.appendChild(commentsUserComment);
});

console.log(commentsPosted);
