import React from 'react';
import {Block, Text, Button} from 'galio-framework';

class Todo extends React.Component {
  render() {
    return (
      <Block card middle row style={{height: 200, marginBottom: 8}}>
        <Block flex={5}>
          <Text
            h3
            style={{
              textDecorationLine: this.props.isDone ? 'line-through' : 'none',
            }}>
            {this.props.title}
          </Text>
          <Text
            p
            style={{
              textDecorationLine: this.props.isDone ? 'line-through' : 'none',
            }}>
            {this.props.text}
          </Text>
        </Block>
        <Block flex={1}>
          <Button
            onlyIcon
            icon="check"
            iconFamily="antdesign"
            iconSize={30}
            color="success"
            iconColor="#fff"
            style={{width: 40, height: 40}}
            onPress={() => this.props.onDoneToDo()}></Button>
          <Button
            onlyIcon
            icon="close"
            iconFamily="antdesign"
            iconSize={30}
            iconColor="#fff"
            style={{width: 40, height: 40}}
            onPress={() => this.props.onDeleteToDo()}></Button>
        </Block>
      </Block>
    );
  }
}

export default Todo;
