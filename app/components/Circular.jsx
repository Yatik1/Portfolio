export default function Circular({ x, y }) {
  return (
    <div
      className="w-8 h-8 rounded-full pointer-events-none"
      style={{
       position: "fixed",
       top: y,
       left: x,
       transform: "translate(-50%, -50%)",
       zIndex: 9999,
       backgroundColor: "rgba(0, 0, 0, 0.15)",
       border: "1px solid rgba(255, 255, 255, 0.3)",
       backdropFilter: "blur(4px)",
       WebkitBackdropFilter: "blur(4px)",
       boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    />
  );
}
