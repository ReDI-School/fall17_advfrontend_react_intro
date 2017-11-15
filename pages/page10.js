import React, { Component } from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import { Tabs, Tab } from "material-ui/Tabs"
import { Card, CardActions } from "material-ui/Card"
import FlatButton from "material-ui/FlatButton"
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme"
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import injectTapEventPlugin from "react-tap-event-plugin"
import TabContents from "../components/tabs/tabContents"

if (typeof window !== "undefined") injectTapEventPlugin()

class Page10 extends Component {
  constructor() {
    super()

    this.setTheme = this.setTheme.bind(this)

    this.state = {
      theme: "light"
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.theme === this.state.theme) {
      return false
    }

    return true
  }

  setTheme(theme) {
    this.setState({ theme })
  }

  getTheme(theme) {
    if (theme === "light") {
      return getMuiTheme(lightBaseTheme)
    }

    if (theme === "dark") {
      return getMuiTheme(darkBaseTheme)
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>My tenth page!</title>
          <link rel="stylesheet" href="static/main.css" />
          <meta name="description" content="Let's make the web great again" />
          <meta name="keywords" content="sample, react, demo, awesome" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <MuiThemeProvider muiTheme={this.getTheme(this.state.theme)}>
          <Card>
            <Tabs>
              <Tab
                onActive={this.setTheme("light")}
                label="Light Theme (Default)"
              >
                <TabContents>
                  <FlatButton label="this is inside the tabs" />
                </TabContents>
              </Tab>
              <Tab onActive={this.setTheme("dark")} label="Dark Theme">
                <TabContents />
              </Tab>
            </Tabs>
            <CardActions>
              <FlatButton label="View Dialog" />
              <FlatButton label="View Drawer" />
              <FlatButton label="View Snackbar" />
            </CardActions>
          </Card>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Page10
