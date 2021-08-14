import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    const state = props.store.getState().dialogsPage

    const sendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs 
        updateNewMessageBody={onNewMessageChange} 
        sendMessage={sendMessageClick}
        dialogsPage={state}
         />
    )
}

export default DialogsContainer