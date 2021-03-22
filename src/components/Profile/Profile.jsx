import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"></img>
      </div>
      <div className={s.profile}>
        <div>Ava + description</div>
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile