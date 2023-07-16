
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) =>{
    return(
        <div style={{height: "100vh"}}>
            <PrettyChatWindow
                 projectId={'YOUR_CHATENGINE_PROJECT_ID'} //Enter you chatengine project id within ''
                 username={props.user.username}
                 secret={props.user.secret}
                 style={{ height: "100% "}}
    />
        </div>
    )
}


  
export default ChatsPage
