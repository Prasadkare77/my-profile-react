import React from "react";

const PropsInFunctionalComp = (props) => {
  console.log(props);
  const { userName, age, company } = props;
  return (
    <>
      <h2>Props in Functional comp</h2>
      user Name:{userName} <br />
      Age:{age} <br />
      Company:{company}
    </>
  );
};

export default PropsInFunctionalComp;
