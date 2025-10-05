import { Suspense } from 'react';
import ShareClient from './share-client';

// Server component that doesn't rely on client-side hooks
export const dynamic = 'force-dynamic';

export default function SharePage({ searchParams }) {
  const url = searchParams?.url || '';
  
  return (
    <div className="share-container">
      <h2>Shared to Bave🫦</h2>
      <Suspense fallback={<p>Loading...</p>}>
        {/* Hydration-safe approach */}
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        ) : (
          <ShareClient />
        )}
      </Suspense>
    </div>
  );
}
