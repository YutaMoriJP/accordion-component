import React from "react";
import AccordionContent from "./AccordionContent";
import PropTypes from "prop-types";

/**
 *
 * @param {number} index - index value of the component
 * @param {string} content - content rendered when accordion is open
 * @param {null | number} open - controls whether accordion is open, if index === open
 * @param {function} setOpen - state setter function, triggered by a click event
 * @returns {element} - renders react elements, button is rendered at all times, and the content is only rendered if index === open is true
 */
const Option = ({ index, content, open, setOpen }) => {
  console.log(`<Option/>-${index} renders`);
  const currentState = open === index;
  const handleClick = () => {
    //initially open points at null, so when the button is clicked
    //the state setter setOpen will set open to the specific index
    //of the component, and once a different component's button is clicked
    //open is updated to that component's index value and currenState will point at false, since open !== index
    //this handleClick event handler is the key to achieve the Accordion behavior
    if (index !== open) {
      setOpen(index);
    } else {
      setOpen(null);
    }
  };
  return (
    <article className={currentState ? "open" : "close"}>
      <button onClick={handleClick}>{currentState ? `Close ` : `Open `}</button>
      {currentState && <AccordionContent>{content}</AccordionContent>}
    </article>
  );
};

Option.propTypes = {
  index: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  open: PropTypes.oneOfType([PropTypes.number, PropTypes.bool])
};
export default Option;
