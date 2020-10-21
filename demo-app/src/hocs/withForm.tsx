import React, { Component, ChangeEvent } from 'react';

export type TheComponentProps = {
  form: any;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
  getValue: (controlName: string) => any;
};

type FormComponentProps = {
  [x: string]: any;
};

type FormComponentState = {
  [x: string]: any;
};

export function withForm(
  TheComponent: Function,
  initialForm: FormComponentState,
) {
  return class FormComponent extends Component<
    FormComponentProps,
    FormComponentState
  > {
    state = initialForm as FormComponentState;

    change = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({
        [e.target.name]: {
          type: e.target.type,
          value:
            e.target.type === 'number'
              ? e.target.value === ''
                ? NaN
                : Number(e.target.value)
              : e.target.value,
        },
      } as Pick<FormComponentState, keyof FormComponentState>);
    };

    resetForm = () => {
      this.setState({});
    };

    getValue = (controlName: string) => {
      // double equals comparison with null, checks for null or undefined

      isNaN(NaN);

      if (this.state[controlName]?.value == null) {
        return '';
      }

      if (
        this.state[controlName].type === 'number' &&
        isNaN(this.state[controlName].value)
      ) {
        return '';
      }

      return this.state[controlName].value;
    };

    // { name: { type, value } } => { name: value }
    getFormData() {
      return Object.keys(this.state).reduce((formData: any, controlName) => {
        formData[controlName] = this.state[controlName].value;
        return formData;
      }, {});
    }

    render() {
      return (
        <TheComponent
          {...this.props}
          form={this.getFormData()}
          change={this.change}
          resetForm={this.resetForm}
          getValue={this.getValue}
        />
      );
    }
  };
}
