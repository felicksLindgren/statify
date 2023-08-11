'use client'

import { useRouter } from 'next/navigation';
import { Select } from './ui/select'

export const LimitSelector = () => {
    const { push } = useRouter();

    const options = [
        { value: '10', label: '10' },
        { value: '20', label: '20' },
        { value: '50', label: '50' },
    ];

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        params.set('limit', e.target.value);

        push(`/?${params.toString()}`);
    }

    return (
        <Select options={options} label="Limit" onChange={handleOnChange} />
    )
}