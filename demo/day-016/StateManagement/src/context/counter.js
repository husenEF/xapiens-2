import React, {createContext, PureComponent, useContext} from 'react';

const CounterContext = createContext();

class CounterProvider extends PureComponent {
  state = {
    number: 0,
  };

  inc() {
    this.setState({number: this.state.number + 1});
  }

  dec() {
    this.setState({number: this.state.number - 1});
  }
  render() {
    const {children} = this.props;
    const {number} = this.state;

    const data = {
      number,
      increment: () => this.inc(),
      decrement: () => this.dec(),
    };
    return (
      <CounterContext.Provider value={data}>{children}</CounterContext.Provider>
    );
  }
}

const CounterConsumer = () => useContext(CounterContext);

export {CounterContext, CounterConsumer};
export default CounterProvider;
