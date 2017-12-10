import React from "react"

import Homework from "../../components/cards/homeworkCard"

const HomeworkTab = ({ course: { assignments } }) => {
  /* I used the title as a key because it is the most unique property in our homeworkList object,
   to understand why we use keys in react please
    take a look at this short answer in stackoverflow
     https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
  */

  // If you don't understand why i used { title, content, fileSize } please take a look at this reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  return (
    <div>
      {/* {assignments.map(({ title, content, fileSize }) => (
        <Homework
          title={title}
          content={content}
          fileSize={fileSize}
          key={title}
        />
      ))} */}
    </div>
  )
}
export default HomeworkTab
