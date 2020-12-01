import React from 'react';
import {Block} from 'galio-framework';
import Todo from './components/Todo';
import {ScrollView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import InputToDo from './components/InputToDo';

Icon.loadFont();

class App extends React.Component {
  render() {
    return (
      <Block style={{marginTop: 40}}>
        <StatusBar hidden></StatusBar>
        <ScrollView style={{height: '80%'}}>
          <Todo title="Bonjour" text="sa mère" isDone />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
          <Todo title="Bonjour" text="sa mère" />
        </ScrollView>
        <InputToDo />
      </Block>
    );
  }
}

export default App;
