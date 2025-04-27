import { useState, useEffect } from "react";

export const usePaddleProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Здесь должна быть реальная загрузка с твоего backend API
        // Например: const response = await fetch("/api/paddle-products");
        // const data = await response.json();

        // Пока что мок-данные:
        const data = [
          {
            id: "pri_01jsvts1xeyew8qbn4ttxxthdg",
            id_sale: "pri_01jsw5exr1a94mr892wfjqxac2",
            title: "1-WEEK",
            originalPrice: 9.99,
            discountedPrice: 4.99,
            introPeriod: 7,
            periodLabel: "7 days",
          },
          {
            id: "pri_01jsvttjrbwse0faqz7az2s1j5",
            id_sale: "pri_01jsw5gf9w0cqd9g6b2vyhahjb",
            title: "1-MONTH",
            originalPrice: 29.99,
            discountedPrice: 17.99,
            introPeriod: 30,
            periodLabel: "1 month",
          },
          {
            id: "pri_01jsvtvwqg80tntt9ap4f06cj1",
            id_sale: "pri_01jsw5hnvakbkfb2jz3qt2kx52",
            title: "3-MONTH",
            originalPrice: 59.99,
            discountedPrice: 29.99,
            introPeriod: 90,
            periodLabel: "3 months",
          },
        ];

        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch Paddle products:", err);
        setError("Failed to load subscription plans");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};
