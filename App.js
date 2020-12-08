import icons from '@expo/vector-icons/AntDesign';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Block} from 'galio-framework';
import Todo from './components/Todo';
import {ScrollView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import InputToDo from './components/InputToDo';

Icon.loadFont(icons);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
    };

    this.onAddToDo = this.onAddToDo.bind(this);
    this.onDeleteToDo = this.onDeleteToDo.bind(this);
    this.onDoneToDo = this.onDoneToDo.bind(this);
    this.storeData = this.storeData.bind(this);
  }

  UNSAFE_componentWillMount() {
    AsyncStorage.getItem('@toDoList')
      .then((data) => {
        console.log(data);
        this.setState({toDoList: JSON.parse(data) || []});
      })
      .catch(console.log);
  }

  storeData(data) {
    AsyncStorage.setItem('@toDoList', JSON.stringify(data))
      .then(() => {
        this.setState({toDoList: data});
      })
      .catch(console.log);
  }

  onAddToDo(todo) {
    let array = this.state.toDoList;
    array.push({
      id: new Date(),
      title: todo.title,
      text: todo.todo,
      isDone: false,
    });

    this.storeData(array);
  }

  onDeleteToDo(id) {
    let array = this.state.toDoList.filter((elem) => elem.id !== id);
    this.storeData(array);
  }

  onDoneToDo(id) {
    const elementsIndex = this.state.toDoList.findIndex(
      (element) => element.id == id,
    );
    let newArray = [...this.state.toDoList];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      isDone: !newArray[elementsIndex].isDone,
    };
    this.storeData(newArray);
  }

  render() {
    return (
      <Block style={{marginTop: 40}}>
        <StatusBar hidden></StatusBar>
        <ScrollView style={{height: '80%'}}>
          {this.state.toDoList
            ? this.state.toDoList.map((elem, index) => {
                console.log(elem);
                return (
                  <Todo
                    title={elem.title}
                    text={elem.text}
                    isDone={elem.isDone}
                    key={index}
                    onDoneToDo={() => this.onDoneToDo(elem.id)}
                    onDeleteToDo={() => this.onDeleteToDo(elem.id)}
                  />
                );
              })
            : null}
        </ScrollView>
        <InputToDo onAddToDo={this.onAddToDo} />
      </Block>
    );
  }
}

export default App;
