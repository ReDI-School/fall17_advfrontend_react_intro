import Head from "next/head"

class Rating extends React.Component {
  render() {
    const items = []
    for (let i = 1; i <= this.props.max; i++) {
      items.push(
        <li
          className={i <= this.props.value && "filled"}
          onClick={
            this.props.onRatingSelected &&
            this.props.onRatingSelected.bind(null, i)
          }
        >
          {"\u2605"}
        </li>
      )
    }
    return <ul className="rating">{items}</ul>
  }
}

const RatingExample = React.createClass({
  getInitialState() {
    return { rating: 5 }
  },
  handleRatingSelected(rating) {
    this.setState({ rating })
    alert(`Rating selected: ${rating}`)
  },
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
          <Rating
            value={this.state.rating}
            max="10"
            onRatingSelected={this.handleRatingSelected}
          />
          <br />
          Readonly rating <br />
          <Rating value={this.state.rating} max="10" />
        </div>
      </div>
    )
  }
})

export default RatingExample
