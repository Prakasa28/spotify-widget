interface BackButtonProps {
  onClick: () => void;
  color?: string;
  size?: number;
}

function BackButton(props: BackButtonProps) {
  const { onClick, color = "#000000", size = 24 } = props;

  return (
    <button
      onClick={onClick}
      style={{
        border: "none",
        background: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-left"
        aria-label="Back"
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    </button>
  );
}

export default BackButton;
