import BlogPost from "./BlogPost"

const BlogPosts = ({ blogPosts }) => {
  return (
    <div>
        {blogPosts.map(blogPost => <BlogPost key={blogPost.id} blogPost={blogPost}/>)}
    </div>
  )
}

export default BlogPosts