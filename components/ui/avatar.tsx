import Image from 'next/image';

type AvatarProps = {
    src: string;
    alt: string;
    rounded?: 'rounded-full' | 'rounded-md';
}

export const Avatar = ({ src, alt, rounded = 'rounded-full' }: AvatarProps) => {
    return (
        <Image className={rounded} width={48} height={48} src={src} alt={alt} />
    )
}