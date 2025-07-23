const Comments = async({params}) => {
  console.log('Comments for blog ID:', await params.blogID);
  return (
    <div>Comments {params.blogID}</div>
  )
}

export default Comments