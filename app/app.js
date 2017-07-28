// Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Main Component
var main = require('./Components/main')

console.log("upload main content.");
// Render our main component 
ReactDOM.render(
	<main />,
	document.getElementById('app')
)
console.log("Attempting to finish loading main content.");