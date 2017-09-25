import Head from "next/head"

const Page = () => (
    <div>
        <Head>
            <title>My awesome page!</title>
            <meta name="description" content="Let's make the web great again" />
            <meta name="keywords" content="sample, react, demo, awesome" />
        </Head>
        <h1>This page is awesome!</h1>
        <div className="yellow">
            This is our great new page! It's great! It really is! It's awesome!
            Let's make the web great again!
        </div>
        <hr />
        <footer>Footer™ ©2017 Tiago Henriques</footer>
    </div>
)

export default Page
