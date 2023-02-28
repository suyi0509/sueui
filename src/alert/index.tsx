import React from 'react'

const Alert = (props: any) => {
    const { text, ...res } = props
    return <div>{text}</div>

}

export default Alert