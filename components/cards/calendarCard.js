import React from "react"
import {Card, CardHeader, CardText} from "material-ui/Card"
import RaisedButton from "material-ui/RaisedButton"

const { buttonStyle, spanStyle, paperStyle, textStyle } = {
  buttonStyle: {
    margin: 12
  },
  spanStyle: {
    fontSize: "14px"
  },
  paperStyle: {
    marginBottom: "8px",
    padding: "8px"
  },
  textStyle: {
    margin: "0"
  }
}

const CalendarCard = ({ title, startTime, endTime, address, addressModified, agenda }) => {
  /*
  we use conditional rendering with fileSize to render the RaisedButton only when the file size
  is provided. please take a look at https://reactjs.org/docs/conditional-rendering.html
  */
  return (
    <Card style={paperStyle}>
    <CardHeader
      title={title}
      actAsExpander={true}
    />
    <CardText expandable={true}>
    {agenda}
    </CardText>
  </Card>
)
}

export default CalendarCard
