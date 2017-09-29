import Card from "../components/card1"
import Head from "next/head"

const Page = () => (
  <div>
    <Head>
      <title>Static cards</title>
      <link rel="stylesheet" href="static/cards.css" />
      <meta name="description" content="List of cards" />
      <meta name="keywords" content="cards" />
    </Head>
    <h1>Cards</h1>
    <div className="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
)

export default Page
