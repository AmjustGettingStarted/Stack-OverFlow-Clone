import React from 'react'
import {ChatEngine} from 'react-chat-engine'
// import '../Public/Public.css'
const Public = () => {
  return (
    <div style={{ marginTop:'50px' }}>
  <ChatEngine
   height="100vh"
   projectID="e8e19e73-fc71-4486-9173-b39e950a3ce9"
   userName="user1"
   userSecret="user1"
   />    
   </div>
  )
}

export default Public
