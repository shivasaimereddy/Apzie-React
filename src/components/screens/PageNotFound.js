import React from 'react'
import { Link } from "react-router-dom";


function PageNotFound() {
    return (
        <div class='ml-auto'
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}    >
            <div class="col-md-2 col-md-offset-3">
                <h1>404</h1>
                <p>Page Not Found</p>
                <Link to='/'>Go Back to Home Page</Link>
            </div>
        </div>
    )
}

export default PageNotFound
