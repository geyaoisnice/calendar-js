import React from "react";
import PropTypes from "prop-types";
import DatePicker from "./DataPicker";

function InputDatePicker(props) {
  return (
    <DatePicker
      calendar={{ year: 2020, monthIndex: 8 }}
      selectedDate={new Date(2020, 8, 29)}
    />
  );
}

InputDatePicker.propTypes = {};

export default InputDatePicker;