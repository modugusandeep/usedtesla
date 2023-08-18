import './index.css'

const CarSlick = props => {
  const {item} = props
  const {name, imgs} = item

  return (
    <div className="planet-container">
      <img className="image" src={imgs} alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
    </div>
  )
}

export default CarSlick;