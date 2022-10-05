import React from "react";

type UniversalButtonProps = {
    name: string
    callback: () => void
}
export const UniversalButton = (props: UniversalButtonProps) => {
    const onClickDelHandler = () => {
        props.callback()
    }
    return (
        <button onClick={onClickDelHandler}>{props.name}</button>
    )
}