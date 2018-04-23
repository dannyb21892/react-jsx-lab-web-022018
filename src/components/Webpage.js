import React from 'react';
import FillerText from "./FillerText.js"

let ft = new FillerText

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h1>The world's coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

export default Webpage;
