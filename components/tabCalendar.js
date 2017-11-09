import React from "react"

import Homework from "../components/customPaper"

const events = [
  {
    title: "Week 1: Mon 25 September",
    startTime: "19:00",
    endTime: "21:00",
    address: "Digitales Lernzentrum, Kemperplatz 1a, 7th floor, 10785, Berlin",
    agenda: "Once you tap on a card, the card expands, then you can read a whole explanation of the course agenda. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
  },
  {
    title: "Week 1: Thu 28 September",
    startTime: "19:00",
    endTime: "21:00",
    newAddress: "ReDI HQ, Am Nordbahnhof 3, 3rd floor, 10115, Berlin",
    agenda: "Once you tap on a card, the card expands, then you can read a whole explanation of the course agenda. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
  },
  {
    title: "Week 2: Mon 2 October",
    startTime: "19:00",
    endTime: "21:00",
    address: "Digitales Lernzentrum, Kemperplatz 1a, 7th floor, 10785, Berlin",
    agenda: "Once you tap on a card, the card expands, then you can read a whole explanation of the course agenda. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
  },
  {
    title: "Week 2: Thu 5 October",
    startTime: "19:00",
    endTime: "21:00",
    address: "Digitales Lernzentrum, Kemperplatz 1a, 7th floor, 10785, Berlin",
    agenda: "Once you tap on a card, the card expands, then you can read a whole explanation of the course agenda. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
  }
]

const TabCalendar = () => {
  return (
    <div>
      {events.map(({ title, content, fileSize }) => (
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

export default TabCalendar
