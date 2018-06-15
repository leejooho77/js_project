const Data = React.createClass({
	getInitialState: function() {
		return {
			data: [
				{
				    author:{
				      avatarUrl: "http://iconpopanswers.com/wp-content/uploads/2013/04/icomania-large-167.jpg",
				      name:"neo"
				    },
				    commentHeading: "I am the One.",
				    text: "Humanity, relax. I will save you.",
				    date: "Today",
				    userBadge: [ 
				      'Superman',
				      'Herald',
				      'Engineer'
				    ]
				},
				{
				    author:{
				      avatarUrl: "https://maxcdn.icons8.com/Color/PNG/512/Cinema/morpheus-512.png",
				      name:"Morpheus"
				    },
				    commentHeading: "There is no spoon.",
				    text: "Don't htink you are. KNow you are.",
				    date: "Two days ago",
				    userBadge: [ 
				      'The man',
				      'Bard',
				      'Samurai swordsman'
				    ]
				}
			]
		}
	},
	render: function() {
		const data_array = this.state.data.map((single_data, index)=>{
			return (
				<Comment key={index} info={single_data} />
			)
		});
		return (
			<div>
				{data_array}
			</div>
		)
	}
});

function Badge(props) {
	return (
		<div className="badge">{props.badge}</div>	
	)
}

function Comment(props) {
	const badges = props.info.userBadge.map((badge, index)=>{
		return (
			<Badge key={index} badge={badge} />
		)
	});
	return (
		<div className="container text-center">
			<div className="Comment">
				<div className="UserInfo">
					<img className="Avatar"
						src={props.info.author.avatarUrl}
						alt={props.info.author.name}
					/>
					<div className="UserInfo-name">
						{props.info.author.name}
					</div>
				</div>
				<div className="Comment-body">
					<h1>{props.info.commentHeading}</h1>
					<div className="Comment-text">{props.info.text}</div>
					<div className="Comment-date">
						{Date(props.info.date)}
					</div>
				</div>
				<div className="UserBadges">
					{badges}
				</div>
			</div>
		</div>
	);
}

ReactDOM.render(
	<Data />, document.getElementById('root')
)