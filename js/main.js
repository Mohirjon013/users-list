// users list render start
let ElUsersList = document.querySelector(".users-list")

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    renderUsers(data)
})

function renderUsers(arr){
    // ElUsersList.innerHTML = null
    
    arr.forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = "p-3 bg-slate-300 rounded-lg text-black"
        elItem.innerHTML = `
            <p><strong>Id:</strong> ${item.id}</p>
            <p><strong>Name:</strong> ${item.name}</p>
            <p><strong>Username:</strong> ${item.username}</p>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Phone number:</strong> ${item.phone}</p>
            <button onclick ="handleUsersPostShow(${item.id})" class="bg-green-600 text-white font-bold border-none w-full p-1 rounded-lg mt-5">Show Posts</button>
        `
        ElUsersList.appendChild(elItem)
    });
}
// users list render start




// Post part start
let elPostsList = document.querySelector(".posts-list")
function handleUsersPostShow(id){
    elCommentsList.innerHTML =null
    elPostsList.textContent = "Loading...."
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.json()).then(data => {
        setTimeout(() => {
            renderPost(data);

        }, 500);
    })
}

function renderPost(arr){
    elPostsList.innerHTML =null
    arr.forEach(item => {
        
        let elItem = document.createElement("li")
        elItem.className = "p-3 bg-slate-300 rounded-lg text-black"
        elItem.innerHTML = `
            <p><strong>Id:</strong> ${item.id}</p>
            <p><strong>User Id:</strong> ${item.userId}</p>
            <p><strong>Title:</strong> ${item.title}</p>
            <p><strong>Body:</strong> ${item.body}</p>
            <button onclick="handlePostsCommentShow(${item.id})"  class="bg-green-600 text-white font-bold border-none w-full p-1 rounded-lg mt-5">Show Comments</button>
        `
        elPostsList.appendChild(elItem)
    });
}
// Post part start

// Comment part start
let elCommentsList = document.querySelector(".comments-list")
function handlePostsCommentShow(id){
    elCommentsList.textContent = "Loading..."
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(res => res.json()).then(data => {
        setTimeout(() => {
            renderComment(data)
        }, 500);
    })
}
function renderComment(arr){
    elCommentsList.innerHTML =null
    arr.forEach(item => {
        
        let elItem = document.createElement("li")
        elItem.className = "p-3 bg-slate-300 rounded-lg text-black"
        elItem.innerHTML = `
            <p><strong>Id:</strong> ${item.id}</p>
            <p><strong>Name:</strong> ${item.name}</p>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Body:</strong> ${item.body}</p>
            
        `
        elCommentsList.appendChild(elItem)
    });
}

// Comment part end