const Sandbox = ({ children }) => {
  return (
    <div className="sandbox">
      <a
        href="https://codesandbox.io/s/accordion-2-18v20?file=/src/Accordion.js"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </div>
  );
};

export default Sandbox;
