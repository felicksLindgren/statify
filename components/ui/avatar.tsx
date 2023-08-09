import { SpotiyUser } from '@/types';
import Image from 'next/image';

type AvatarProps = {
    src?: string;
    alt: string;
    rounded?: 'rounded-full' | 'rounded-md';
}

export const Avatar = ({ src, alt, rounded = 'rounded-full' }: AvatarProps) => {
    if (src) {
        return (
            <Image className={rounded} src={src} alt={alt} width={48} height={48} />
        )
    }

    return (
        <div className={`bg-gray-200 ${rounded} w-12 h-12 flex items-center justify-center`}>
            <span className="text-gray-600 font-bold text-2xl">{alt.toUpperCase()}</span>
        </div>
    )
}