import React from 'react';
import GameView from './GameView.jsx';
import Chat from './Chat.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("ws at App", this.props.ws);
  }

  render() {
    return (
      <div className="app">
        App Component
        <GameView ws={ this.props.ws }/>
        <Chat ws={ this.props.ws }/>
      </div>
    )
  }
}

export default App;