import React from 'react';
import ChatMessages from './ChatMessages.jsx';

class ChatView extends React.Component {
  constructor(props) {
    super(props);
    this.displayedMessages = [];
    this.state = {
      input: '',
      message: {},
      displayedMessages: this.displayedMessages,
    };

    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.handleMessageSubmit = this. handleMessageSubmit.bind(this);
  }

  componentDidMount() {
    this.props.ws.onopen = () => this.props.ws.send(JSON.stringify('websocket is open on client side, chat away'));
    this.props.ws.onmessage = ({data}) => {
      let message = JSON.parse(data);
      this.setState({ message });
      this.displayedMessages.push(message);
      this.setState({ displayedMessages: this.displayedMessages });
    };
  }

  handleMessageInput(e) {
    this.setState({ input: e.target.value });
  }

  handleMessageSubmit(e) {
    let message = {
      username: 'You',
      text: this.state.input,
      room: 'some room',
    };
    this.props.ws.send(JSON.stringify(message));
    document.getElementById('inputField').value = '';
    e.preventDefault();
  }

  render() {
    return (
      <div id="chat">
        Chat is rendered...
        { this.state.displayedMessages.map(msg => <ChatMessages message={ msg }/>) }
        <form onSubmit={ this.handleMessageSubmit }>
          <input id="inputField" type="text" value={ this.state.value } onKeyUp={ this.handleMessageInput } />
          <input type="submit" value="send" />
        </form>
      </div>
    );
  }
}

export default ChatView;