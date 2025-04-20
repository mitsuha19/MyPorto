import * as React from "react";

type HomeImageBlobProps = {
  fill: string;
  image: string;
};

export default function HomeImageBlob({
  fill,
  image,
}: HomeImageBlobProps): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 200 187"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill={fill}
      style={{ margin: 16 }}
    >
      <mask id="blobMask">
        <path
          d="M27,-46.3C39.6,-39.6,57.5,-41.6,68.6,-35.3C79.7,-29,83.9,-14.5,80.8,-1.8C77.8,11,67.5,22,60.5,35.3C53.5,48.6,49.8,64.3,40.3,65.5C30.8,66.8,15.4,53.6,0.9,52.1C-13.5,50.5,-27.1,60.4,-34.8,58.1C-42.5,55.8,-44.3,41.2,-52.1,29.5C-59.9,17.8,-73.6,8.9,-73.3,0.2C-72.9,-8.5,-58.6,-17,-51.5,-29.9C-44.3,-42.8,-44.5,-60,-37.1,-69.7C-29.7,-79.4,-14.9,-81.6,-3.8,-74.9C7.2,-68.3,14.5,-53,27,-46.3Z"
          transform="translate(100 100) scale(1.2)"
          fill="white"
        />
      </mask>

      <g mask="url(#blobMask)">
        {/* Bentuk blob */}
        <path
          d="M27,-46.3C39.6,-39.6,57.5,-41.6,68.6,-35.3C79.7,-29,83.9,-14.5,80.8,-1.8C77.8,11,67.5,22,60.5,35.3C53.5,48.6,49.8,64.3,40.3,65.5C30.8,66.8,15.4,53.6,0.9,52.1C-13.5,50.5,-27.1,60.4,-34.8,58.1C-42.5,55.8,-44.3,41.2,-52.1,29.5C-59.9,17.8,-73.6,8.9,-73.3,0.2C-72.9,-8.5,-58.6,-17,-51.5,-29.9C-44.3,-42.8,-44.5,-60,-37.1,-69.7C-29.7,-79.4,-14.9,-81.6,-3.8,-74.9C7.2,-68.3,14.5,-53,27,-46.3Z"
          transform="translate(100 100) scale(1.2)"
          fill={fill}
        />

        {/* Gambar profil di dalam blob */}
        <image
          href={image}
          x="0"
          y="0"
          width="200"
          height="200"
          preserveAspectRatio="xMidYMid slice"
        />
      </g>
    </svg>
  );
}
