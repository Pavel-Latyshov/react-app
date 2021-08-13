import { renderEntireTree } from "../render"

const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, sup!', likesCount: 24 },
            { id: 1, message: "It's my first post", likesCount: 5 },
            { id: 1, message: "It's my first post", likesCount: 5 },
            { id: 1, message: "It's my first post", likesCount: 5 },
            { id: 1, message: "It's my first post", likesCount: 5 },
        ],
        newPostText: 'text'
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Vasya' },
            { id: 3, name: 'petya' },
            { id: 4, name: 'shish' },
            { id: 5, name: 'bum' },
            { id: 6, name: 'ih' },
            { id: 7, name: 'aaaaaa' },
        ],
        messages: [
            { id: 1, message: 'hi' },
            { id: 2, message: 'sup' },
            { id: 3, message: 'yo' },
            { id: 4, message: 'yo' },
            { id: 5, message: 'yo' },
        ]
    }
}

export const addPost = () => {
    debugger
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}



export default state