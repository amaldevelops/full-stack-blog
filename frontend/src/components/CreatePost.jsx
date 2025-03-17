function CreatePost() {
  return (
    <div>
      <h1>Create Post</h1>
      <form>
        <label htmlFor="postTitle">Post Title: </label>
        <br />
        <textarea id="postTitle" name="postTitle" cols="20"></textarea>
        <br />
        <label htmlFor="postContent">Post Content:</label>
        <br />
        <textarea
          id="postContent"
          name="postContent"
          rows="10"
          cols="20"
        ></textarea>
        <br />
        <label htmlFor="authorName">Author Name: </label>
        <input id="authorName" value="Amal"></input>
        <br />
        <button type="button">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
