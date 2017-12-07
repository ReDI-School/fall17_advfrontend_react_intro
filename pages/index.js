import Link from "next/link"

const Hello = () => (
  <div>
    <h1>Welcome to next.js!</h1>
    <h2>Introducing concepts step by step</h2>
    <ul>
      <li>
        <Link href="page1">
          <a>Page 1</a>
        </Link>
      </li>
      <li>
        <Link href="page2">
          <a>Page 2</a>
        </Link>
      </li>
      <li>
        <Link href="page3">
          <a>Page 3</a>
        </Link>
      </li>
      <li>
        <Link href="page4">
          <a>Page 4</a>
        </Link>
      </li>
      <li>
        <Link href="page5">
          <a>Page 5</a>
        </Link>
      </li>
      <li>
        <Link href="page6">
          <a>Page 6</a>
        </Link>
      </li>
      <li>
        <Link href="page7">
          <a>Page 7</a>
        </Link>
      </li>
      <li>
        <Link href="page8">
          <a>Page 8</a>
        </Link>
      </li>
      <li>
        <Link href="page9">
          <a>Page 9</a>
        </Link>
      </li>
      <li>
        <Link href="page10">
          <a>Page 10</a>
        </Link>
      </li>
      <li>
        <Link href="page11">
          <a>Page 11</a>
        </Link>
      </li>
      <li>
        <Link href="page12">
          <a>Page 12</a>
        </Link>
      </li>
    </ul>
    <h2>Using map and flexbox</h2>
    <ul>
      <li>
        <a href="cards1">Static cards</a>
      </li>
      <li>
        <a href="cards2">Cards</a>
      </li>
    </ul>
  </div>
)

// This page is implemented using a "fat-arrow" function,
// a new, more compact kind of function that was introduced in ES6.
// You could also have implemented it using classic functions, e.g.
//
// const Hello = function() {
//   return <div> ... </div>
// }
//
// Also, please note that this page uses the special name index.js.
// This means you can access it either as localhost:3000/index or just as localhost:3000/

export default Hello
