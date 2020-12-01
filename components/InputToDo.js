import React from 'react';
import {Block, Input, Button} from 'galio-framework';

class Todo extends React.Component {
  render() {
    return (
      <Block row>
        <Block flex={8}>
          <Input
            multiline
            placeholder="Décriver votre demande ..."
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
            onlyIcon
            icon="rightcircle"
            iconFamily="antdesign"
            iconSize={30}
            color="primary"
            iconColor="#fff"
            style={{width: 40, height: 40}}
            onPress={() => this.props.onAddToDo()}></Button>
        </Block>
      </Block>
    );
  }
}

export default Todo;
