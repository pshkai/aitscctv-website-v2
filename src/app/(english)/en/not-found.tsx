import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="container error-page">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>Check the address or explore a solution from the menu.</p>
      <Link className="button" href="/en/">
        Back to home
      </Link>
    </div>
  );
}
