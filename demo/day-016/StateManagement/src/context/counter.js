import React, {createContext, PureComponent, useContext} from 'react';

const CounterContext = createContext();

class CounterProvider extends PureComponent {
  state = {
    number: 0,
    idUser: 3,
  };

  inc() {
    this.setState({number: this.state.number + 1});
  }

  dec() {
    this.setState({number: this.state.number - 1});
  }

  render() {
    const {children} = this.props;
    const {number, idUser} = this.state;

    const data = {
      number,
      idUser,
      increment: () => this.inc(),
      decrement: () => this.dec(),
    };
    return (
      <CounterContext.Provider value={data}>{children}</CounterContext.Provider>
    );
  }
}

const CounterConsumer = () => {
  const value = useContext(CounterContext);
  return value;
};

//const dataCounter = CounterConsumer();

export {CounterContext, CounterConsumer};
export default CounterProvider;
