"use client";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body>
        {isMounted ? children : null}
      </body>
    </html>
  );
}
