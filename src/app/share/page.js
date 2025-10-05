// app/share/page.js - Server Component
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function SharePage({ searchParams }) {
  const url = searchParams?.url || '';
  
  return (
    <div>
      <h2>Shared to Bave🫦</h2>
      {url ? (
        <Link href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </Link>
      ) : (
        <p>No link received</p>
      )}
    </div>
  );
}
