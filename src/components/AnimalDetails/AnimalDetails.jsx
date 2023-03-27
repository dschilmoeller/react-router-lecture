import {useParams} from 'react-router-dom'

function AnimalDetails() {
    const params = useParams();

    console.log(`Params:`, params);

    return (
    <div>
        <h1>Animal Details</h1>
    </div>
    )
}

export default AnimalDetails