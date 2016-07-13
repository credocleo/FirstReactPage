'use strict';

var React = require('react');

var Form = React.createClass({
	render: function() {
		return(
			<div>
				<h1>form here</h1>
				<form>
					<label>Username:</label>
					<input type="text" placeholder="Username" />
					<label>Password</label>
					<input type="password" placeholder="Password" />
					<input type="submit" value="submit" />
				</form>
			</div>
		);
	}
});

module.exports = Form;