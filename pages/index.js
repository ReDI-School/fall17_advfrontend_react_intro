const Hello = () => <div>
    <h1>Welcome to next.js!</h1>
    <h2>Introducing concepts step by step</h2>
    <ul>
        <li><a href="page1">Page 1</a></li>
        <li><a href="page2">Page 2</a></li>
        <li><a href="page3">Page 3</a></li>
        <li><a href="page4">Page 4</a></li>
        <li><a href="page5">Page 5</a></li>
        <li><a href="page6">Page 6</a></li>
        <li><a href="page7">Page 7</a></li>
        <li><a href="page8">Page 8</a></li>
        <li><a href="page9">Page 9</a></li>
    </ul>
    <h2>Using map and flexbox</h2>
    <ul>
        <li><a href="cards1">Static cards</a></li>
        <li><a href="cards2">Cards</a></li>
    </ul>
</div>

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
