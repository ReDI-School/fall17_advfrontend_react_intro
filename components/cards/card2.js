const Card = ({ imageUrl, title, text }) => (
  <div className="card">
    <img src={imageUrl} height="200" alt="Avatar" />
    <div className="text-container">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
)

export default Card
