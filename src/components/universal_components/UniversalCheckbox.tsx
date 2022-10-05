import React, {ChangeEvent} from "react";
type UniversalCheckboxProps = {
    checked: boolean
    callback: (isDone: boolean) => void
}
export const UniversalCheckbox = (props: UniversalCheckboxProps) => {
    const onChangeStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callback(event.currentTarget.checked)
    }
    return (
        <input type="checkbox" checked={props.checked} onChange={onChangeStatusHandler}/>
    )
}