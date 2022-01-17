import {useState} from 'react';
import CustomButton from './UI/button/CustomButton';
import CustomInput from './UI/Input/CustomInput';

const Form = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
       //  console.log(bodyInputRef.current.value);
       const newPost = {
           ...post, id: Date.now()
       }
        create(newPost);
        setPost({title: '', body: ''});
      }

    return(
        <form>
        {/*Controlled component*/}
        <CustomInput 
          value={post.title }
          onChange={e => setPost({ ...post, title: e.target.value })}
          type="text" 
          placeholder="Post title" 
          />
        
        {/*Uncontrolled component and again controlled :)*/}
        <CustomInput
          /*ref={bodyInputRef}*/ 
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text" 
          placeholder="Post description" 
        />
  
        <CustomButton onClick={addNewPost}>Create post</CustomButton>
      </form>
    );
}

export default Form;