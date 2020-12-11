import { Link } from 'react-router-dom';
;
function Procedures(props) {
    const procedureItems = props.proceduresList.map((p, index) => {
        return <li key={index}><Link to={`/procedures/${p.id}`}>{p.name}</Link></li>
    })

    return(
        <>
            <div>
                {procedureItems}
            </div>
        </>
    )
}


export default Procedures;