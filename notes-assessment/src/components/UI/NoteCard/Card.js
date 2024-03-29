import './Card.css'


const Card = (props) => {

    return(
        <>
            <div className="notes">
               {props.children}
            </div>
        </>
    )
}


export default Card