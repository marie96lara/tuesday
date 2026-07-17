export default function OrbCanvas() {
  return (
    <div className="tuesday-core fade-up" role="img" aria-label="Tuesday Core">
      <div className="tuesday-core__halo" />
      <div className="tuesday-core__ring" />
      <div className="tuesday-core__ring tuesday-core__ring--2" />
      <div className="tuesday-core__ring tuesday-core__ring--3" />
      <div className="tuesday-core__orbit" />
      <div className="tuesday-core__orbit tuesday-core__orbit--reverse" />
      <div className="tuesday-core__disc">
        <div className="tuesday-core__label">
          Tuesday
          <br />
          Core
        </div>
      </div>
    </div>
  );
}
