// pure function, aka, dumb function
// function Coin() {
// 	return (
// 		<h1>Sanity Check!</h1>
// 	)
// }

// createClass is a helper function to help old browsers pretend to make classes.
// Classes are smart functions. They are not pure. They change their output, based on application state.
const Coin = React.createClass(
	{
		sides: [
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'		
		],
		getInitialState: function() {
			return {
				image: this.sides[0]
			}
		},
		flipCoin: function() {
			// In here, we change this.state.image
			// ANYTIME we change state, render will be called
			let newSide = 0;
			let randomSide = Math.round(Math.random());
			newSide = this.sides[randomSide];
			// WE NEVER DO THIS:
			// this.state.image = newSide
			this.setState({
				image: newSide
			});
			console.log(randomSide);
		},
		// Smart functions don't have a pure return (always return same).
		// They have a render method. The render method has the return statement.
		// All rules apply (jsx, single element)
		// render is special. Render is called when it's time to put the component in the DOM.
		render: function() {
			return (
				<div>
					<img src={this.state.image} />
					<div>
						<button className="btn btn-success" onClick={this.flipCoin}>Click to Flip</button>
					</div>
				</div>
			)
		}
	}
)

ReactDOM.render(
	<Coin />, document.getElementById('root')
)