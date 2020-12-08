import React from 'react';
import {Block, Input, Button} from 'galio-framework';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      todo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(text, stateToChange) {
    this.setState({[stateToChange]: text});
  }

  handleSubmit() {
    this.props.onAddToDo({title: this.state.title, todo: this.state.todo});
    this.setState({todo: '', title: ''});
  }

  render() {
    return (
      <Block row>
        <Block flex={8}>
          <Input
            placeholder="Ton titre ici"
            value={this.state.title}
            onChangeText={(text) => this.handleChange(text, 'title')}
          />

          <Input
            onChangeText={(text) => this.handleChange(text, 'todo')}
            multiline
            placeholder="Quelle est votre tâche ?"
            value={this.state.todo}
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              textAlignVertical: 'top',
              height: 100,
            }}
          />
        </Block>
        <Block flex={2}>
          <Button
            disabled={
              this.state.title.length > 0 && this.state.todo.length > 0
                ? false
                : true
            }
            onlyIcon
            icon="rightcircle"
            iconFamily="antdesign"
            iconSize={30}
            color={
              this.state.title.length > 0 && this.state.todo.length > 0
                ? 'primary'
                : 'lightgrey'
            }
            iconColor="#fff"
            style={{width: 40, height: 40}}
            onPress={() => this.handleSubmit()}></Button>
        </Block>
      </Block>
    );
  }
}

export default Todo;
