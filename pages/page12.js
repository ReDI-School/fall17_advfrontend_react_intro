import Footer from "../components/footers/footer2"
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

import CourseTab from "../components/tabs/courseTab"
import HomeworkTab from "../components/tabs/homeworkTab"
import CalendarTab from "../components/tabs/calendarTab"
import Drawer from "material-ui/Drawer"
import MenuItem from "material-ui/MenuItem"

if (typeof window !== "undefined") injectTapEventPlugin()

export default class extends React.Component {
  static async getInitialProps() {
    const courses = await import("../data/courses.json")
    return { courses }
  }
  render() {
    const courseId = this.props.url.query.course || "advfrontend"
    const course = this.props.courses[courseId]
    return (
      <div>
        <Head>
          <title>My twelfth page!</title>
          <meta name="description" content="Let's make the web great again" />
          <meta name="keywords" content="sample, react, demo, awesome" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="static/main.css" />
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
                  title={course.title || "Default Course"}
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                  <Drawer docked={false}>
                    <MenuItem value={"/"} primaryText="Home" />
                  </Drawer>
                </AppBar>
              </div>
              <div>
                <Tabs>
                  <Tab label="COURSES">
                    <CourseTab course={course} />
                  </Tab>
                  <Tab label="HOMEWORK">
                    <HomeworkTab course={course} />
                  </Tab>
                  <Tab label="CALENDAR">
                    <CalendarTab course={course} />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}
