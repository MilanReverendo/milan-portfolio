'use client';

import React from 'react';

const YouTubeEmbed: React.FC<{ url: string }> = ({ url }) => {
  // Extract the video ID from the URL
  const videoId = React.useMemo(() => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : '';
  }, [url]);

  return (
    <div
      className="
        w-full
        mb-8
        rounded-lg
        overflow-hidden
        shadow-md
        /* always portrait (9:16) */
        aspect-w-9 aspect-h-16
        /* optionally constrain width on large screens */
        lg:max-w-xs
      "
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default YouTubeEmbed;
