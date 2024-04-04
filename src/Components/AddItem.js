import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: "",
    };
  }
  render() {
    return (
      <div className="row mb-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.add(
              this.state.productName,
              Number(this.state.productPrice)
            );
          }}
        >
          <div className="mb-3 col-4">
            <label htmlFor="InputName" className="form-label col">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="InputName"
              name="productName"
              onChange={(e) => {
                this.setState({ productName: e.currentTarget.value });
              }}
              value={this.state.productName}
            />
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="InputPrice" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="InputPrice"
              name="productPrice"
              onChange={(e) => {
                this.setState({ productPrice: e.currentTarget.value });
              }}
              value={this.state.productPrice}
            />
          </div>
          <button type="submit" className="btn btn-primary col-4">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
