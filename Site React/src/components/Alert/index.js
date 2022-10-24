import React, { useEffect, useState } from 'react';

function Alert({ text }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true)

        setTimeout(() => {
            setShow(false)
        }, 3000)
    }, [])

  return ( show && <div className="alert alert-success" role="alert">
  {text}
  </div>);
}

export default Alert;