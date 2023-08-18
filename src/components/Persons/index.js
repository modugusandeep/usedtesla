import "./index.css";

const Persons = props => {
    const {details}= props
    const {content,imageUrl, name} = details;
    return(
        <li className="list-person-deatils">
            <img className="dp" src={imageUrl} alt="team member"/>
            <h3>{name}</h3>
            <p>{content}</p>
        </li>
    )
}
export default Persons;