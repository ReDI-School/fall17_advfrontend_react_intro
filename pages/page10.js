import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Card, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TabContents from '../components/TabContents';

if (typeof window !== 'undefined') injectTapEventPlugin();

class Page10 extends Component {
  constructor() {
    super();

    this.setTheme = this.setTheme.bind(this);

    this.state = {
      theme: 'light'
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.theme === this.state.theme) {
      return false;
    }

    return true;
  }

  setTheme(theme) {
    this.setState({ theme });
  }

  getTheme(theme) {
    if (theme === 'light') {
      return getMuiTheme(lightBaseTheme);
    }

    if (theme === 'dark') {
      return getMuiTheme(darkBaseTheme);
    }
  }

  render() {
    const { theme } = this.state;

    return (
      <MuiThemeProvider muiTheme={this.getTheme(theme)}>
        <Card>
          <Tabs>
            <Tab onActive={this.setTheme('light')} label='Light Theme (Default)'>
              <TabContents>
                <FlatButton label='this is inside the tabs' />
              </TabContents>
            </Tab>
            <Tab onActive={this.setTheme('dark')} label='Dark Theme'>
              <TabContents />
            </Tab>
          </Tabs>
          <CardActions>
            <FlatButton label='View Dialog' />
            <FlatButton label='View Drawer' />
            <FlatButton label='View Snackbar' />
          </CardActions>
        </Card>
      </MuiThemeProvider>
    )
  }
}

export default Page10
