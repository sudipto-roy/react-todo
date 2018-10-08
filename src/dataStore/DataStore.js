import React from "react";

const { Provider, Consumer } = React.createContext();

export class DataProvider extends React.Component {
  state = {};

  componentWillMount() {
    const { state } = this.props;
    this.setState({ ...state });
  }

  getStoreState = () => {
    return this.state;
  };

  setStoreState = (newState, callback)  => {
    this.setState({ ...newState }, function () {
      if(callback && typeof callback === 'function') {
        callback();
      }
    });
  };

  render() {
    return (
      <Provider
        value={{
          getStoreState: this.getStoreState,
          setStoreState: this.setStoreState
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export const withStore = Component => {
  const ComponentWithStore = props => {
    return (
      <Consumer>
          {store => <Component {...props} store={store} />}
      </Consumer>
    );
  };
  return ComponentWithStore;
};
