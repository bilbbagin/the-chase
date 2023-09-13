// Photo.tsx
import React from 'react';

interface PhotoProps {
  src: string;
}

function Photo({ src }: PhotoProps) {
  return (
    <div className="photo">
      <img src={src} alt="Photo" />
    </div>
  );
}

export default Photo;
