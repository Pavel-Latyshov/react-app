const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
    posts: [
        { id: 1, message: 'Hi, sup!', likesCount: 24 },
        { id: 1, message: "It's my first post", likesCount: 5 },
        { id: 1, message: "It's my first post", likesCount: 5 },
        { id: 1, message: "It's my first post", likesCount: 5 },
        { id: 1, message: "It's my first post", likesCount: 5 },
    ],
    newPostText: 'text'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
        default: return state
    }
}

export default profileReducer

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })
