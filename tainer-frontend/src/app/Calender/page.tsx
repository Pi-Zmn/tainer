'use client'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import styles from './page.module.scss';

export default function Calender() {
    return (
        <div>
            <h1>Krasser Kalender von Robo</h1>
            <div className={styles.calenderContainer}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                </LocalizationProvider>
            </div>
        </div>
    )
}
