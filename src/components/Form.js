import React from "react";

const Form = props => (
  <div id="form">
    <form onSubmit={props.getweather()}>
      <input type="text" name="country" placeholder="country...." />
      <input type="text" name="city" placeholder="city..." />

      <button id="boto" className="btn">
        Submit
      </button>
    </form>
  </div>
);

export default Form;
