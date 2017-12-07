const Rating = React.createClass({
  render() {
    const items = []
    for (let i = 1; i <= this.props.max; i++) {
      const clickHandler =
        this.props.onRatingSelected && this.props.onRatingSelected.bind(null, i)
      items.push(
        <li
          className={i <= this.props.value && "filled"}
          onClick={clickHandler}
        >
          {"\u2605"}
        </li>
      )
    }
    return <ul className="rating">{items}</ul>
  }
})

const RatingExample = React.createClass({
  getInitialState() {
    return { rating: 5 }
  },
  handleRatingSelected(rating) {
    this.setState({ rating })
    alert(`Rating selected - ${rating}`)
  },
  render() {
    return (
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
    )
  }
})

export default RatingExample
