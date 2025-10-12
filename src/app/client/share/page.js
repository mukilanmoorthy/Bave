import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SharePage() {
  const router = useRouter();
  const [shareData, setShareData] = useState(null);

  useEffect(() => {
    const query = router.query;
    const { title, text, url } = query;

    if (title || text || url) {
      const newShare = { title, text, url, time: new Date().toString() };
      const storedShares = JSON.parse(localStorage.getItem("bave_shares")) || [];
      storedShares.push(newShare);
      localStorage.setItem("bave_shares", JSON.stringify(storedShares));
      setShareData(newShare);
    }
  }, [router.query]);

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
