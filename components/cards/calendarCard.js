import React from "react"
import { Card, CardHeader, CardText } from "material-ui/Card"
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
const Style = {
  time: {
    color: " rgba(0,0,0,0.54)",
    fontSize: "14px"
  },
  addressModified: {
    color: "#F44336",
    fontSize: "14px",
    fontWeight: "bold"
  }
}
const CalendarCard = ({
  title,
  startTime,
  endTime,
  address,
  addressModified,
  agenda
}) => {
  /*
  we use conditional rendering with fileSize to render the RaisedButton only when the file size
  is provided. please take a look at https://reactjs.org/docs/conditional-rendering.html
  */
  return (
    <Card style={paperStyle}>
      <CardHeader title={title} actAsExpander={true} />
      <CardText expandable={true}>
        <div>
          <div style={Style.time}>
            {startTime}-{endTime}
          </div>
          {addressModified ? (
            <div>
              <div style={Style.addressModified}>'Place Changed'</div>
              <div style={{ fontWeight: "500" }}> {address} </div>{" "}
            </div>
          ) : (
            <div style={Style.time}> {address} </div>
          )}
          <div
            style={{
              fontWeight: "500",
              marginTop: "15px",
              marginBottom: "17px"
            }}
          >
            Agenda
          </div>
          <div>{agenda}</div>
        </div>
      </CardText>
    </Card>
  )
}
export default CalendarCard
