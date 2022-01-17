import CustomButton from "./UI/button/CustomButton";


const PostItem = ({post, number, remove}) => {
    return(
        <div className='post'>
        <div className ="post-content">
          <strong>{number}. {post.title}</strong>
          <div>{post.body}</div>
        </div>
        <div className='post-button'>
          <CustomButton onClick={()=> remove(post)}>Delete</CustomButton>
        </div>
  
      </div>
    );
}

export default PostItem;