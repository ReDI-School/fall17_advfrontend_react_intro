import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Card, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TabContents from '../components/TabContents';

const Page9 = () => {
  console.log('render');

  return (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Card>
        <Tabs>
          <Tab onActive={() => console.warn('Light')} label='Light Theme (Default)'>
            <TabContents>
              <FlatButton label='this is inside the tabs' />
            </TabContents>
          </Tab>
          <Tab onActive={() => console.warn('Dark')} label='Dark Theme'>
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

export default Page9
