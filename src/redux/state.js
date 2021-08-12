const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, sup!', likesCount: 24 },
            { id: 1, message: "It's my first post", likesCount: 5 },
            { id: 1, message: "It's my first post", likesCount: 5 },
            { id: 1, message: "It's my first post", likesCount: 5 },
            { id: 1, message: "It's my first post", likesCount: 5 },
        ],
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Vasya' },
            { id: 3, name: 'petya' },
            { id: 4, name: 'shish' },
            { id: 5, name: 'bum' },
            { id: 6, name: 'ih' },
            { id: 7, name: 'aaaaaa' },
        ],
    },
    messagesPage: {
        messages: [
            { id: 1, message: 'hi' },
            { id: 2, message: 'sup' },
            { id: 3, message: 'yo' },
            { id: 4, message: 'yo' },
            { id: 5, message: 'yo' },
        ]
    }
}

export default state