import s from './MyPosts.module.css'
import React from 'react';
import Post from './Post/Post'
import {addPostActionCreator,updateNewPostTextActionCreator } from '../../../redux/profile-reducer'


const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount} />)
  const newPostElement = React.createRef()

  const addPost = () => {
    props.dispatch(addPostActionCreator())
  }
  const onPostChange = () => {
    const text = newPostElement.current.value 
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={ addPost } >Add</button>
      </div>
      <div className={s.post}>
        {postsElements}
      </div>
    </div>

  )
}

export default MyPosts