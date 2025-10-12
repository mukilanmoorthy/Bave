import { Suspense } from 'react';

// Server component that doesn't rely on client-side hooks
export const dynamic = 'force-dynamic';

export default function SharePage({ searchParams }) {
  const url = searchParams?.url || '';
  
  return (
    <div className="share-container">
      <h2>Shared to Bave🫦</h2>
    
    </div>
  );
}
