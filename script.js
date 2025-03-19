// Select elements
let menuIcon = document.querySelector('.menu-icon');
let sidebar = document.querySelector('.sidebar');
let container = document.querySelector('.container');

// Toggle sidebar when menu icon is clicked
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
});

// Handle search functionality (basic)
let searchBox = document.querySelector('.search-box input');
let searchBtn = document.querySelector('.search-box img');

searchBtn.addEventListener('click', () => {
    let query = searchBox.value.trim();
    if (query !== '') {
        alert(`Searching for: ${query}`); // Replace with actual search function
    }
});

// Handle like & dislike buttons (if applicable)
let likeBtn = document.querySelector('.like-btn');
let dislikeBtn = document.querySelector('.dislike-btn');

if (likeBtn) {
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('liked');
        dislikeBtn.classList.remove('disliked'); // Remove dislike if liked
    });
}

if (dislikeBtn) {
    dislikeBtn.addEventListener('click', () => {
        dislikeBtn.classList.toggle('disliked');
        likeBtn.classList.remove('liked'); // Remove like if disliked
    });
}

// Handle comment posting
let commentInput = document.querySelector('.add-comments input');
let commentBtn = document.querySelector('.add-comments button');
let commentsSection = document.querySelector('.comments-section');

if (commentBtn) {
    commentBtn.addEventListener('click', () => {
        let commentText = commentInput.value.trim();
        if (commentText !== '') {
            let newComment = document.createElement('div');
            newComment.classList.add('old-comment');
            newComment.innerHTML = `
                <img src="user-avatar.png" alt="User">
                <div>
                    <h3>Your Name <span>just now</span></h3>
                    <p>${commentText}</p>
                </div>
            `;
            commentsSection.appendChild(newComment);
            commentInput.value = ''; // Clear input
        }
    });
}

// Handle video list click (for navigation)
let videoThumbnails = document.querySelectorAll('.vid-list a');

videoThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (event) => {
        event.preventDefault();
        let videoUrl = thumbnail.getAttribute('href');
        window.location.href = videoUrl; // Navigate to video page
    });
});
