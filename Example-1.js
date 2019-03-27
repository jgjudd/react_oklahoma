// http://stackoverflow.com/questions/39748517/react-es5-vs-es6

console.clear();


class App extends React.Component {
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      fromChild: ''
    };
  }
  
  handleData(data) {
    this.setState({
      fromChild: data
    });
  }
  
  render() {
    return (
      <div>
        <InputFoo handlerFromParant={this.handleData} /> 
        <h5>Received by parent:<br />{this.state.fromChild}</h5>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
);