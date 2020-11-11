import React from 'react';
import {Block, Text} from 'galio-framework';

class Todo extends React.Component {
  render() {
    return (
      <Block card middle row>
        <Block>
          <Text h3>Heading 3</Text>
          <Text p>Paragraph</Text>
        </Block>
      </Block>
    );
  }
}

export default Todo;
