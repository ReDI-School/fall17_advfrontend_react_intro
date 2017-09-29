import Head from "next/head"

const Page = () => (
  <div>
    <Head>
      <title>My fifth page!</title>
      <link rel="stylesheet" href="static/main.css" />
      <meta name="description" content="Let's make the web great again" />
      <meta name="keywords" content="sample, react, demo, awesome" />
    </Head>
    <h1>My fifth page!</h1>
    <div>
      This is our fifth page. Here we added an HTML5 footer element to the
      bottom of the page, just to motivate us to start using React components in
      the next example.
    </div>
    <hr />
    <footer>Footer™ ©2017 Tiago Henriques</footer>
  </div>
)

export default Page
