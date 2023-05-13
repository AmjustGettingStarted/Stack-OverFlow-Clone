import React from 'react'
import {ChatEngine} from 'react-chat-engine'
// import '../Public/Public.css'
const Public = () => {
  return (
    <div style={{ marginTop:'50px' }}>
  <ChatEngine
   height="100vh"
   projectID="2d39e73d-5e7c-4417-95dc-2f5d355f3229"
   userName="user1"
   userSecret="user1"
   />    
   </div>
  )
}

export default Public
