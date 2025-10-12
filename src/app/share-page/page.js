"use client";
export const dynamic = "force-dynamic";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ShareContent() {
  const searchParams = useSearchParams();
  const [shareData, setShareData] = useState(null);

  useEffect(() => {
    const title = searchParams.get("title");
    const text = searchParams.get("text");
    const url = searchParams.get("url");

    if (title || text || url) {
      const newShare = { title, text, url, time: new Date().toString() };
      const storedShares = JSON.parse(localStorage.getItem("bave_shares")) || [];
      storedShares.push(newShare);
      localStorage.setItem("bave_shares", JSON.stringify(storedShares));
      setShareData(newShare);
    }
  }, [searchParams]);

  if (!shareData) return <p>Processing shared content...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shared content saved ✅</h2>
      <p><strong>Title:</strong> {shareData.title}</p>
      <p><strong>Text:</strong> {shareData.text}</p>
      <p><strong>URL:</strong> {shareData.url}</p>
      <Link href="/">Go to Home</Link>
    </div>
  );
}

export default function SharePage() {
  return (
    <Suspense fallback={<p>Loading shared content...</p>}>
      <ShareContent />
    </Suspense>
  );
}
