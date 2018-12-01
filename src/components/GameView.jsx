import React from 'react';

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yourRPS: null,
      opponentRPS: null,
      verdict: '',
    };

    this.declareRock = this.declareRock.bind(this);
    this.declarePaper = this.declarePaper.bind(this);
    this.declareScissors = this.declareScissors.bind(this);
  }

  componentDidMount() {
    this.props.ws.onmessage = ({data}) => {
      let opponent = JSON.parse(data);
      this.setState({ opponentRPS: opponent.rps });
    };
  }

  declareRock(e) {
    e.preventDefault();
    this.setState({yourRPS: 1});
    this.props.ws.send(JSON.stringify({ from: 'me', rps: 1}));
  }

  declarePaper(e) {
    e.preventDefault();
    this.setState({yourRPS: 2});
    this.props.ws.send(JSON.stringify({ from: 'me', rps: 2}));
  }

  declareScissors(e) {
    e.preventDefault();
    this.setState({yourRPS: 3});
    console.log(this.state.yourRPS);
    this.props.ws.send(JSON.stringify({ from: 'me', rps: 3}));
  }

  render() {
    return (
      <div id="gameView">
        <button onClick={ this.declareRock }>Rock</button>
        <button onClick={ this.declarePaper }>Paper</button>
        <button onClick={ this.declareScissors }>Scissors</button>
        <div id="you">You chose: { this.state.yourRPS }</div>
        <div id="them">Opponent chose: { this.state.opponentRPS }</div>
      </div>
    )
  }
}

export default GameView;

//* x % 3 + 1