import { LimitSelector } from '@/components/limit-selector';
import { TimeRangeSelector } from '@/components/timerange-selector';
import { Avatar } from '@/components/ui/avatar';
import { getToken } from '@/lib/utils'
import { Pagination, SpotiyUser, Track } from '@/types';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

type HomeProps = {
  searchParams: {
    time_range: 'short_term' | 'medium_term' | 'long_term';
    limit: 10 | 20 | 50;
  }
}

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

const getTopTracks = async (
  type: 'artists' | 'tracks',
  time_range: 'short_term' | 'medium_term' | 'long_term' = 'short_term',
  limit: 10 | 20 | 50 = 10
): Promise<Pagination<Track>> => {
  const token = await getToken();

  const res = await fetch(`${process.env.SPOTIFY_API_URL}/me/top/${type}?limit=${limit}&time_range=${time_range}`, {
    headers: {
      Authorization: `Bearer ${token?.access_token}`
    }
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json() as Pagination<Track>;
  return data;
}

export default async function Home({ searchParams }: HomeProps) {
  const session = await getServerSession();

  if (session?.error) {
    return <div>{session.error}</div>
  }

  const user = await getUser();
  const topTracks = await getTopTracks('tracks', searchParams?.time_range, searchParams?.limit);

  return (
    <main className="flex p-8 flex-col gap-4">
      <div className="flex grow flex-row items-center justify-between">
        <Link className="text-xl" target="_blank" href={user.external_urls.spotify}>@{user.display_name}</Link>
        <Avatar alt={user.display_name[0]} src={user.images.length > 0 ? user.images[0].url : ''} />
      </div>
      <div>
        <h2 className="text-2xl">Top Tracks</h2>
        Showing {topTracks.limit} of {topTracks.total} tracks
      </div>
      <div className="flex justify-between">
        <LimitSelector />
        <TimeRangeSelector />
      </div>
      <table className="w-full border-separate border-spacing-x-2 border-spacing-y-1">
        <thead>
          <tr>
            <th className="text-left">Rank</th>
            <th className="text-left">Album</th>
            <th className="text-left">Track</th>
          </tr>
        </thead>
        <tbody>
          {topTracks.items.map((track: Track, index: number) => (
            <tr key={track.id}>
              <td className="text-left">{index + 1}</td>
              <td className="text-left">
                <Avatar rounded="rounded-md" alt={track.name[0]} src={track.album.images.length > 0 ? track.album.images[0].url : ''} />
              </td>
              <td className="text-left">
                <Link className="text-xl" target="_blank" href={track.external_urls.spotify}>{track.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
