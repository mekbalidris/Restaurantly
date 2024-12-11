import { Link } from "react-router-dom";


export default function Access(){

    return(
        <>
        <div className="flex flex-col mt-32 ml-60 gap-9">
        <Link to="/login">
            <button className="bg-red-700">Login</button>
        </Link>
        <Link to="/signup">
            <button className="bg-red-700">Signup</button>
        </Link>
        </div>
        </>
    )
}