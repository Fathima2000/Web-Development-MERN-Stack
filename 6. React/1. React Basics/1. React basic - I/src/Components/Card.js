import './Card.css'

function Card(props) {
  return (
    <div className="card">
        {props.children} 
        {/* Card has Item Components as contents,, if contents needs to b displayed use props.children */}
    </div>
  )
}

export default Card