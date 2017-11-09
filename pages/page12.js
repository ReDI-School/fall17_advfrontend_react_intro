import Footer from "../components/footer2"
import Head from "next/head"
// Material UI theme
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
// Material UI components
import AppBar from "material-ui/AppBar"
import { Tabs, Tab } from "material-ui/Tabs"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import injectTapEventPlugin from "react-tap-event-plugin"

import TabCourses from "../components/tabs/tabCourses"
import TabHomework from "../components/tabs/tabHomework"
import TabCalendar from "../components/tabs/tabCalendar"

if (typeof window !== "undefined") injectTapEventPlugin()

const Page = () => (
  <div>
    <Head>
      <title>My ninth page!</title>
      <link rel="stylesheet" href="static/main.css" />
      <meta name="description" content="Let's make the web great again" />
      <meta name="keywords" content="sample, react, demo, awesome" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="//fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      <meta charSet="utf-8" />
    </Head>
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <div>
            <AppBar
              title="ReDi: Advanced FrontEnd"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          </div>
          <div>
            <Tabs>
              <Tab label="COURSES">
                <TabCourses />
              </Tab>
              <Tab label="HOMEWORK">
                <TabHomework />
              </Tab>
              <Tab label="CALENDAR">
                <TabCalendar />
              </Tab>
            </Tabs>
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  </div>
)

export default Page
