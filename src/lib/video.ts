const YOUTUBE_HOSTS = new Set([
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "youtu.be",
  "www.youtu.be",
  "youtube-nocookie.com",
  "www.youtube-nocookie.com",
]);

function youtubeId(url: URL): string | null {
  if (url.hostname === "youtu.be" || url.hostname === "www.youtu.be") {
    return url.pathname.split("/").filter(Boolean)[0] ?? null;
  }

  const watchId = url.searchParams.get("v");
  if (watchId) return watchId;

  const parts = url.pathname.split("/").filter(Boolean);
  if (parts[0] === "embed" || parts[0] === "shorts") {
    return parts[1] ?? null;
  }

  return null;
}

/** Returns a privacy-friendly YouTube or Vimeo embed URL, or null if the link is not allowed. */
export function toEmbedUrl(input: string): string | null {
  try {
    const url = new URL(input);
    if (url.protocol !== "https:") return null;

    if (YOUTUBE_HOSTS.has(url.hostname)) {
      const id = youtubeId(url);
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }

    if (url.hostname === "player.vimeo.com") {
      return url.pathname.startsWith("/video/") ? url.toString() : null;
    }

    if (url.hostname === "vimeo.com" || url.hostname === "www.vimeo.com") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }

    return null;
  } catch {
    return null;
  }
}
