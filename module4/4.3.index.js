// console.log ("hello");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


/** Display Posts in console */

const loadPosts = () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    fetch (url)
        .then (res => res.json ())
        // .then (data => console.log (data))
        .then (data => displayPosts (data))
}

const displayPosts = (posts) => {
    // console.log (posts);
    // for (let i = 0; i < posts.length; i++) {
    //     console.log (posts [i]);
    // }

    // for (let post of posts) {
    //     console.log (post);
    // }
    const postContainer = document.getElementById ("post-container");
    postContainer.innerText = "";

    // posts.forEach(post => {
    //     // console.log (post);
    //     // console.log (post.title);
    //     const postLi = document.createElement ("li");
    //     postLi.innerText = post.title;
    //     // console.log (postLi);
    //     postContainer.appendChild (postLi);
        
    // });

    posts.forEach(post => {
        console.log (post);
        const postCard = document.createElement ("div");
        postCard.innerHTML = `
            <div class="post-card">
                <h4>${post.title}</h4>
                <p>${post.body}</p>
            </div>
        `
        postContainer.appendChild (postCard);
    });
}

// loadPosts ();