// next.js stuff
import Head from "next/head"
import Link from "next/link"

// Material UI
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import { Tabs, Tab } from "material-ui/Tabs"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"
import Drawer from "material-ui/Drawer"
import MenuItem from "material-ui/MenuItem"
import Subheader from "material-ui/Subheader"
import injectTapEventPlugin from "react-tap-event-plugin"

// my custom components
import Footer from "../components/footers/footer2"
import CourseTab from "../components/tabs/courseTab"
import HomeworkTab from "../components/tabs/homeworkTab"
import CalendarTab from "../components/tabs/calendarTab"

// service helpers
import { get, space_id, access_token } from "../services/contentful/get"

if (typeof window !== "undefined") injectTapEventPlugin()

export default class extends React.Component {
  static async getInitialProps() {
    const path = `/spaces/${space_id}/entries?content_type=course&access_token=${access_token}`
    const response = await get(path)
    const responseJson = await response.json()
    const items = responseJson.items
    const courses = items.map(item => item.fields)
    const { includes: { Entry } } = responseJson
    return { courses, Entry }
  }
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false
    }

    this.switchDrawer = this.switchDrawer.bind(this)
  }
  switchDrawer() {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    })
  }
  render() {
    const courseId = this.props.url.query.course || "advfrontend"
    const course = this.props.courses.filter(
      course => course.id === courseId
    )[0]
    const entries = this.props.Entry

    // create an array to store all assignments ids for this course in it
    const assignmentsIds =
      course.assignments &&
      course.assignments.map(assignment => assignment.sys.id)

    // create an array to store all events ids for this course in it
    const eventsIds = course.events && course.events.map(event => event.sys.id)

    /*
    create an object that has the course's assignments and events as properties
    ex: 
     {
      assignments: [
        {title, conten},
        {title, conten},
        {title, conten}
      ],
      events: [
        {tile, id},
        {tile, id},
        {tile, id}
      ]
    }
    */
    const { assignments, events } = entries.reduce((accumulator, entry) => {
      // check if the entry is an assignment for the current course
      if (assignmentsIds && assignmentsIds.indexOf(entry.sys.id) !== -1) {
        //Yes:
        // check if the acc has assigment property and if not just assign an empty array to it
        accumulator.assignments = accumulator.assignments || []
        // push the entry to the assignments property
        accumulator.assignments.push(entry.fields)
      }

      // check if the entry is an event for the current course
      if (eventsIds && eventsIds.indexOf(entry.sys.id) !== -1) {
        //Yes:
        // check if the acc has events property and if not just assign an empty array to it
        accumulator.events = accumulator.events || []
        //push it to the events property
        accumulator.events.push(entry.fields)
      }

      // return the accumulator if the entry is not an event nor an assignment
      return accumulator
    }, {})

    return (
      <div>
        <Head>
          <title>My fourteenth page!</title>
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
                  onLeftIconButtonTouchTap={this.switchDrawer}
                  title={course.title || "Default Course"}
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                  <Drawer
                    docked={false}
                    open={this.state.drawerOpen}
                    onRequestChange={this.switchDrawer}
                  >
                    <Subheader
                      style={{
                        height: "172px",
                        width: "304px",
                        backgroundColor: "#00BCD4",
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: "normal"
                      }}
                    >
                      <img
                        style={{ marginTop: "40px" }}
                        src="/static/04_menu_mobile/redi_avatar.png"
                        alt="Redi avatar"
                      />
                      <div style={{ marginBottom: "26px" }}>
                        ReDI School of Digital Integration
                      </div>
                    </Subheader>
                    {this.props.courses.map((item, index) => (
                      <MenuItem
                        key={item.id}
                        primaryText={item.title}
                        href={`page14?course=${item.id}`}
                      />
                    ))}
                  </Drawer>
                </AppBar>
              </div>
              <div>
                <Tabs>
                  <Tab label="COURSES">
                    <CourseTab course={course} />
                  </Tab>
                  <Tab label="HOMEWORK">
                    <HomeworkTab assignments={assignments} />
                  </Tab>
                  <Tab label="CALENDAR">
                    <CalendarTab events={events} />
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
