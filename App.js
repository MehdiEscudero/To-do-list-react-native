import React from 'react';
import {Block} from 'galio-framework';
import Todo from './components/Todo';
import {StatusBar} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Block style={{marginTop: 40}}>
        <StatusBar hidden></StatusBar>
        <Todo></Todo>
      </Block>
    );
  }
}

export default App;
