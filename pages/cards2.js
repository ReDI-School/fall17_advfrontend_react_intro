import Card from "../components/card2"
import Head from "next/head"

const cards = [
  {
    imageUrl: "static/good_boy.jpg",
    title: "Good dog!",
    text: "asdfasdfasfdsadf"
  },
  { imageUrl: "static/good_boy.jpg", title: "Bad dog!", text: "qwerqwerwqer" },
  {
    imageUrl: "static/good_boy.jpg",
    title: "Nice kitty!",
    text: "zxcvzxcvzxvc"
  },
  {
    imageUrl: "static/good_boy.jpg",
    title: "shitty kitty",
    text: "123412341243"
  }
]
const Page = () => (
  <div>
    <Head>
      <title>Cards</title>
      <link rel="stylesheet" href="static/cards.css" />
      <meta name="description" content="List of cards" />
      <meta name="keywords" content="cards" />
    </Head>
    <h1>Cards</h1>
    <div className="card-container">
      {cards.map((item, index) => (
        <Card
          imageUrl={item.imageUrl}
          title={item.title}
          text={item.text}
          key={index}
        />
      ))}
    </div>
  </div>
)

export default Page
