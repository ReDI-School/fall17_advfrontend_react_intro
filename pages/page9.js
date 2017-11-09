import Footer from "../components/footers/footer2"
import Head from "next/head"
// Material UI theme
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
// Material UI components
import AppBar from "material-ui/AppBar"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"

const Page = () => (
  <div>
    <Head>
      <title>My ninth page!</title>
      <link rel="stylesheet" href="static/main.css" />
      <meta name="description" content="Let's make the web great again" />
      <meta name="keywords" content="sample, react, demo, awesome" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <AppBar
            title="My ninth page!"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Paper style={{ padding: 10 }}>
            <div>
              This page is showing how to use React components from the
              Material-UI library. We're using an AppBar component at the top,
              and a RaisedButton below. Before you're able to run this locally,
              you have to run "npm install" to install the new material-ui
              dependence.
            </div>
            <RaisedButton label="Hi Redi School!" style={{ margin: 10 }} />
          </Paper>
        </div>
      </MuiThemeProvider>
    </div>
  </div>
)

export default Page
