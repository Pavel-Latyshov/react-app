const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            return state
        case 'SEND-MESSAGE':
            const body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ id: 6, message: body })
            return state
        default: return state
    }
}
export default dialogsReducer

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: text })
