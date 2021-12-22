import React, { useCallback, useState } from 'react';
import { Calendar } from './CalendarElements';

import './css/CalendarEvents.css';

export const CalendarEvents = () => {
    const [selectedDates, setSelectedDates] = useState<string[]>([]);

    const handleChangeSelection = useCallback(
        (start?: string, end?: string) => {
            console.info(start, end);

            setSelectedDates((_) => [start ?? '', end ?? '']);
        },
        [],
    );

    return (
        <React.Fragment>
            <div id="calendar">
                <Calendar
                    useMoveToYear
                    useMoveToMonth
                    highlightToday
                    showDate
                    onChange={handleChangeSelection}
                />

                <dl className="selectedDate-container">
                    <dt>Selected:</dt>
                    <dl>
                        {selectedDates.filter(Boolean).length > 0
                            ? selectedDates.filter(Boolean).join(',')
                            : ''}
                    </dl>
                </dl>
            </div>
        </React.Fragment>
    );
};