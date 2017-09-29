import Footer from "../components/footer2"
import Head from "next/head"

const Page = () => (
  <div>
    <Head>
      <title>My seventh page!</title>
      <link rel="stylesheet" href="static/main.css" />
      <meta name="description" content="Let's make the web great again" />
      <meta name="keywords" content="sample, react, demo, awesome" />
    </Head>
    <h1>My seventh page!</h1>
    <div>
      This is our seventh page. Our Footer component is now a function that
      takes a "text" argument. This means that each page can pass different text
      to their own Footer, and illustrates how components promote reuse.
    </div>
    <div>
      You can reference variables inside your JSX code by using curly braces,
      like this:
    </div>
    <pre>1 + 1 = {1 + 1}</pre>

    <Footer text="Footer™ ©2017 Tiago Henriques" />
  </div>
)

export default Page
