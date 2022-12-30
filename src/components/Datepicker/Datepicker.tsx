import React, {ChangeEvent, FC} from "react";
import dayjs from "dayjs";
import s from "./Datepicker.module.css"

type DatepickerPropsType = {
    date: string
    changeDate: (date: string) => void
}
export const Datepicker: FC<DatepickerPropsType> = ({date, changeDate}) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const newDate = dayjs(event.currentTarget.value).format().slice(0, -6)
        changeDate(newDate)
    }
    return (
            <input type="date"
                   value={dayjs(date).format("YYYY-MM-DD")}
                   onChange={onChangeHandler}
                   className={s.datepicker}
            />
    )
}