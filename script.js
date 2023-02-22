
const formEl = document.querySelector('form');
// console.log(formEl);
const inputName = document.querySelector('#userName');
// console.log(inputName);
const inputComment = document.querySelector('#comment');
// console.log(inputComment);
const commentCardContainer = document.querySelector('.commentCardContainer');
// console.log(commentCardContainer);

formEl.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(e);
    const userName = inputName.value;
    // console.log(userName);
    const userComment = inputComment.value;
    // console.log(userComment);
    if (userName.trim() !== "") {
        const commentCard = document.createElement('div');
        commentCard.classList.add('commentsCard');
        commentCardContainer.appendChild(commentCard);
        // console.log(commentCard);

        const profilePictureContainer = document.createElement('div');
        profilePictureContainer.classList.add('commentsProfilePicture');
        commentCard.appendChild(profilePictureContainer);
        // console.log(profilePictureContainer);
        profilePictureContainer.innerHTML = '<img src="./assets/profile-image-2.jpg" alt="the face of Julia, a young lady with a harry potter hat ">';

        const commentText = document.createElement('div');
        commentText.classList.add('commentsText');
        commentCard.appendChild(commentText);
        // console.log(commentCard);


        const date = new Date().toDateString();
        // console.log(date);
        const commentDate = document.createElement('h4');
        commentDate.textContent = `${date} by ${userName}`;
        // console.log(commentDate);
        commentText.appendChild(commentDate);

        const comment = document.createElement('p');
        comment.textContent = userComment;
        commentText.appendChild(comment);

        inputName.value = "";
        inputComment.value = "";
    }

    else {
        alert('please enter a name!');
    }
})