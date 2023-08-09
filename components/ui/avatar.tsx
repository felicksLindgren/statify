import Image from 'next/image';

type AvatarProps = {
    src: string;
    alt: string;
}

export const Avatar = ({ src, alt }: AvatarProps) => {
    return (
        <Image className="rounded-full" width={48} height={48} src={src} alt={alt} />
    )
}