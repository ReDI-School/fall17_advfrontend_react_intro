import Head from "next/head"

const StatelessRating = props => {
  const items = []
  for (let i = 1; i <= props.max; i++) {
    items.push(i)
  }
  return (
    <ul className="rating">
      {items.map(value => (
        <li
          key={value}
          className={value <= props.value && "filled"}
          onClick={
            props.onRatingSelected && props.onRatingSelected.bind(null, value)
          }
        >
          {"\u2605"}
        </li>
      ))}
    </ul>
  )
}

export default class RatingExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { rating: 5 }
    // event handler methods need to be passed as bound functions
    this.handleRatingSelected = this.handleRatingSelected.bind(this)
  }

  handleRatingSelected(rating) {
    this.setState({ rating })
    // This event handler should trigger an HTTP POST request to change rating.
    // Your code should go here.
    // Use /services/json-server/post.js or /services/contentful/post.js
  }

  render() {
    return (
      <div>
        <Head>
          <title>My star rating page!</title>
          <link rel="stylesheet" href="static/rating.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <div>
          Rating is {this.state.rating}
          <br />
          Clickable Rating <br />
          <StatelessRating
            value={this.state.rating}
            max={10}
            onRatingSelected={this.handleRatingSelected}
          />
          <br />
          Readonly rating <br />
          <StatelessRating value={this.state.rating} max={10} />
        </div>
      </div>
    )
  }
}
