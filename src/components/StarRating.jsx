import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating, outOf = 5 }) => {
   const fullStars = Math.floor(rating);
   const hasHalfStar = rating % 1 >= 0.5;
   const emptyStars = outOf - fullStars - (hasHalfStar ? 1 : 0);

   return (
      <div className="flex items-center text-yellow-500">
         {Array(fullStars)
            .fill()
            .map((_, i) => (
               <FaStar key={`full-${i}`} />
            ))}
         {hasHalfStar && <FaStarHalfAlt key="half" />}
         {Array(emptyStars)
            .fill()
            .map((_, i) => (
               <FaRegStar key={`empty-${i}`} />
            ))}
      </div>
   );
};

export default StarRating;
