import Head from "next/head"

const Page = () => (
  <div>
    <Head>
      <title>My fourth page!</title>
      <link rel="stylesheet" href="static/main.css" />
      <meta name="description" content="Let's make the web great again" />
      <meta name="keywords" content="sample, react, demo, awesome" />
    </Head>
    <h1>My fourth page!</h1>
    <div>
      This my fourth page. Here we are showing how annotate an element with a
      CSS class name. Note that unlike standard HTML, JSX requires you to use
      the "className" attribute (instead of the usual "class" attribute).
    </div>
    <div>
      In order for the "className" attribute to have any effect, it has to correspond to a CSS rule found somewhere. We added a "static/main.css" containing a single "yellow" rule, which assigns a yellow background color. Next.js will serve any file that is placed inside the "static/" folder as a static file, so that's the place to put your CSS, images, fonts and favicons.
    </div>
    <div className="yellow">This is a paragraph with yellow background.</div>
  </div>
)

export default Page
