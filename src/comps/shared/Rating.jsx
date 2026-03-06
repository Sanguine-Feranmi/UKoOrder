import { Star } from 'lucide-react';

export default function Rating({ rating, size = 16, showNumber = true }) {
  return (
    <div className="flex items-center gap-1">
      <Star className="text-yellow-400 fill-yellow-400" size={size} />
      {showNumber && <span className="font-semibold">{rating}</span>}
    </div>
  );
}
