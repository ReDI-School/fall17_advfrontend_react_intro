import Head from "next/head"

const Page = () => (
  <div>
    <Head>
      <title>My second page!</title>
    </Head>
    <div>
      <h1>My second page!</h1>
      <div>
        This is our second page. Here we have used next's Head component to
        indirectly inject a title element into the head of our page.
      </div>
    </div>
  </div>
)

export default Page
