import React from 'react';

const Message = props => {


    const getStyle = props => {
        let theClass = "alert"
        if(props.message.msgError) theClass = theClass + "alert-danger"
        else theClass = theClass + "alert-primary"
        return theClass
    }


    return (
        <div className={getStyle(props)}>
            {props.message.msgBody}
        </div>
    );
};

export default Message;