import Footer from "../components/footers/footer2"
import Head from "next/head"
// Material UI theme
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { Tabs, Tab } from "material-ui/Tabs"
// Material UI components
import AppBar from "material-ui/AppBar"
import Paper from "material-ui/Paper"
import FlatButton from "material-ui/FlatButton"
import { GridList, GridTile } from "material-ui/GridList"
import DatePicker from "material-ui/DatePicker"
import Drawer from "material-ui/Drawer"
import MenuItem from "material-ui/MenuItem"
import RaisedButton from "material-ui/RaisedButton"
import injectTapEventPlugin from "react-tap-event-plugin"

if (typeof window !== "undefined") injectTapEventPlugin()

const menuStyle = {
  backgroundColor: "#00BCD4"
}

const tabStyle = {
  // backgroundColor: "#00BCD4",
  // tabHighLightColor: "#FFFF8C",
  marginBottom: "8px"
}

const globalStyle = {
  fontFamily: "Roboto",
  backgroundColor: "#FFFFFF"
}

const imageStyle = {
  width: "100%"
}

const header1Style = {
  fontSize: "24px"
}

const paperStyle = {
  marginLeft: "8px",
  marginRight: "8px",
  marginBottom: "8px"
}

const textStyle = {
  paddingLeft: "16px",
  paddingRight: "16px",
  paddingTop: "8px",
  paddingBottom: "8px"
}

export default class Page11 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  render() {
    return (
      <div>
        <Head>
          <title>ReDI: Advanced Frontend</title>
          <link rel="stylesheet" href="static/style.css" />
          <meta name="description" content="Let's make the web great again" />
          <meta name="keywords" content="sample, react, demo, awesome" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
              <AppBar
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={() =>
                  this.setState({ open: !this.state.open })}
                title="ReDI: Advanced Frontend"
                style={{ menuStyle }}
                zDepth={0}
              />
              <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={open => this.setState({ open })}
              >
                <MenuItem onClick={() => this.setState({ open: false })}>
                  Menu Item
                </MenuItem>
                <MenuItem onClick={() => this.setState({ open: false })}>
                  Menu Item 2
                </MenuItem>
              </Drawer>
              <Tabs style={tabStyle}>
                <Tab label="COURSE">
                  <div>
                    <div>
                      <Paper style={paperStyle}>
                        <img
                          style={imageStyle}
                          src="static/01_course_mobile/course_pic.png"
                          alt="Avatar"
                        />
                        <div style={textStyle}>
                          <h1 style={header1Style}>
                            Advanced Frontend web development (Javascript) +
                            React{" "}
                          </h1>
                          <p>
                            Create and deploy a simple web application using
                            Javascript{" "}
                          </p>
                        </div>
                      </Paper>

                      <Paper style={paperStyle}>
                        <div style={textStyle}>
                          <h4>When</h4>
                          <p>Monday and Thursday 19.00-21.00</p>
                          <p>+TeachTalk: Wednesday 19.00-21.00</p>
                          <h4>Where</h4>
                          <p>
                            Digitales Lernzentrum, Kemperplatz 1a, 7th floor,
                            10785, Berlin
                          </p>
                        </div>
                        <img
                          style={imageStyle}
                          src="static/01_course_mobile/gmap.png"
                          alt="Avatar"
                        />{" "}
                        <div>
                          <div>
                            <FlatButton
                              label="Open Google Maps"
                              primary={true}
                            />
                          </div>
                        </div>
                      </Paper>
                    </div>
                  </div>
                  <Paper style={paperStyle}>
                    <p>After this course, you will be able to:</p>
                    <ol>
                      <li>
                        Apply intermediate skills in front end web development
                      </li>
                      <li>Create a simple web application and deploy it</li>
                      <li>
                        Understand foundational programming principles in
                        Javascript
                      </li>
                      <li>Use the front end development library React</li>
                    </ol>
                    <p>
                      Entry requirements: Basic Frontend Web development course
                      or equivalent skills in JS
                    </p>
                  </Paper>
                </Tab>
                <Tab label="HOMEWORK">
                  <div>
                    <h2>Tab Two</h2>
                    <p>This is another example tab.</p>
                  </div>
                </Tab>
                <Tab label="CALENDER">
                  <div>
                    <h2>Click the calender</h2>

                    <DatePicker hintText="calender" />
                  </div>
                </Tab>
              </Tabs>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}
