import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../store-context/StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    // const state = props.store.getState().dialogsPage

    // const sendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator())
    // }
    // const onNewMessageChange = (body) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(body))
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    // const state = store.getState().dialogsPage

                    const sendMessageClick = () => {
                        store.dispatch(sendMessageCreator())
                    }
                    const onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body))
                    }

                    return <Dialogs
                        updateNewMessageBody={onNewMessageChange}
                        sendMessage={sendMessageClick}
                        dialogsPage={store.getState().dialogsPage}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer