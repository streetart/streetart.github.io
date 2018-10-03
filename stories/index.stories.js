import React from 'react';

import { setAddon, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import someMarkdownText from './someMarkdownText.md';
import JSXAddon from 'storybook-addon-jsx';
setAddon(JSXAddon);
import { Button, Welcome } from '@storybook/react/demo';
import BaseButton from "./src/components/BaseButton";


const Test = ({ fontSize = '16px', fontFamily = 'Arial', align = 'left', color = 'red', children }) => (
    <div style={{ color, fontFamily, fontSize, textAlign: align }}>
        {children}
    </div>
);


storiesOf('test', module)
    .addWithJSX('Paris', () => (
        <Test fontSize={45} fontFamily="Roboto" align="center" color="#CAF200">
            Hello
        </Test>
    ))
    .addWithJSX('Orleans', () => <Test color="#236544">Hello</Test>);

storiesOf('test 2', module).addWithJSX('Paris', () => (
    <div color="#333">test</div>
));

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('BaseButton', module)

    .add('default button', () => <BaseButton type="button">Default button</BaseButton>, { notes: { markdown: someMarkdownText } });
