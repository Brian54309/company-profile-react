import { Link } from "react-router-dom"

function Broco(){
    return(
    <div>
        <section className="d-flex justify-content-around bg-light">
            <Link to='/'><p>Back to Home</p></Link>
            <Link><p>Panasonic</p></Link>
        </section>
    </div>
    )
}
export default Broco