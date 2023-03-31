import React from 'react'

const Alert = (props) => {

    const Captalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div style={{height:"40px"}}>
       { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Captalize(props.alert.type)}</strong> : {props.alert.message}
        </div>}
        </div>
    )
}

export default Alert
