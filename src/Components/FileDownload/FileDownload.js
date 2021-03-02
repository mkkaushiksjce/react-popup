// This is my simple comment

import React, {Component} from 'react';

import './FileDownload.css';

class FileDownload extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	downloadEmployeeData = () => {
        // Dummy url for Test	
		fetch('http://localhost:8080/employees/download')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'employees.json';
					a.click();
				});
				//window.location.href = response.url;
		});
	}
	
	render() {
		return (
			<div id="container">
				<h1>Download File using React App</h1>
				<h3>Download Employee Data using Button</h3>
				<button onClick={this.downloadEmployeeData}>Download</button>
				<p/>
				<h3>Download Employee Data using Link</h3>
				<a href="#" onClick={this.downloadEmployeeData}>Download</a>
			</div>
		)
	}

}

export default FileDownload;
