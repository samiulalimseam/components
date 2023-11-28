import { useState, useEffect } from 'react';
import { Box, Text, Button, Input, Textarea, Stack } from '@chakra-ui/react';

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    review: '',
    rating: 1, // Default rating
    // other fields as needed for your review structure
  });

  // Fetch reviews from API
  const fetchReviews = async () => {
    try {
      const response = await fetch('https://celeritify-66d759c4d2b5.herokuapp.com/api/reviews');
      const data = await response.json();
      setReviews(data.data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // Function to handle posting a new review
  const postReview = async () => {
    try {
      const response = await fetch('https://celeritify-66d759c4d2b5.herokuapp.com/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        // If successful, refresh reviews
        fetchReviews();
        // Clear the input fields
        setNewReview({
          review: '',
          rating: 1,
          // other fields as needed for your review structure
        });
      }
    } catch (error) {
      console.error('Error posting review:', error);
    }
  };

  // Fetch reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <Box>
      {/* Form for writing a new review */}
      <Stack spacing={4} mb={6}>
        <Text fontSize="xl">Write a Review</Text>
        <Textarea
          placeholder="Write your review here..."
          value={newReview.review}
          onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
        />
        {/* Rating selection (you can use Chakra UI components or any other UI library) */}
        {/* Add code for rating selection */}
        <Button colorScheme="blue" onClick={postReview}>
          Post Review
        </Button>
      </Stack>

      {/* Display reviews */}
      <Box>
        <Text fontSize="xl">Reviews</Text>
        {reviews.map((review) => (
          <Box key={review._id} borderWidth="1px" borderRadius="md" p={3} my={2}>
            <Text fontWeight="bold">{review.customer_name}</Text>
            <Text>Rating: {review.rating}</Text>
            <Text>{review.review}</Text>
            {/* Add other review details you want to display */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewComponent;
