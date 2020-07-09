import React from 'react';
import DefaultButton from './component/button/DefaultButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => {this.handleClick()}}>クリック</button>
        <DefaultButton></DefaultButton>
      </div>
    );
  }
}
export default App;
