import React from 'react';
import { useImmer } from 'use-immer';
import { Button, TextField, Form as PolarisForm, FormLayout, ColorPicker, HSBAColor } from '@shopify/polaris';

interface State {
  text: string;
  color: HSBAColor;
}

type Props = {
  onSubmit: (data: State) => void;
  defaultData: { text: string; color: HSBAColor };
};

const Form: React.FC<Props> = (props) => {
  const [state, setState] = useImmer<State>(props.defaultData);

  return (
    <PolarisForm onSubmit={() => props.onSubmit(state)}>
      <FormLayout>
        <TextField
          label="Text"
          labelHidden
          value={state.text}
          onChange={(text) => {
            setState((draft) => {
              draft.text = text;
            });
          }}
          multiline={2}
        />

        <ColorPicker
          onChange={(color) => {
            setState((draft) => {
              draft.color = color;
            });
          }}
          color={state.color}
          allowAlpha
          fullWidth
        />

        <Button submit primary fullWidth size="large">
          SUBMIT
        </Button>
      </FormLayout>
    </PolarisForm>
  );
};

export { Form };
