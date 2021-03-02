// This is my simple comment

import React, { Component } from "react";

class FileDownload extends React.Component {
  constructor(props) {
    super(props);
  }

  downloadFile = () => {
    // Dummy url for Test

    var data = { x: 42, s: "hello, world", d: new Date() };
    var fileName = "my-download.json";

    var json = JSON.stringify(data);
    var blob = new Blob([json], { type: "octet/stream" });
    var url = window.URL.createObjectURL(blob);

    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";

    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  render() {
    return (
      <div id="container">
        <button onClick={this.downloadFile}>Download</button>
      </div>
    );
  }
}

export default FileDownload;
