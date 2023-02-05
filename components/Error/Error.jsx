export default function Error({ message, code, status }) {
  return (
    <div>
      <p>An error has occurred:</p>
      <p>{message}</p>
      <p>{status}</p>
    </div>
  );
}
