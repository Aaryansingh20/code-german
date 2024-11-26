import React from 'react';

const CodeGermanLogo: React.FC = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 300 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="150" cy="140" rx="150" ry="140" fill="white" />
      <g transform="translate(90, 70)">
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            stroke="#6D98D7"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M8 8h8M8 12h4"
            stroke="#6D98D7"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 20h16c1.1 0 2-.9 2-2v-1H2v1c0 1.1.9 2 2 2z"
            fill="#6D98D7"
          />
          <circle cx="18" cy="6" r="2" fill="#6D98D7" />
        </svg>
      </g>
      <text
        x="150"
        y="210"
        fontFamily="'Comic Sans MS', cursive"
        fontSize="36"
        fill="#6D98D7"
        textAnchor="middle"
        fontWeight="bold"
      >
        CODE
      </text>
      <text
        x="150"
        y="250"
        fontFamily="'Comic Sans MS', cursive"
        fontSize="30"
        fill="#6D98D7"
        textAnchor="middle"
      >
        GERMAN
      </text>
    </svg>
  );
};

export default CodeGermanLogo;

