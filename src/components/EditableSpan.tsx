import React, {ChangeEvent, useState, KeyboardEvent} from "react";

type EditableSpanPropsType = {
    title: string
    changeTitle: (title: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
    const [show, setShow] = useState(true)
    const [value, setValue] = useState("")

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    const onBlurHandler = () => {
        if (value.trim() !== "") {
            props.changeTitle(value)
            setShow(true)
        }
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onBlurHandler()
        }
    }
    const onDoubleClickHandler = () => {
        setShow(false)
        setValue(props.title)
    }
    return (
        <>
            {show ?
                <span onDoubleClick={onDoubleClickHandler}> {props.title} </span> :
                <input
                    value={value}
                    onBlur={onBlurHandler}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    autoFocus={true}/>}
        </>
    )
}