import React from "react"
import Paper from "material-ui/Paper"
import RaisedButton from "material-ui/RaisedButton"

const CustomPaper = ({ title, content, fileSize }) => {
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

  /*  we use conditional rendering with fileSize to render the RaisedButton only when the file size 
    is provided
    plese take a look at https://reactjs.org/docs/conditional-rendering.html
  */
  return (
    <Paper style={paperStyle} zDepth={2}>
      <h4 style={textStyle}>{title}</h4>
      <p style={textStyle}>{content}</p>
      {fileSize && (
        <div>
          <span style={spanStyle}>Relevant file ({fileSize})</span>
          <RaisedButton label="DOWNLOAD" primary={true} style={buttonStyle} />
        </div>
      )}
    </Paper>
  )
}

export default CustomPaper
