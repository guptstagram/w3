import React from "react";

const CodeComponent = ({ code }) => {
  return <iframe srcdoc={code} />;
};

export default CodeComponent;
