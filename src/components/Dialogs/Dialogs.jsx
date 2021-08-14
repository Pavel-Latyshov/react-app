import { NavLink } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    const state = props.store.getState().dialogsPage

    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />
    )
    const messagesElements = state.messages.map(m => <Message message={m.message} />
    )
    const newMessageBody = state.newMessageBody

    const sendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e) => {
        const body = e.target.value 
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                {messagesElements}
                </div>
                <div>
                    <div><textarea onChange={ onNewMessageChange } value={newMessageBody} placeholder="text message" ></textarea></div>
                    <div><button onClick={ sendMessageClick } >send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs