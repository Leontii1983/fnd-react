import PostItem from "./PostItem";


const PostList = ({posts, title, remove}) => {
    if(!posts.length) {
        return(
            <div>
                <h1 style={{textAlign: 'center'}}>Posts not found</h1>
            </div>
        )
    }
    return(
        <div>
        <h1 style={{textAlign: 'center'}}>
            {title}
        </h1>
        {posts.map((post, index) => {
          return <PostItem remove={remove} number={index + 1}  post={post} key={post.id} />
    
        })}
        </div>
    );
}

export default PostList;