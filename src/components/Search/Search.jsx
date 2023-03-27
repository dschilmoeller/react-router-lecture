import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import qs from 'querystring'

function Search() {
    const history = useHistory();

    useEffect(() => {
        const searchObject = qs.parse(history.location.search)
        console.log(`searchObject:`, searchObject);
    }, [])

    console.log(`History:`, history);
    return (
        <div>
            <h1>Search</h1>
        </div>
    )
}

export default Search