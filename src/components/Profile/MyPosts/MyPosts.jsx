import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {
  const postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount} />)
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add</button>
      </div>
      <div className={s.post}>
        {postsElements}
      </div>
    </div>

  )
}

export default MyPosts