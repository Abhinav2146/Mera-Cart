import React from "react";

export default function product(props) {
  return (
    <div className="row mt-3">
      <div className="col-4">
        <h4>
          {props.product.name}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h4>
      </div>
      <div className="col-3">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              props.decQty(props.index);
            }}
          >
            _
          </button>
          <button type="button" class="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              props.incQty(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2 badge bg-secondary mr-5">
        {props.product.quantity * props.product.price}
      </div>
      <button
        className="col-3 btn btn-danger"
        onClick={() => {
          props.remove(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}
