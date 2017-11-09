import React from "react"
import Paper from "material-ui/Paper"
import FlatButton from "material-ui/FlatButton"

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

const TabCourses = () => {
  return (
    <div>
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
                Advanced Frontend web development (Javascript) + React{" "}
              </h1>
              <p>
                Create and deploy a simple web application using Javascript{" "}
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
                Digitales Lernzentrum, Kemperplatz 1a, 7th floor, 10785, Berlin
              </p>
            </div>
            <img
              style={imageStyle}
              src="static/01_course_mobile/gmap.png"
              alt="Avatar"
            />{" "}
            <div>
              <div>
                <FlatButton label="Open Google Maps" primary={true} />
              </div>
            </div>
          </Paper>
        </div>
      </div>
      <Paper style={paperStyle}>
        <p>After this course, you will be able to:</p>
        <ol>
          <li>Apply intermediate skills in front end web development</li>
          <li>Create a simple web application and deploy it</li>
          <li>Understand foundational programming principles in Javascript</li>
          <li>Use the front end development library React</li>
        </ol>
        <p>
          Entry requirements: Basic Frontend Web development course or
          equivalent skills in JS
        </p>
      </Paper>
    </div>
  )
}

export default TabCourses
