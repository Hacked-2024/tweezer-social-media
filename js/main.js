// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Initialize card content array
    var cardContent = [];
  
    // Function to save card content
    function saveCardContent(imageSrc, caption) {
      cardContent.push([imageSrc, caption]);
    }
  
    // Loop through each card and save its content
    var cards = document.querySelectorAll(".card");
    cards.forEach(function (card, index) {
      var imageSrc = card.querySelector(".post-img").src;
      var caption = card.querySelector(".caption").innerText;
      saveCardContent(imageSrc, caption);
    });
  
    // Log the card content array
    console.log("Card Content:", cardContent);
  
    // Function to handle "View Anyway" button click
    function handleViewAnywayButtonClick(event) {
      // Find the closest parent "card" div
      var card = event.target.closest(".card");
  
      // Add the "good-post" class to the card
      if (card) {
        card.classList.add("good-post");
      }
    }
  
    // Attach click event to "View Anyway" buttons
    var viewAnywayButtons = document.querySelectorAll(".btn-danger");
    viewAnywayButtons.forEach(function (button) {
      button.addEventListener("click", handleViewAnywayButtonClick);
    });
  
    // Toggle visibility of new post form
    var addNewPostButton = document.getElementById("addNewPostButton");
    var newPostFormContainer = document.getElementById("newPostFormContainer");
  
    addNewPostButton.addEventListener("click", function () {
      newPostFormContainer.style.display = newPostFormContainer.style.display === "none" ? "block" : "none";
    });
  
    // Function to add a new post
    function addNewPost() {
      var imageInput = document.getElementById("imageInput");
      var captionInput = document.getElementById("captionInput");
  
      // Get the container for posts
      var postsContainer = document.querySelector(".posts .container");
  
      // Create a new card div
      var newCard = document.createElement("div");
      newCard.className = "card";
  
      // Card Header with User Information
      var cardHeader = document.createElement("div");
      cardHeader.className = "card-header bg-white";
      cardHeader.innerHTML =
        '<img src="img/no-profile.webp" alt="Profile Picture" class="rounded-circle profile"> <span class="ml-2 font-weight-bold">@username</span>';
  
      // Card Body with Post Image
      var cardBody = document.createElement("div");
      cardBody.className = "card-body p-0";
      var postImage = document.createElement("img");
      postImage.src = imageInput.value;
      postImage.alt = "Post Image";
      postImage.className = "img-fluid post-img";
      cardBody.appendChild(postImage);
  
      // Card Footer with Like and Comment Icons
      var cardFooter = document.createElement("div");
      cardFooter.className = "card-footer bg-white";
      cardFooter.innerHTML = `
      <div class="d-flex">
        <div>
          <i class="far fa-heart"></i>
          <span class="ml-1"><svg class="like-icon" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.0002C10.2006 3.90318 7.19379 3.25513 4.93923 5.17539C2.68467 7.09565 2.36734 10.3063 4.13777 12.5774C5.6099 14.4656 10.0644 18.4481 11.5235 19.7371C11.6867 19.8813 11.8689 20.0286 12.0658 20.1777C12.1625 20.2449 12.2678 20.3183 12.3799 20.3962C12.7921 20.6967 13.2079 20.6967 13.6201 20.3962C13.7322 20.3183 13.8375 20.2449 13.9342 20.1777C14.1311 20.0286 14.3133 19.8813 14.4765 19.7371C15.9356 18.4481 20.3901 14.4656 21.8622 12.5774C23.6327 10.3063 23.3153 7.09565 21.0608 5.17539C18.8062 3.25513 15.7994 3.90318 14 6.0002V8.3638H9V6.0002ZM9 9.3638H15V19.3638H9V9.3638ZM8 9.3638H7V19.3638H8V9.3638ZM16
            </path>
          </svg></span>
        </div>
        <div>
          <i class="far fa-comment"></i>
          <span class="ml-1"><svg class="comment-icon" fill="none" viewBox="0 -.5 25 25" xmlns="http://www.w3.org/2000/svg">
              <path d="m5.5 12c-1.2e-4 2.613 1.4551 5.0085 3.7741 6.2127 2.319 1.2042 5.1156 1.0165 7.2529-0.4867l2.973 0.274v-6c0-3.866-3.134-7-7-7-3.866 0-7 3.134-7 7z" clip-rule="evenodd" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
              <path d="m9.5 13.25c-0.41421 0-0.75 0.3358-0.75 0.75s0.33579 0.75 0.75 0.75v-1.5zm4 1.5c0.4142 0 0.75-0.3358 0.75-0.75s-0.3358-0.75-0.75-0.75v1.5zm-4-4.5c-0.41421 0-0.75 0.3358-0.75 0.75s0.33579 0.75 0.75 0.75v-1.5zm6 1.5c0.4142 0 0.75-0.3358 0.75-0.75s-0.3358-0.75-0.75-0.75v1.5zm-6 3h4v-1.5h-4v1.5zm0-3h6v-1.5h-6v1.5z" fill="#000"/>
            </svg></span>
        </div>
      </div>
    `;
      // Create caption
      var captionElement = document.createElement("div");
      captionElement.className = "caption";
      var captionText = document.createElement("p");
      captionText.innerText = captionInput.value; // Use caption input value
      captionElement.appendChild(captionText);
  
      // Append elements to the post card
      newCard.appendChild(cardHeader);
      newCard.appendChild(cardBody);
      newCard.appendChild(cardFooter);
      cardFooter.appendChild(captionElement);
  
      // Insert the new card at the top
      postsContainer.insertBefore(newCard, postsContainer.firstChild);
    }
  
    // Handle new post form submission
    var postForm = document.getElementById("post-form");
  
    postForm.addEventListener("submit", function (event) {
      event.preventDefault();
      addNewPost();
    });
  });
  