const BlogPost = ({ blogPost }) => {
  return (
    <div>
        <h2>{blogPost.title}</h2>
        <img src="#" alt="" />
        <h3></h3>
        <p>{blogPost.post}</p>
    </div>
  )
}

export default BlogPost