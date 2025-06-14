let mainText = document.getElementById('mainText')
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || []
let userDisplayName = JSON.parse(localStorage.getItem('displayName')) || []

if (currentUser) {
    mainText.innerHTML = `${currentUser.userName}`
}

function logOut() {
    let confirmLogOut = confirm('Are you sure you want to log out? You’ll have to sign in again to continue')
    if (confirmLogOut) {
        window.location.href = 'login.html'
    }
}

let modal = document.getElementsByClassName('bs-modal')
let successfulPosts = []

function addPost() {
    let userPost = document.getElementById('userPost');
    let centerTexts = document.getElementById('centerTexts')
    let postText = userPost.value.trim();

    document.querySelector(".posts-container").innerHTML += `
        <div class="post" id="post">

            <div class="profile-photo-holder">
                <img class="profile-photo-post"
                     src="https://pbs.twimg.com/profile_images/1728846511327391744/o0m4cspY_normal.jpg" alt="">
            </div>

            <div class="post-ii">
                <p class="post-user">${userDisplayName}@${currentUser.userName}</p>
                <p class="post-text">${userPost.value.trim()}</p>

                <button class="like-buttons" tabindex="0" onclick="toggleLikes(this)">
                    <i class="fa-regular fa-heart heart-i" style="color: #181818; display: block;"></i>
                    <i class="fa-solid fa-heart heart-ii" style="color: #181818; display: none;"></i>
                </button>

                <button class="bookmark-buttons" tabindex="0" onclick="toggleBookmark(this)">
                    <i class="fa-regular fa-bookmark bookmark-i" style="display:block;"></i>
                    <i class="fa-solid fa-bookmark bookmark-ii" style="display:none;"></i>
                </button>

                <i class="fa-solid fa-trash" onclick=deletePost()></i>
            </div>
        </div>`



    if (userPost !== '') {
        centerTexts.style.display = "none"
    } else {
        centerTexts.style.display = "block"
    }

    userPost.value = ""
    alert('Post Sent Successfully')
    successfulPosts.push(postText);

}

// function searchPosts() {
//     let input = document.getElementById('searchBar').value.toLowerCase();
//     let container = document.querySelector(".posts-container");

//     container.innerHTML = "";

//     successfulPosts.forEach(text => {
//         if (text.includes(input)) {
//             container.innerHTML += `
//         // <div class="post" id="post">

//         //     <div class="profile-photo-holder">
//         //         <img class="profile-photo-post"
//         //              src="https://pbs.twimg.com/profile_images/1728846511327391744/o0m4cspY_normal.jpg" alt="">
//         //     </div>

//         //     <div class="post-ii">
//         //         <p class="post-user">${userDisplayName}@${currentUser.userName}</p>
//         //         <p class="post-text">${userPost.value.trim()}</p>

//         //         <button class="like-buttons" tabindex="0" onclick="toggleLikes(this)">
//         //             <i class="fa-regular fa-heart heart-i" style="color: #181818; display: block;"></i>
//         //             <i class="fa-solid fa-heart heart-ii" style="color: #181818; display: none;"></i>
//         //         </button>

//         //         <button class="bookmark-buttons" tabindex="0" onclick="toggleBookmark(this)">
//         //             <i class="fa-regular fa-bookmark bookmark-i" style="display:block;"></i>
//         //             <i class="fa-solid fa-bookmark bookmark-ii" style="display:none;"></i>
//         //         </button>

//         //         <i class="fa-solid fa-trash" onclick=deletePost()></i>
//         //     </div>
//         // </div>
//             `;
//         }
//     });
// }

function searchPosts() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let container = document.querySelector(".posts-container");

    
    let matchedPosts = successfulPosts.filter(text => text.toLowerCase().includes(input));

    container.innerHTML = "";
    
    matchedPosts.forEach(text => {
        container.innerHTML += `
            <div class="post" id="post">
                <div class="profile-photo-holder">
                    <img class="profile-photo-post"
                        src="https://pbs.twimg.com/profile_images/1728846511327391744/o0m4cspY_normal.jpg" alt="">
                </div>

                <div class="post-ii">
                    <p class="post-user">${userDisplayName}@${currentUser.userName}</p>
                    <p class="post-text">${text}</p>

                    <button class="like-buttons" tabindex="0" onclick="toggleLikes(this)">
                        <i class="fa-regular fa-heart heart-i" style="color: #181818; display: block;"></i>
                        <i class="fa-solid fa-heart heart-ii" style="color: #181818; display: none;"></i>
                    </button>

                    <button class="bookmark-buttons" tabindex="0" onclick="toggleBookmark(this)">
                        <i class="fa-regular fa-bookmark bookmark-i" style="display:block;"></i>
                        <i class="fa-solid fa-bookmark bookmark-ii" style="display:none;"></i>
                    </button>

                    <i class="fa-solid fa-trash" onclick=deletePost()></i>
                </div>
            </div>
        `;
    });
}


function toggleLikes(button) {
    let hearti = button.querySelector('.heart-i');
    let heartii = button.querySelector('.heart-ii');

    if (hearti.style.display == 'block') {
        hearti.style.display = 'none';
        heartii.style.display = 'block';
    } else {
        hearti.style.display = 'block';
        heartii.style.display = 'none';
    }
}

function toggleBookmark(button) {
    let bookmarki = button.querySelector('.bookmark-i');
    let bookmarkii = button.querySelector('.bookmark-ii');

    if (bookmarki.style.display == 'block') {
        bookmarki.style.display = 'none';
        bookmarkii.style.display = 'block';
    } else {
        bookmarki.style.display = 'block';
        bookmarkii.style.display = 'none';
    }
}



function deletePost() {
    let post = document.getElementById('post')
    let deleteConfirm = confirm("Are you sure you want to delete this post ? This action cannot be undone")
    if (deleteConfirm) {
        post.remove()
    }
}



