// A theater-program credit: role on the left, a dotted leader, and who/where on the right.
export default function CreditLine({ role, who }) {
  return (
    <div className="credit-line">
      <span className="role">{role}</span>
      <span className="leader" aria-hidden="true"></span>
      <span className="who">{who}</span>
    </div>
  );
}
