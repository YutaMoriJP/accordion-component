import React from "react";
import Option from "./Option";
import PropTypes from "prop-types";

/**
 *
 * @param {Array} options - object containing data for Option component
 * @returns {element} - returns an array of rendered components
 */
const Accordion = ({ options }) => {
  const [open, setOpen] = React.useState(null);
  return options.map((option, index) => {
    return (
      <Option
        key={option.id}
        index={index}
        content={option.content}
        open={open}
        setOpen={setOpen}
      />
    );
  });
};

Accordion.propTypes = {
  options: PropTypes.array.isRequired
};

export default Accordion;
