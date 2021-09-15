const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            const stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy
        }
        case 'SEND-MESSAGE': {
            const stateCopy = {...state}
            const body = stateCopy.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push({ id: 6, message: body })
            return stateCopy
        }
        default: return state
    }
}
export default dialogsReducer

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: text })
