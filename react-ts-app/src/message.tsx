import React, { type FC } from 'react'

type MessageModel = {
    msg : string
    from  :string
    to : string
}

type MessageType = {
    msgdetails : MessageModel
}

const message:FC<MessageType> = (props:MessageType) => {
  return (
    <div>
        {props.msgdetails.msg}
    </div>
  )
}

export default message
