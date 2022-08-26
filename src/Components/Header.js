import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth } from '@fortawesome/free-solid-svg-icons'

export default function Headers(){
    return (
        <header>
            <FontAwesomeIcon icon={faEarth} />
            <h2>my travel journal.</h2>
        </header>
    )
}