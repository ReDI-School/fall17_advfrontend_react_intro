import Footer from "../components/footer2"
import Head from "next/head"
import { Button } from "react-bootstrap"

const Page = () => (
    <div>
        <Head>
            <title>My awesome page!</title>
            <meta name="description" content="Let's make the web great again" />
            <meta name="keywords" content="sample, react, demo, awesome" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
            />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"
            />
        </Head>
        <h1>This page is awesome!</h1>
        <div className="yellow">
            This is our great new page! It's great! It really is! It's awesome!
            Let's make the web great again!
        </div>
        <p>
            <Button>Click this bootstrap button!</Button>
        </p>
        <Footer text="Footer™ ©2017 Tiago Henriques" />
    </div>
)

export default Page
