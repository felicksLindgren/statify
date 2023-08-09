import { Avatar } from '@/components/ui/avatar';
import { getToken } from '@/lib/utils'
import { SpotiyUser } from '@/types';
import Link from 'next/link';

const getUser = async (): Promise<SpotiyUser> => {
  const token = await getToken();
  const res = await fetch(`${process.env.SPOTIFY_API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token?.access_token}`
    }
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const user = await res.json();
  return user;
}

export default async function Home() {
  const user = await getUser();

  return (
    <main className="flex p-8">
      <div className="flex grow flex-row items-center justify-between">
        <Link className="text-xl" target="_blank" href={user.external_urls.spotify}><span>@ </span>{user.display_name}</Link>
        <Avatar alt={user.display_name[0]} src={user.images.length > 0 ? user.images[0].url : ''} />
      </div>
    </main>
  )
}
