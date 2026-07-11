type Delay = { style: React.CSSProperties };

const delay = (s: number): Delay => ({ style: { animationDelay: `${s}s` } });

function lineStyle(length: number, delaySeconds: number): React.CSSProperties {
  return {
    "--line-length": length,
    animationDelay: `${delaySeconds}s`,
  } as React.CSSProperties;
}

export default function RiceUpSchematic() {
  return (
    <div className="overflow-x-auto">
      <svg
        viewBox="0 0 700 400"
        role="img"
        aria-label="Rice Up architecture: a mobile web client connects over REST to four services — a Flask disease-detection API, a Flask pest-detection API, a Node.js price API, and Firebase for authentication and storage. The two Flask inference services run in an isolated on-demand cloud runtime."
        className="h-auto w-full min-w-[640px]"
      >
        {/* ── Client node ── */}
        <g className="animate-fade-settle" {...delay(0)}>
          <rect
            x="250"
            y="24"
            width="200"
            height="56"
            rx="4"
            className="fill-surface stroke-hairline"
          />
          <text
            x="350"
            y="48"
            textAnchor="middle"
            className="fill-ink font-mono"
            fontSize="12"
            letterSpacing="2"
          >
            MOBILE WEB CLIENT
          </text>
          <text
            x="350"
            y="66"
            textAnchor="middle"
            className="fill-ink-muted font-mono"
            fontSize="9"
          >
            HTML · CSS · JS — Filipino UI
          </text>
        </g>

        {/* ── Connection lines ── */}
        <g className="stroke-hairline" strokeWidth="1" fill="none">
          <path
            d="M350 80 V116"
            className="animate-line-draw"
            style={lineStyle(40, 0.4)}
          />
          <path
            d="M97 116 H603"
            className="animate-line-draw"
            style={lineStyle(510, 0.6)}
          />
          <path
            d="M97 116 V170"
            className="animate-line-draw"
            style={lineStyle(60, 1.0)}
          />
          <path
            d="M237 116 V170"
            className="animate-line-draw"
            style={lineStyle(60, 1.15)}
          />
          <path
            d="M420 116 V170"
            className="animate-line-draw"
            style={lineStyle(60, 1.3)}
          />
          <path
            d="M603 116 V170"
            className="animate-line-draw"
            style={lineStyle(60, 1.45)}
          />
        </g>

        {/* ── REST annotation ── */}
        <text
          x="350"
          y="106"
          textAnchor="middle"
          className="animate-fade-settle fill-ink-muted font-mono"
          fontSize="9"
          {...delay(0.9)}
        >
          REST · JSON
        </text>

        {/* ── Isolated inference boundary ── */}
        <g className="animate-fade-settle" {...delay(1.5)}>
          <rect
            x="20"
            y="150"
            width="297"
            height="150"
            rx="4"
            fill="none"
            strokeDasharray="4 4"
            className="stroke-hairline"
          />
          <text
            x="168"
            y="290"
            textAnchor="middle"
            className="fill-ink-muted font-mono"
            fontSize="9"
          >
            isolated inference — on-demand cloud runtime
          </text>
        </g>

        {/* ── Disease API (core feature — accent) ── */}
        <g className="animate-fade-settle" {...delay(1.6)}>
          <rect
            x="32"
            y="170"
            width="130"
            height="84"
            rx="4"
            className="fill-surface stroke-accent"
          />
          <text x="97" y="196" textAnchor="middle" className="fill-ink font-mono" fontSize="11" letterSpacing="1.5">
            DISEASE API
          </text>
          <text x="97" y="216" textAnchor="middle" className="fill-ink-muted font-mono" fontSize="9">
            Flask · VGG16
          </text>
          <text x="97" y="232" textAnchor="middle" className="fill-ink-muted font-mono" fontSize="9">
            9-class classifier
          </text>
        </g>

        {/* ── Pest API ── */}
        <g className="animate-fade-settle" {...delay(1.7)}>
          <rect
            x="172"
            y="170"
            width="130"
            height="84"
            rx="4"
            className="fill-surface stroke-hairline"
          />
          <text x="237" y="196" textAnchor="middle" className="fill-ink font-mono" fontSize="11" letterSpacing="1.5">
            PEST API
          </text>
          <text x="237" y="216" textAnchor="middle" className="fill-ink-muted font-mono" fontSize="9">
            Flask · CNN
          </text>
          <text x="237" y="232" textAnchor="middle" className="fill-ink-muted font-mono" fontSize="9">
            binary classifier
          </text>
        </g>

        {/* ── Price API ── */}
        <g className="animate-fade-settle" {...delay(1.8)}>
          <rect
            x="355"
            y="170"
            width="130"
            height="84"
            rx="4"
            className="fill-surface stroke-hairline"
          />
          <text x="420" y="196" textAnchor="middle" className="fill-ink font-mono" fontSize="11" letterSpacing="1.5">
            PRICE API
          </text>
          <text x="420" y="216" textAnchor="middle" className="fill-ink-muted font-mono" fontSize="9">
            Node.js · regression
          </text>
          <text x="420" y="232" textAnchor="middle" className="fill-ink-muted font-mono" fontSize="9">
            Bantay Presyo CSV
          </text>
        </g>

        {/* ── Firebase ── */}
        <g className="animate-fade-settle" {...delay(1.9)}>
          <rect
            x="538"
            y="170"
            width="130"
            height="84"
            rx="4"
            className="fill-surface stroke-hairline"
          />
          <text x="603" y="196" textAnchor="middle" className="fill-ink font-mono" fontSize="11" letterSpacing="1.5">
            FIREBASE
          </text>
          <text x="603" y="216" textAnchor="middle" className="fill-ink-muted font-mono" fontSize="9">
            Auth · Firestore
          </text>
          <text x="603" y="232" textAnchor="middle" className="fill-ink-muted font-mono" fontSize="9">
            calendar · user data
          </text>
        </g>
      </svg>
    </div>
  );
}