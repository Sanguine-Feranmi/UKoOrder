import { Home, Search } from 'lucide-react';
import Button from '../shared/Button';

export default function NotFound({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <div className="mt-4">
            <Search className="mx-auto text-gray-400" size={64} />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button onClick={() => onNavigate('home')}>
            <Home size={18} />
            Go Home
          </Button>
          <Button variant="secondary" onClick={() => onNavigate('restaurants')}>
            Browse Restaurants
          </Button>
        </div>
      </div>
    </div>
  );
}
