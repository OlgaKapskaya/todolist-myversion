import React from "react";
import s from './UniversalButton.module.css'

type UniversalButtonProps = {
    name: string
    callback: () => void
    image?: string
    style?: 'active' | 'delete' | ''
}
export const UniversalButton = (props: UniversalButtonProps) => {
    const onClickDelHandler = () => {
        props.callback()
    }
    const styleName = props.style === 'delete' ? s.deleteButton : props.style === 'active' ? s.activeFilter : s.defaultButton


    return (
        <button className={styleName} onClick={onClickDelHandler} >{props.name}
            {props.image && <img className={s.img} src={props.image} alt={'delete item'}/>}
        </button>
    )
}