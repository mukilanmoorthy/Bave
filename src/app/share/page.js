"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SharePage() {
  const searchParams = useSearchParams();
  const [sharedLink, setSharedLink] = useState("");

  useEffect(() => {
    const url = searchParams.get("url");
    if (url) setSharedLink(url);
  }, [searchParams]);

  return (
    <div>
      <h2>Shared to Bave🫦</h2>
      {sharedLink ? (
        <>
          <p>Received Link:</p>
          <a href={sharedLink} target="_blank" rel="noopener noreferrer">
            {sharedLink}
          </a>
        </>
      ) : (
        <p>No link received</p>
      )}
    </div>
  );
}
