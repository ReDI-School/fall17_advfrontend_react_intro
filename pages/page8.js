import Footer from "../components/footer3"
import Head from "next/head"

const Page = () => (
  <div>
    <Head>
      <title>My eighth page!</title>
      <link rel="stylesheet" href="static/main.css" />
      <meta name="description" content="Let's make the web great again" />
      <meta name="keywords" content="sample, react, demo, awesome" />
    </Head>
    <h1>My eighth page!</h1>
    <div>
      This is our eighth page. Our Footer component is now a function that three
      arguments: text, year and author. This means that each page can pass
      different text to their own Footer, and illustrates how components promote
      reuse.
    </div>
    <Footer text="Footer™" year="2017" author="Tiago Henriques" />
  </div>
)

export default Page
