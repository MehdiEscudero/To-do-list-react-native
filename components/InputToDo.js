import React from 'react';
import {Block, Input, Button} from 'galio-framework';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      buttonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(text) {
    if (text === '') {
      this.setState({input: text, buttonDisabled: true});
    } else {
      this.setState({input: text, buttonDisabled: false});
    }
  }

  handleSubmit() {
    this.setState({input: '', buttonDisabled: true});
    // this.props.onAddToDo(this.state.input)
  }

  render() {
    return (
      <Block row>
        <Block flex={8}>
          <Input
            onChangeText={(e) => this.handleChange(e)}
            multiline
            placeholder="Quelle est votre tâche ?"
            value={this.state.input}
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
            disabled={this.state.buttonDisabled}
            onlyIcon
            icon="rightcircle"
            iconFamily="antdesign"
            iconSize={30}
            color={this.state.buttonDisabled ? 'lightgrey' : 'primary'}
            iconColor="#fff"
            style={{width: 40, height: 40}}
            onPress={() => this.handleSubmit()}></Button>
        </Block>
      </Block>
    );
  }
}

export default Todo;
