// pages/api/wishlist.js
import {createClient} from '@sanity/client';

const client = createClient({
  projectId: 'quz7sxyd',
  dataset: 'production',
  token: 'Dev',
  useCdn: false,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle fetching wishlist items
    const wishlistItems = await client.fetch('*[_type == "wishlist"]');
    res.status(200).json({wishlistItems});
  } else if (req.method === 'POST') {
    // Handle adding an item to the wishlist
    const {productId, userId} = req.body;
    const result = await client.create({_type: 'wishlist', productId, userId});
    res.status(201).json(result);
  } else if (req.method === 'DELETE') {
    // Handle removing an item from the wishlist
    const {itemId} = req.body;
    const result = await client.delete(itemId);
    res.status(200).json(result);
  } else {
    res.status(405).json({message: 'Method Not Allowed'});
  }
}
