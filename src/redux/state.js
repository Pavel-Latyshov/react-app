import sidebarReducer from "./sidebar-reducer"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"

const store = {
    _state: {
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state has been changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }

}

export default store