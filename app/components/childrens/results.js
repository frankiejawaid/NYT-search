// React variable  
var React = require('react');

// Results component
var Results = React.createClass({

	// Here we render the function
	render: function(){
		console.log("The results Start.");
		console.log(this.props.article);
		

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>
				<div className="panel-body text-center">
						<p>{this.props.article}</p>
				</div>
			</div>
		)
	console.log("The results Start.");
	}
});

// Export the component back for use in other files
module.exports = Results;