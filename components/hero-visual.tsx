import { heroCapabilities } from "@/data/content";

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="CGE candidate match dashboard preview">
      <div className="visual-toolbar">
        <span />
        <span />
        <span />
        <strong>match.json</strong>
      </div>
      <div className="score-orbit">
        <div className="score-core">
          <span>Overall</span>
          <strong>0.82</strong>
        </div>
        <div className="orbit-node node-a">Direct 0.75</div>
        <div className="orbit-node node-b">Transfer 0.88</div>
        <div className="orbit-node node-c">Meta 0.71</div>
      </div>
      <div className="capability-list">
        {heroCapabilities.map((item) => (
          <div className="capability-row" key={item.name}>
            <div>
              <span>{item.name}</span>
              <strong>{item.score / 100}</strong>
            </div>
            <div className="meter">
              <i style={{ width: `${item.score}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
