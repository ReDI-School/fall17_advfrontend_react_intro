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

const TabCourses = ({course}) => {
  console.log(course)
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
              <h1 style={header1Style}>{course.title}</h1>
              <p>{course.shortDescription}</p>
            </div>
          </Paper>

          <Paper style={paperStyle}>
            <div style={textStyle}>
              <h4>When</h4>
              <p>{course.schedule}</p>
              <p>{course.teachTalk}</p>
              <h4>Where</h4>
              <p>{course.address}</p>
            </div>
            <img
              style={imageStyle}
              src={course.courseImage || "static/01_course_mobile/gmap.png"}
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
        <p>{course.objective}</p>
        <ol>{course.goals.map(goal => <li>{goal}</li>)}</ol>
        <p>{course.requirements}</p>
      </Paper>
    </div>
  )
}

export default TabCourses
