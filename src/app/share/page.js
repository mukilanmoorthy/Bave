"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Add these export configs
export const dynamic = 'force-dynamic';
export const runtime = 'edge'; // Optional: use edge runtime

export default function SharePage() {
  const searchParams = useSearchParams();
  const [sharedLink, setSharedLink] = useState("");

  useEffect(() => {
    const url = searchParams?.get("url") ?? "";
    if (url) setSharedLink(url);
  }, [searchParams]);

  return (
    <div>
      <h2>Shared to Bave🫦</h2>
      {sharedLink ? (
        <a href={sharedLink} target="_blank" rel="noopener noreferrer">
          {sharedLink}
        </a>
      ) : (
        <p>No link received</p>
      )}
    </div>
  );
}
