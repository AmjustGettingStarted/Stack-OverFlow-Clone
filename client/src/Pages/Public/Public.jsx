import React from 'react'
import {ChatEngine} from 'react-chat-engine'
// import '../Public/Public.css'
const Public = () => {
  return (
    <div style={{ marginTop:'50px' }}>
  <ChatEngine
   height="100vh"
   projectID="35d761aa-f108-40fb-9012-006ce3ca397a"
   userName="admin"
   userSecret="admin123"
   />   
   </div>
  )
}

export default Public