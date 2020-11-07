let newCmtId;
let newPostId;

const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            newPostId = post.id
            $("#posts").append("<div class='pcon' data-id="+ `${newPostId}` + "> <h1>" + post.text + "</h1></div>")
            let newDiv = $("<div></div>")
            $(`div[data-id=${newPostId}]`).append(newDiv)
            for (let comment of post.comments) {
                newCmtId = comment.id
                $(newDiv).append("<span class='remove' data-id=" + `${newCmtId}` + ">X</span> <span><h4 >" + comment.text + "</h4></span><br>")
            }
            $(newDiv).append("<input type='text' class='Ipt' placeholder='write your comment...' id="+'txt'+`${newPostId}`+"></input>")
            $(newDiv).append("<button class='submitBtn'>Comment</button>")
            $(`div[data-id=${newPostId}]`).append("<button class='deleteBtn'>Delete Post </button> ")
        }
    }
    return { renderPosts: renderPosts }
}


