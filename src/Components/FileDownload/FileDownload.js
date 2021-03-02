// This is my simple comment

import React, { Component } from "react";

class FileDownload extends React.Component {
  constructor(props) {
    super(props);
  }

  downloadFile = () => {
    // Dummy url for Test

    const data = {
      a: "111",
      b: "222",
      c: "333"
    };

    let linkElement = document.createElement("a");
    linkElement.href = URL.createObjectURL(
      new Blob([JSON.stringify(data, null, 2)], {
        type: "application/json"
      })
    );
    linkElement.setAttribute("download", "data.json");
    document.body.appendChild(a);
    linkElement.click();
    document.body.removeChild(a);
  };

  render() {
    return (
      <div id="container">
        <button onClick={this.downloadEmployeeData}>Download</button>
      </div>
    );
  }
}

export default FileDownload;
