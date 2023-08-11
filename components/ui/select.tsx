'use client'

type OptionProps = {
    label: string;
    options: {
        value: string;
        label: string;
    }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ label, options, onChange }: OptionProps) => {
    return (
        <div className="flex flex-col min-w-200">
            <label htmlFor={label}>{label}</label>
            <select className="border min-w-[100px] border-slate-500 rounded-md p-1" id={label} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}