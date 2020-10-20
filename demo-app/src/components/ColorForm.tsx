import React, { Component, ChangeEvent } from "react";

export type ColorFormProps = {};

export type ColorFormState = {
  name: string;
  hexcode: string;
};

export class ColorForm extends Component<ColorFormProps, ColorFormState> {
  // class property
  state = {
    name: "",
    hexcode: "",
  };

  // constructor(props: ColorFormProps) {
  //   super(props);

  //   // the state property is special property for react components
  //   this.state = {
  //     name: "",
  //     hexcode: "",
  //   };

  //   // this.change = this.change.bind(this);
  // }

  // class arrow function
  change = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      // evaluate the expression in the square braces, and that will
      // be the name of the property which will be updated
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    } as Pick<ColorFormState, keyof ColorFormState>);
  };

  render() {
    console.log(this.state);

    return (
      <form>
        <div>
          {/* React.createElement('label', { htmlFor: 'name-input' }) */}
          <label htmlFor="name-input">Name:</label>
          <input
            type="text"
            id="name-input"
            name="name"
            value={this.state.name}
            onChange={this.change}
          />
        </div>
        <div>
          <label htmlFor="hexcode-input">Hexcode:</label>
          <input
            type="text"
            id="hexcode-input"
            name="hexcode"
            value={this.state.hexcode}
            onChange={this.change}
          />
        </div>
        <button type="button">Add Color</button>
      </form>
    );
  }
}

console.dir(ColorForm);
