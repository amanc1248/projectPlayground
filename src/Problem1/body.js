import React, { useState } from "react";

function Body() {
  const [theBody, settheBody] = useState(false);
  const showHideBody = () => {
    settheBody(!theBody);
  };
  return (
    <div className="body">
      {theBody ? <h1>I am body</h1> : null}
      <button onClick={showHideBody}>Show hide body</button>
    </div>
  );
}

export default Body;
