import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import s from './UniversalInput.module.css'


type UniversalInputProps = {
    value: string
    onChangeText: (text: string) => void
    onEnter: () => void
    error: string
}
export const UniversalInput = (props: UniversalInputProps) => {
    const [error, setError] = useState<string>('');
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChangeText(event.currentTarget.value)
        if (event.currentTarget.value.trim() !== '') setError('')
        else setError(props.error)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.onEnter()
        }
    }
    const onBlurHandler = () => {
        setError('')
    }

    return (
        <>
            {error && <div className={s.errorMessage}>{error}</div>}
            <input
                className={error ? s.inputError : s.input}
                value={props.value}
                onChange={onChangeInputHandler}
                onKeyPress={onKeyPressHandler}
                onBlur={onBlurHandler}/>

        </>
    )
}