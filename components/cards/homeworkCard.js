import React from "react"
import { Card, CardText, CardHeader } from "material-ui/Card"
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

const CustomPaper = ({ title, content, fileSize }) => {
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
        pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
        interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        {fileSize && (
          <div>
            <span style={spanStyle}>Relevant file ({fileSize})</span>
            <RaisedButton label="DOWNLOAD" primary={true} style={buttonStyle} />
          </div>
        )}
      </CardText>
    </Card>
  )
}

export default CustomPaper
