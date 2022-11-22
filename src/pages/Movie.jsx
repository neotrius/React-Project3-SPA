import {
    useNavigate,
    useParams,
    useMatch,
    useLocation
} from 'react-router-dom'

function Movie() {

    const {id} = useParams()
    const navigate = useNavigate()
    const value = useMatch('')
    const value2 = useLocation()

    console.log(value, value2)

    return (
        <>
            <h1>Movie id: {id}</h1>
            <button className="btn" onClick={() => navigate(-1)}>
                Go back
            </button>
        </>
    )

}

export default Movie
