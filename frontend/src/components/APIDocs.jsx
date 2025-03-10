import NavigationBar from "./NavigationBar";
function APIDocs() {
  return (
    <div>
      <NavigationBar />
      <h1>Welcome to Blog API docs</h1>
      <p>
        Blog API is developed using Restful principles and is designed to be
        used with either one or two front ends. i.e Blog Reader and a Blog
        Writer
      </p>
      <p>
        Output is given as standard JSON so it can be integrated into any front
        end without much effort.
      </p>
      <h2>Reader routes</h2>
      <h3>List all the reader routes</h3>
      <p>
        <strong>HTTP Method : </strong>GET
      </p>
      <p>
        <strong>Route :</strong> /reader
      </p>

      <h3>Get all published posts</h3>
      <p>
        <strong>HTTP Method : </strong>GET
      </p>
      <p>
        <strong>Route : </strong>/reader/posts
      </p>
      <p><strong>Output Format : </strong><code>{`
    "data": [
        {
            "id": 13,
            "blog_post_title": "The Basics of JavaScript",
            "blog_post_content": "JavaScript is a versatile programming language used in web development...",
            "blog_post_publish_status": true,
            "blog_post_publish_timestamp": "2025-02-13T02:47:01.180Z",
            "blog_post_author_id": 10
        },
        {
            "id": 14,
            "blog_post_title": "Understanding Asynchronous Programming",
            "blog_post_content": "Asynchronous programming is essential for handling network requests efficiently...",
            "blog_post_publish_status": true,
            "blog_post_publish_timestamp": "2025-02-13T02:47:01.182Z",
            "blog_post_author_id": 10
        }
    ]`
}
        </code>
        </p>

      <h3>Get posts by ID</h3>
      <p>
        <strong>HTTP Method : </strong>GET
      </p>
      <p>
        <strong>Route : </strong>/reader/posts/:id
      </p>

      <h3>Get Post all Comments</h3>
      <p>
        <strong>HTTP Method : </strong>GET
      </p>
      <p>
        <strong>Route : </strong>/reader/posts/:id/comment
      </p>

      <h3>Create a new comment</h3>
      <p>
        <strong>HTTP Method : </strong>POST
      </p>
      <p>
        <strong>Route : </strong>/reader/posts/comment/:id/create
      </p>

      <h3>Update post comment</h3>
      <p>
        <strong>HTTP Method : </strong>PUT
      </p>
      <p>
        <strong>Route : </strong>/reader/posts/comment/:id/update
      </p>

      <h3>Delete Comment</h3>
      <p>
        <strong>HTTP Method : </strong>DELETE
      </p>
      <p>
        <strong>Route : </strong>/reader/posts/comment/:id/delete
      </p>

      <h2>Writer Routes</h2>

      <h3>List all the writer routes</h3>
      <p>
        <strong>HTTP Method : </strong>GET
      </p>
      <p>
        <strong>Route : </strong>/writer
      </p>

      <h3>Create New Post</h3>
      <p>
        <strong>HTTP Method : </strong>GET
      </p>
      <p>
        <strong>Route : </strong>/writer/post/create
      </p>

      <h3>Save Post as Draft</h3>
      <p>
        <strong>HTTP Method : </strong>GET
      </p>
      <p>
        <strong>Route : </strong>/writer/post/drafts
      </p>

      <h3>Save post as Draft</h3>
      <p>
        <strong>HTTP Method : </strong>POST
      </p>
      <p>
        <strong>Route : </strong>/writer/post/:id/draft
      </p>

      <h3>Save post by ID </h3>
      <p>
        <strong>HTTP Method : </strong>POST
      </p>
      <p>
        <strong>Route : </strong>/writer/post/:id/save
      </p>

      <h3>Edit post by ID</h3>
      <p>
        <strong>HTTP Method : </strong>POST
      </p>
      <p>
        <strong>Route : </strong>/writer/post/:id/edit
      </p>

      <h3>Delete Post by ID </h3>
      <p>
        <strong>HTTP Method : </strong>DELETE
      </p>
      <p>
        <strong>Route : </strong>/writer/post/:id/delete
      </p>

      <h3>Publish post by ID</h3>
      <p>
        <strong>HTTP Method : </strong>POST
      </p>
      <p>
        <strong>Route : </strong>/writer/post/:id/publish
      </p>

      <h3>Unpublish post by ID </h3>
      <p>
        <strong>HTTP Method : </strong>POST
      </p>
      <p>
        <strong>Route : </strong>/writer/post/:id/unpublish
      </p>
    </div>
  );
}
export default APIDocs;
