import {useState, useRef, useMemo} from 'react';
import PostList from './components/PostList';
import Form from './components/Form';


import './css/App.css';
import PostFilter from './components/PostFilter';
import CustomModal from './components/UI/modal/CustomModal';
import CustomButton from './components/UI/button/CustomButton';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'React', body: 'Description'},
    {id: 2, title: 'JavaScript', body: 'Description 2'},
    {id: 3, title: 'Java', body: 'Description 3'},
    {id: 4, title: 'C#', body: 'Description 4'},
    {id: 5, title: 'Python', body: 'Description 5'}
  ])



  // const [posts2, setPosts2] = useState([
  //   {id: 1, title: 'React', body: 'Description'},
  //   {id: 2, title: 'JavaScript', body: 'Description 2'},
  //   {id: 3, title: 'Java', body: 'Description 3'},
  //   {id: 4, title: 'C#', body: 'Description 4'},
  //   {id: 5, title: 'Python', body: 'Description 5'}
  // ])


  // const bodyInputRef = useRef();
  
  const [filter, setFilter] = useState({query: '', sort: ''});
  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p =>  p.id !== post.id));
  }


  const sortedPosts = useMemo(()=> {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    } 
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(()=> {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));

  }, [filter.query, sortedPosts])

  return (
   

  <div className='App'>
    <CustomButton onClick={()=> setModal(true)} style={{margin: '15px 0'}}>
      Create post
    </CustomButton>

    <CustomModal visible={modal} setVisible={setModal}>
        <Form  create={createPost}/>
    </CustomModal>
    

    <hr style={{margin: '15px 0'}}/>
    <PostFilter filter={filter} setFilter={setFilter} />

    <PostList remove={removePost} posts={sortedAndSearchPosts} title="Posts list"/> 
    
    {/* <PostList posts={posts2} title="Posts list 2"/> */}
    </div>
  );
}

export default App;
