// components/Wishlist.js
import {useState, useEffect} from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      const response = await fetch('/api/wishlist');
      const data = await response.json();
      setWishlistItems(data.wishlistItems);
    };

    fetchWishlist();
  }, []);

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item._id}>{item.productId}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
