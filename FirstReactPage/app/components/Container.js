'use strict';

var React = require('react');

var Header = require('./Header');
var Form = require('./Form');
var Footer = require('./Footer');

var Container = React.createClass({

	render: function() {
		return (
			<div>
				<Header/>
				<Form />
				<Footer />
			</div>
		);
	}

});

module.exports = Container;