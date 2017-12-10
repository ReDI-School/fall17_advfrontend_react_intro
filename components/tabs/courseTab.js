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

const CourseTab = ({
  course: {
    title,
    description,
    objective,
    goals,
    address,
    schedule,
    teachTalk,
    courseImage,
    requirements
  }
}) => {
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
              <h1 style={header1Style}>{title}</h1>
              <p>{description}</p>
            </div>
          </Paper>

          <Paper style={paperStyle}>
            <div style={textStyle}>
              <h4>When</h4>
              <p>{schedule}</p>
              <p>{teachTalk}</p>
              <h4>Where</h4>
              <p>{address}</p>
            </div>
            <img
              style={imageStyle}
              src={courseImage || "static/01_course_mobile/gmap.png"}
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
        <p>{objective}</p>
        <ol>{goals.map((goal, index) => <li key={index}>{goal}</li>)}</ol>
        <p>{requirements}</p>
      </Paper>
    </div>
  )
}

export default CourseTab
