import CustomInput from "./UI/Input/CustomInput";
import CustomSelect from "./UI/select/CustomSelect";

const PostFilter = ({filter, setFilter}) => {
    return(
        <div>
                <CustomInput 
     value={filter.query}
     onChange={e => setFilter({ ...filter, query: e.target.value })}
     placeholder="Search..."
    />
    <hr style={{margin: '15px 0'}}/>

    <CustomSelect 
      value={filter.sortedPosts}
      onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
      defaultValue="Sort by"
      options={[
        {value: 'title', name: 'By title'},
        {value: 'body', name:'By description'}
      ]}
      />
        </div>
    );
}

export default PostFilter;