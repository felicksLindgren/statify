'use client'

import { useRouter } from 'next/navigation';
import { Select } from './ui/select'

export const TimeRangeSelector = () => {
    const { push } = useRouter();
    const timeRangeOptions = [
        { value: 'short_term', label: 'Last Month' },
        { value: 'medium_term', label: 'Last 6 Months' },
        { value: 'long_term', label: 'All Time' },
    ];

    const handleTimeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        params.set('time_range', e.target.value);

        push(`/?${params.toString()}`);
    }

    return (
        <Select
            label="Time Range"
            options={timeRangeOptions}
            onChange={handleTimeRangeChange}
        />
    )
}