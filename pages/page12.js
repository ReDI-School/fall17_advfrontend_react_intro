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
    requirements: "",
    events: [
      {
        title: "Week 1: Mon 25 September",
        startTime: "19:00",
        endTime: "21:00",
        address:
          "Digitales Lernzentrum, Kemperplatz 1a, 7th floor, 10785, Berlin",
        agenda:
          "Once you tap on a card, the card expands, then you can read a whole explanation of the course agenda. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
      },
      {
        title: "Week 1: Thu 28 September",
        startTime: "19:00",
        endTime: "21:00",
        address: "ReDI HQ, Am Nordbahnhof 3, 3rd floor, 10115, Berlin",
        addressModified: true,
        agenda:
          "Once you tap on a card, the card expands, then you can read a whole explanation of the course agenda. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
      },
      {
        title: "Week 2: Mon 2 October",
        startTime: "19:00",
        endTime: "21:00",
        address:
          "Digitales Lernzentrum, Kemperplatz 1a, 7th floor, 10785, Berlin",
        agenda:
          "Once you tap on a card, the card expands, then you can read a whole explanation of the course agenda. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
      },
      {
        title: "Week 2: Thu 5 October",
        startTime: "19:00",
        endTime: "21:00",
        address:
          "Digitales Lernzentrum, Kemperplatz 1a, 7th floor, 10785, Berlin",
        agenda:
          "Once you tap on a card, the card expands, then you can read a whole explanation of the course agenda. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
      }
    ],
    assignments: [
      {
        title: "Week 1: Thu 25 September",
        content:
          "The Explanation of homework is cut up to 2 lines of text with 3 dots at the end. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      },
      {
        title: "Week 1: Thu 28 September",
        content:
          "Once you tap on a card, the card expands, then you can read a whole explanation of the homework. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        fileSize: "PDF, 2.0MB"
      },
      {
        title: "Week 2: Mon 2 October",
        content:
          "The Explanation of homework is cut up to 2 lines of text with 3 dots at the end. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      },
      {
        title: "Week 2: Thu 5 October",
        content:
          "The Explanation of homework is cut up to 2 lines of text with 3 dots at the end. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      },
      {
        title: "Week 3: Mon 9 October",
        content:
          "The Explanation of homework is cut up to 2 lines of text with 3 dots at the end. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
      }
    ]
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
    requirements: "kindergarten diploma",
    events: [{title: "1st event"}, {title: "2nd event"}],
    assignments: [{title: "1st assignment"}, {title: "2nd assignment"}]
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
