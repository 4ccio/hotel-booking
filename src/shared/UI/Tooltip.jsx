const Tooltip = ({ children, className = "" }) => {
  return <div className={`tooltip ${className}`}>{children}</div>;
};

export default Tooltip;
