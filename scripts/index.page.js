let apiKeyComments =
  "https://project-1-api.herokuapp.com/comments?api_key=5c5a5b4f-bd76-4c51-bbb6-fb014770cbcf";

let comments = [];

console.log('COMMENTS ARRAY:', comments);

//GET
function displayNewComments() {
  axios.get(apiKeyComments).then((response) => {
    // console.log("response:", displayComments(response.data));

//trying to insert into comments array
response.data.forEach(entry => {
  comments.unshift(entry);
})

displayComments(comments);
// console.log('COM: ' , comments)

  });
}

displayNewComments();


//POST 
const newComments = (postedData) => {
  console.log("posted:", postedData);
  axios
    .post(
      apiKeyComments, 
      {
        "name": postedData.name,

        "comment": postedData.comment
      }
    
    )
    .then((renderedComments) => {
      // comments.push(response.data);
      // displayNewComments(renderedComments.data);
    displayNewComments();
    })
    .catch(e => {
      console.error('error:', e);
    });
};


//DOM OUTLINE

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
  commentsDatePosted.innerText = formattedDate(commentsData.timestamp);

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

// convert to date


function formattedDate(timeDate){
  let dateObj = new Date (timeDate);
  // console.log('timestamp:' , timeDate)
  let month = dateObj.getMonth() + 1;
  let date = dateObj.getDate();
  let year = dateObj.getFullYear();
  
  // console.log(month, date, year)
  // console.log('date obj: ', dateObj)
  // console.log('timestamp: ', typeof timestamp);
  return  + month   +'/' + date + '/' +   year;

  
  }


const displayComments = (comments) => {
  comments.forEach((comment) => {
    const commentsData = comment;
    console.log("Comments Data: ", commentsData);

    const commentsSection = commentsOutline(commentsData);
    console.log("Comments Section: ", commentsSection);

    commentsPosted.appendChild(commentsSection);
  });
};

// displayComments(comments);

//On submit event

const commentsForm = document.querySelector(".comments__form");
// console.log(commentsForm);

commentsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // console.log(event.target);

  //prints to console
  const nameInsert = event.target.name.value;
  // console.log(nameInsert);
  const commentInsert = event.target.comment.value;
  // console.log(commentInsert);

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

  // let formatDate =
  //   "0" +
  //   new Date(Date.now()).getMonth() +
  //   "/" +
  //   "0" +
  //   new Date(Date.now()).getDate() +
  //   "/" +
  //   new Date(Date.now()).getFullYear();

  //new comment form
  let newComment = {
    name: nameInsert,
    // date: formatDate,
    comment: commentInsert,
    // img: "",
  };

  // console.log("new: ", newComment);
  // comments.unshift(newComment);

  const clearComments = document.querySelector(".comments__posted");
  clearComments.innerHTML = "";
  event.target.reset();

  // displayComments(comments);
  newComments(newComment);
});
