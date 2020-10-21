import React, { Component, ChangeEvent } from 'react';

export type FormComponentProps<T extends object> = {
  form: T;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
  getValue: (controlName: keyof T) => any;
};

export function withForm<T extends object>(
  TheComponent: Function,
  initialForm: T,
) {
  return class FormComponent extends Component<{ [x: string]: any }, T> {
    state = initialForm as T;

    controls: { [x: string]: string } = {};

    change = (e: ChangeEvent<HTMLInputElement>) => {
      this.controls[e.target.name] = e.target.type;

      this.setState({
        [e.target.name]:
          e.target.type === 'number'
            ? e.target.value === ''
              ? NaN
              : Number(e.target.value)
            : e.target.value,
      } as T);
    };

    resetForm = () => {
      this.setState({});
    };

    getValue = (controlName: keyof T) => {
      if (this.state[controlName] == null) {
        return '';
      }

      if (
        this.controls[controlName as string] === 'number' &&
        isNaN(Number(this.state[controlName]))
      ) {
        return '';
      }

      return this.state[controlName];
    };

    render() {
      const formProps: FormComponentProps<T> = {
        form: this.state,
        change: this.change,
        resetForm: this.resetForm,
        getValue: this.getValue,
      };

      return <TheComponent {...this.props} {...formProps} />;
    }
  };
}
