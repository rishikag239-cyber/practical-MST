import { useState } from "react";

function PostBox() {
  const [content, setContent] = useState("");

  const count = content.length;
  const isOverLimit = count > 100;
  const isEmpty = content.trim() === "";

  const handlePost = () => {
    alert("🎉 Your post has been published!");
    setContent("");
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="avatar">R</div>
        <div>
          <h2>Create a Post ✨</h2>
          <p>Share something with the world</p>
        </div>
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind? 💭"
      />

      <div className="post-footer">
        <span className={isOverLimit ? "counter error" : "counter"}>
          {count} / 100
        </span>

        <button
          disabled={isEmpty || isOverLimit}
          onClick={handlePost}
        >
          🚀 Post
        </button>
      </div>

      {isOverLimit && (
        <p className="limit-message">
          ⚠️ Limit exceeded! Please shorten your post.
        </p>
      )}
    </div>
  );
}

export default PostBox;