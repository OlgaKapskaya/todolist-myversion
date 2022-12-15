import React, {ChangeEvent, KeyboardEvent, FC, useState, memo} from "react";
import {Form} from "react-bootstrap";

type InputPropsType = {
    label: string
    addItem: (title: string) => void
}
export const Input: FC<InputPropsType> = memo(({
                                              label,
                                              addItem
                                          }) => {
    const [value, setValue] = useState<string>("")
    const [isError, setIsError] = useState<string>("")

    const addItemHandler = (): void => {
        if (value.trim() !== "") {
            addItem(value.trim());
            setValue("");
        } else {
            setIsError("Incorrect value")
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setValue(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setIsError("")
        if (event.key === "Enter") {
            addItemHandler();
            setValue("");
        }
    }

    return (
        <>
            <Form.Control type="text"
                          size="sm"
                          as="input"
                          value={value}
                          placeholder={label}
                          onChange={onChangeHandler}
                          onBlur={() => setIsError("")}
                          onKeyPress={onKeyPressHandler}
            />
            {
                isError
                && <Form.Text muted>
                    {isError}
                </Form.Text>
            }

        </>
    )
})