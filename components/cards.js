import React from 'react'

const Card = ({ url, text, image }) => (
  <div>
    <img src="https://i.pinimg.com/736x/e3/d2/f5/e3d2f5cf13f5d47c43fddf1e1e6e5a7b--hello-kitty-images-pink-hello-kitty.jpg" />
    <div>{image}</div>
    <div>{text}</div>
  </div>
)

export default Card
