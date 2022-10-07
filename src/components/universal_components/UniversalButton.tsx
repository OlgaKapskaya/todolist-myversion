import React from "react";
import s from './UniversalButton.module.css'

type UniversalButtonProps = {
    name: string
    callback: () => void
    style?: 'active' | 'delete' | ''
}
export const UniversalButton = (props: UniversalButtonProps) => {
    const onClickDelHandler = () => {
        props.callback()
    }
    const styleName = props.style === 'delete' ? s.deleteButton : props.style === 'active' ? s.activeFilter : s.defaultButton +
        ' ' + s.button

    return (
        <button className={styleName} onClick={onClickDelHandler}>{props.name}</button>
    )
}