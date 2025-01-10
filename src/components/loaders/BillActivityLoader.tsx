export default function BillActivityLoader() {
  return (
    <div className="d-flex flex-column gap-2 placeholder-glow">
      {[0, 1, 3].map((row) => (
        <span
          key={row}
          className="placeholder bg-secondary-200 rounded-1"
          style={{
            height: '60px',
          }}
        />
      ))}
    </div>
  );
}
