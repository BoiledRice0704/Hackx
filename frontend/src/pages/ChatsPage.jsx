// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
// const ChatsPage = (props) =>{
//     const chatProps = useMultiChatLogic('287e0b40-982f-429b-a7f8-cde946157404',props.user.username, props.user.secret)
//     return <div style={{height:"100vh"}}>
//         <MultiChatSocket {...chatProps}/>
//         <MultiChatWindow {...chatProps} style={{height:"100%"}} />
        

//     </div>
// }

// export default ChatsPage
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { useSelector } from 'react-redux';

const ChatsPage = (props) => {
  const user = useSelector((state) => state.counter.user);
  return (
    <div style={{height:"100vh"}}>
    <PrettyChatWindow
    projectId="287e0b40-982f-429b-a7f8-cde946157404"
      username={user.username}
      secret={user.secret}
      style={{ height: '100vh' }}
    />
    </div>
  )
}

export default ChatsPage
