const Counter = React.createClass({
	getInitialState: function() {
		return {
			score: 0
		}
	},
	losePoint: function() {
		if(this.state.score > 0) {
			this.setState({
				score: this.state.score - 1
			})	
		}
	},
	addPoint: function() {
		this.setState({
			score: this.state.score + 1
		})
	},
	render: function() {
		return(
			<div className="counter">
				<button className="btn btn-danger" onClick={this.losePoint}>-</button>
				<div className="team-score">{this.state.score}</div>
				<button className="btn btn-success" onClick={this.addPoint}>+</button>
			</div>
		)
	}
});

function Team(props) {
	console.log(props);
	return (
		<div className={`team ${props.teamName}`}>
			<div className="team-name">
				<h3 className="text-name">{props.teamName}</h3>
			</div>
			<Counter />
		</div>
	)
}

function Logo(props) {
	console.log(props);
	return (
		<div className={`logo ${props.teamName}`}>
			<div className="team-logo">
				<img src={`./images/${props.logoUrl}`} />
			</div>
		</div>
	)
}

function Info(props) {
	return (
		<div className="info">
			<div className="time">
				<h3 className="information">Sat, 5/26, 2:45 PM</h3>
			</div>
			<div className="location">
				<h3 className="information">Olimpiyskiy National Sports Complex, Kiev, Ukraine</h3>
			</div>
			<div className="stadium">
				<img src={`./images/${props.stadiumUrl}`} />
			</div>
		</div>
	)
}

// React is a bunch of legos. legos are called components.
// A component is a fancy name for a class-like UI thing.
function Scoreboard() {
	// main is going to return a piece of JSX.
	// Every React component must return a single DOM element.
	return (
		<div className="scoreboard">
			<div className="header">
				<h1 className="title">UEFA Champions League - Final</h1>
			</div>
			<Info stadiumUrl="stadium.jpg" />
			<div className="logos">
				<Logo teamName="Real Madrid" logoUrl="real_madrid.png" />
				<Logo teamName="Liverpool" logoUrl="liverpool.png" />
			</div>
			<div className="teams">
				<Team teamName="Real Madrid" />
				<Team teamName="Liverpool" />
			</div>
		</div>
	)
}

// the render method (inside ReactDOM) takes 2 args:
// 1. What
// 2. Where
// React.createElement('h1', 'Sanity Check')
ReactDOM.render(
	<Scoreboard />, document.getElementById('root')
)