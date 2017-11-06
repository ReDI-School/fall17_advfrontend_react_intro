import React from "react"

import Homwwork from "../components/homework"

// this data could be retrieved from a database or an API or ...
const TabHomework = () => {
  const homeworks = [
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

  /* I used the title as a key because it is the most unique property in our homeworks object,
   to understand why we use keys in react please
    take a look at this short answer in stackoverflow
     https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
  */

  // If you don't understand why i used { title, content, fileSize } please take a look at this reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  return (
    <div>
      {homeworks.map(({ title, content, fileSize }) => (
        <Homwwork
          title={title}
          content={content}
          fileSize={fileSize}
          key={title}
        />
      ))}
    </div>
  )
}
export default TabHomework
