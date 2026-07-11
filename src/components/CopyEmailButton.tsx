"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "rojeanpenano@gmail.com";

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (very old browser / insecure context).
      // The mailto link beside this button remains the fallback path.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className="rounded border border-hairline px-3 py-1 font-mono text-xs text-ink-muted transition-colors hover:border-accent hover:text-accent"
    >
      {copied ? "copied ✓" : "copy"}
    </button>
  );
}