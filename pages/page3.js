import Head from "next/head"

const Page = () => (
  <div>
    <Head>
      <title>My third page!</title>
      <meta name="description" content="Let's make the web great again" />
      <meta name="keywords" content="sample, react, demo, awesome" />
    </Head>
    <h1>My third page!</h1>
    <div>
      This my third page. Here we are injecting meta elements into our page's
      head element, to allow us to add keywords and a description that can be
      read by search engines.
    </div>
  </div>
)

export default Page
