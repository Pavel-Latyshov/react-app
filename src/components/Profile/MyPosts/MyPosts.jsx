import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add</button>
      <div className={s.post}>
        <Post message='Hi, sup!' like="24"/>
        <Post message="It's my first post" like="5"/>
      </div>

    </div>

  )
}

export default MyPosts