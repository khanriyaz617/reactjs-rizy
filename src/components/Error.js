import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const errDetails = useRouteError();
    return (
        <div>
            <h1>Oops Something went wrong!</h1>
            <h2>404 Not Found.</h2>
            <h3 style={{ color:"red" }}> Status - {errDetails.status} | {errDetails.statusText} </h3>
        </div>
    );
}
export default Error;