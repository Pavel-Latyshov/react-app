import s from './Post.module.css'
const Post = (props) => {

  return (
    <div className={s.item}>
      <div>
      <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="#" />
      </div>
      {props.message}
      <div>
      <span>Like {props.like}</span>
      </div>
    </div>
  )
}

export default Post