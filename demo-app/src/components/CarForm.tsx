import React, { Component, ChangeEvent } from "react";

export type CarFormProps = {};

export type CarFormState = {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
};

export class CarForm extends Component<CarFormProps, CarFormState> {
  state = {
    make: "",
    model: "",
    year: 1900,
    color: "",
    price: 0,
  };

  // class arrow function
  change = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      // evaluate the expression in the square braces, and that will
      // be the name of the property which will be updated
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    } as Pick<CarFormState, keyof CarFormState>);
  };

  render() {
    console.log(this.state);

    return (
      <form>
        <div>
          <label htmlFor="make-input">Make:</label>
          <input
            type="text"
            id="make-input"
            name="make"
            value={this.state.make}
            onChange={this.change}
          />
        </div>
        <div>
          <label htmlFor="model-input">Model:</label>
          <input
            type="text"
            id="model-input"
            name="model"
            value={this.state.model}
            onChange={this.change}
          />
        </div>
        <div>
          <label htmlFor="year-input">Year:</label>
          <input
            type="number"
            id="year-input"
            name="year"
            value={this.state.year}
            onChange={this.change}
          />
        </div>
        <div>
          <label htmlFor="color-input">Color:</label>
          <input
            type="text"
            id="color-input"
            name="color"
            value={this.state.color}
            onChange={this.change}
          />
        </div>
        <div>
          <label htmlFor="price-input">Price:</label>
          <input
            type="number"
            id="price-input"
            name="price"
            value={this.state.price}
            onChange={this.change}
          />
        </div>
        <button type="button">Add Car</button>
      </form>
    );
  }
}

console.dir(CarForm);
