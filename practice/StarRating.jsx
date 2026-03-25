import { Star, StarHalf } from "lucide-react";

const StarRating = ({ rating, maxStars = 5, size = 12 }) => {
  // Calculate star counts
  const roundedRating = Math.round(rating * 2) / 2;
  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {/* Full stars using Array.from */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          className="fill-yellow-400 text-yellow-400"
          strokeWidth={1.5}
        />
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <StarHalf
          key="half"
          size={size}
          className="fill-yellow-400 text-yellow-400"
          strokeWidth={1.5}
        />
      )}

      {/* Empty stars using Array.from */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star
          key={`empty-${i}`}
          size={size}
          className="text-gray-300"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
};

export default StarRating;
