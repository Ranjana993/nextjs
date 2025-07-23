
const Comment = async ({ params }) => {
  console.log('Comment for blog ID:', await params.blogID, 'and comment ID:', await params.commentID);
  // Assuming you would fetch the comment details here using blogID and commentID
  // For now, just returning a placeholder

  return (
    <div>
      <p className="text-2xl">
        <b>{params.commentID}</b> Comments for Blog <b>{params.blogID}</b>
      </p>
      <p>This is a placeholder for the comment details.</p>

    </div>
  )
}

export default Comment