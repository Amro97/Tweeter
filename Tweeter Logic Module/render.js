const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            let newPostId = post.id
            $("#posts").append("<div data-id="+ `${newPostId}` + "> <h1>" + post.text + "</h1></div>")
            let newDiv = $("<div></div>")
            $(`div[data-id=${newPostId}]`).append(newDiv)
            for (let comment of post.comments) {
                let newCmtId = comment.id
                $(newDiv).append("<h4 comment-id=" + `${newCmtId}` + ">" + comment.text + "</h4>")
            }
        }
    }
    return { renderPosts: renderPosts }
}



