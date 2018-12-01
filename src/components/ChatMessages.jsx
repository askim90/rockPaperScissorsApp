import React from 'react';

const ChatMessages = (props) => (
  <div id="message">
    {typeof props.message === 'object' ? 
      `${props.message.username}: ${props.message.text}` : props.message}
  </div>
);

export default ChatMessages;