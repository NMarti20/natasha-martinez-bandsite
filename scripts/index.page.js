let apiKeyComments =
  "https://project-1-api.herokuapp.com/comments?api_key=5c5a5b4f-bd76-4c51-bbb6-fb014770cbcf";

let comments = [];

console.log('COMMENTS ARRAY:', comments);

//GET
function displayNewComments() {
  axios.get(apiKeyComments).then((response) => {


//trying to insert into comments array
response.data.forEach(entry => {
  comments.unshift(entry);
})

displayComments(comments);

  });
}

//displays comment html first load
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
    .then((renComments) => {
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

  let month = dateObj.getMonth() + 1;
  let date = dateObj.getDate();
  let year = dateObj.getFullYear();
  

  return  + month   + '/' + date + '/' +   year;
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



//On submit event

const commentsForm = document.querySelector(".comments__form");


commentsForm.addEventListener("submit", (event) => {
  event.preventDefault();

;

  //prints to console
  const nameInsert = event.target.name.value;

  const commentInsert = event.target.comment.value;


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

  //new comment form
  let newComment = {
    name: nameInsert,
    comment: commentInsert,
  };

  const clearComments = document.querySelector(".comments__posted");
  clearComments.innerHTML = "";
  event.target.reset();

  newComments(newComment);
});
