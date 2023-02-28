import React from 'react'
import {ChatEngine} from 'react-chat-engine'
// import '../Public/Public.css'
const Public = () => {
  return (
    <div style={{ marginTop:'50px' }}>
  <ChatEngine
   height="100vh"
   projectID="2908cefb-f853-471a-a7ba-ee5861afadee"
   userName="admin"
   userSecret="admin123"
   />   
   </div>
  )
}

export default Public
