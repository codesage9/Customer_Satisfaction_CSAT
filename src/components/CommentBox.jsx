function CommentBox({ showComment, setShowComment, comment, setComment }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showComment}
          onChange={(e) => setShowComment(e.target.checked)}
        />
        Enable Comment Box
      </label>

      {showComment && (
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your feedback..."
          style={{ width: "100%", height: "80px", marginTop: "10px" }}
        />
      )}
    </div>
  );
}

export default CommentBox;
