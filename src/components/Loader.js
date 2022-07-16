import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ loading }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <ClipLoader color="#0C6EFD" loading={loading} size={100} />
        </div>
    )
}

export default Loader