const Blog = async({params}) => {
  return (
    <div>
      <h1 className="text-green-500 text-3xl">Blog {params.blogID}</h1>
    </div>
  )
}

export default Blog