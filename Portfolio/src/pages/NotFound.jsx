import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background text-foreground px-4">
    <h1 className="text-6xl font-bold text-primary">404</h1>
    <p className="text-foreground/70">This page doesn't exist.</p>
    <Link to="/" className="cosmic-button">Back to Home</Link>
  </div>
);

export default NotFound;
