import Card from "../components/cards"
import Head from "next/head"

const numbers = [1, 2, 3, 4, 5];

const Cards = ()  => (
   <div>
    <Head>
      <title> My beloved cat</title>
    </Head>
    <h1> Cards</h1>
    <div className ="card-container">
      {numbers.map((item) => <Card text={"some cool title " + item} />)}
    </div>
   </div>
   
  )


export default Cards