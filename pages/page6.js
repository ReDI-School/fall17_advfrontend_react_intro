import Footer from "../components/footer1"
import Head from "next/head"

const Page = () => (
  <div>
    <Head>
      <title>My sixth page!</title>
      <link rel="stylesheet" href="static/main.css" />
      <meta name="description" content="Let's make the web great again" />
      <meta name="keywords" content="sample, react, demo, awesome" />
    </Head>
    <h1>My sixth page!</h1>
    <div>
      This is our sixth page. Here we have replaced the HTML5 footer element
      with a Footer component, our very first React component. The Footer
      component is exported from "components/footer1.js", and has to be
      explicitly imported by our page. Have a look at the components code to see
      how simple it is. Like the pages we've seen so far, the component's code
      simply export one single function that takes no arguments and returns some
      JSX markup.
    </div>
    <Footer />
  </div>
)

export default Page
