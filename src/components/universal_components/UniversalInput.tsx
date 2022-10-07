import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './UniversalInput.module.css'


type UniversalInputProps = {
    value: string
    onChangeText: (text: string) => void
    onEnter: () => void
}
export const UniversalInput = (props: UniversalInputProps) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChangeText(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.onEnter()
        }

    }

    return (
        <>
            <input value={props.value}
                   onChange={onChangeInputHandler}
                   onKeyPress={onKeyPressHandler}/>

        </>
    )
}