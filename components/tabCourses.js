import React from "react"

import Homework from "../components/customPaper"

const courses = [
  {
    title: "Week 1: Thu 25 September",
    content:
      "The Explanation of homework is cut up to 2 lines of text with 3 dots at the end. Lorem ipsum…"
  },
  {
    title: "Week 1: Thu 28 September",
    content:
      "Once you tap on a card, the card expands, then you can read a whole \
    explanation of the homework. Lorem ipsum dolor sit amet, consetetur \
    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et \
    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam \
    et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea \
    takimata sanctus est Lorem ipsum dolor sit amet.",
    fileSize: "PDF, 2.0MB"
  },
  {
    title: "Week 2: Mon 2 October",
    content:
      "The Explanation of homework is cut up to 2 lines of text with 3 \
    at the end. Lorem ipsum…"
  }
]

const TabCourses = () => {
  return (
    <div>
      {courses.map(({ title, content, fileSize }) => (
        <Homework
          title={title}
          content={content}
          fileSize={fileSize}
          key={title}
        />
      ))}
    </div>
  )
}

export default TabCourses
