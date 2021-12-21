// console.log("hello")

function likePost(postId) {
    var likes = document.querySelector("#"+postId)
    likes.innerText = parseInt(likes.innerText,10) + 1
}