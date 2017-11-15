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

import TabCourses from "../components/tabs/tabCourses"
import TabHomework from "../components/tabs/tabHomework"
import TabCalendar from "../components/tabs/tabCalendar"
import Drawer from "material-ui/Drawer"
import MenuItem from "material-ui/MenuItem"

if (typeof window !== "undefined") injectTapEventPlugin()

const courses = {
  advfrontend: {
    title: "Advanced Frontend web development (Javascript)",
    description: "Create and deploy a simple web application using Javascript",
    objective: "After this course, you will be able to:",
    goals: ["abc", "def", "ghi", "jkl"],
    address: "Digitales Lernzentrum, Kemperplatz 1a, 7th floor, 10785, Berlin",
    schedule: "Monday and Thursday 19.00-21.00",
    teachTalk: "TeachTalk: Wednesday 19.00-21.00",
    courseImage: "static/01_course_mobile/gmap.png",
    requirements: ""
  },
  java: {
    title: "Java",
    description: "the quick brown fox jumps over the lazy goat",
    objective: "bla bla java objectives bla",
    goals: ["1st goal", "2nd goal"],
    address: "some where over the rainbow",
    schedule: "when pigs fly",
    teachTalk: "no way José!",
    courseImage: "static/01_course_mobile/gmap.png",
    requirements: "kindergarten diploma"
  }
}

const Page = props => {
  const courseId = props.url.query.course || "advfrontend"
  const course = courses[courseId]
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
                  <TabCourses course={course} />
                </Tab>
                <Tab label="HOMEWORK">
                  <TabHomework course={course} />
                </Tab>
                <Tab label="CALENDAR">
                  <TabCalendar course={course} />
                </Tab>
              </Tabs>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    </div>
  )
}

export default Page
