var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function() {
		return (
			React.createElement('div', {},
				React.createElement('button', {onClick: this.increment}, '+') ,
				React.createElement('span', {}, 'Licznik ' + this.state.counter),
				React.createElement('button', {onClick: this.decrement}, '-'),
			)
		);
	},

	componentWillMount: function() {
		console.log('Przed renderowaniem funkcji');
	},

	componentDidMount: function() {
		console.log('Po renderowaniu - możemy modyfikować funkcje');
	},

	componentWillUpdate: function(nextProps, nextState) {
		console.log('Stan licznika: ' + nextState.counter);
	},

	componentDidUpdate: function(prevProps, prevState) {
		console.log('Poprzedni stan licznika: ' + prevState.counter);
	}


});

var element = React.createElement('div', {}, 
	React.createElement(Counter),
	React.createElement(Counter),
	React.createElement(Counter)
);
ReactDOM.render(element, document.getElementById('app'));
