import { useState, useEffect } from "react";

export const usePaddleProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://vendors.paddle.com/api/2.0/product/get_products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            vendor_id: "YOUR_VENDOR_ID", // Replace with your Paddle Vendor ID
            vendor_auth_code: "YOUR_AUTH_CODE", // Replace with your Paddle Auth Code
          }),
        });

        const data = await response.json();

        if (data.success) {
          setProducts(data.response.products); // Save the list of products
        } else {
          setError(data.error.message || "Failed to fetch products");
        }
      } catch (err) {
        console.error("Error fetching Paddle products:", err);
        setError("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  return { products, error };
};

// import { usePaddleProducts } from "@/hooks/usePaddleProducts";

// export const SubscribeBanner = () => {
//   const { products, error } = usePaddleProducts();

//   if (error) {
//     return (
//       <Box textAlign="center" color="error.main" py={2}>
//         <Typography>{error}</Typography>
//       </Box>
//     );
//   }

//   if (!products.length) {
//     return (
//       <Box textAlign="center" py={2}>
//         <Typography>Loading plans...</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box>
//       {products.map((product) => (
//         <SubscriptionPlanCard
//           key={product.id}
//           title={product.name}
//           originalPrice={product.base_price}
//           discountedPrice={product.sale_price}
//           pricePerDay={calculatePricePerDay(product.sale_price, product.billing_period)}
//           onClick={() => handlePlanSelect(product.id, product.name)}
//         />
//       ))}
//     </Box>
//   );
// };
