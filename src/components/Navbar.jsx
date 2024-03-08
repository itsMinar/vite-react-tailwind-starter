import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="mt-2 flex justify-center">
      <ul className="flex gap-4">
        <li className="rounded-lg bg-gray-800 px-2 py-1">
          <Link to="/">Home</Link>
        </li>
        <li className="rounded-lg bg-gray-800 px-2 py-1">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
