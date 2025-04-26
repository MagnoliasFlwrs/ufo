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
            id: "pri_01jqf5zd53n6wn620w84kyaxm0",
            title: "1-WEEK",
            originalPrice: "$9.99",
            discountedPrice: "$4.99",
            pricePerDay: "$0.71",
            introPeriod: "7 days",
          },
          {
            id: "pri_01jqf6227819yce54z6hdf0hcj",
            title: "1-MONTH",
            originalPrice: "$29.99",
            discountedPrice: "$17.99",
            pricePerDay: "$0.59",
            introPeriod: "1 month",
          },
          {
            id: "pri_01jqf5zd53n6wn620w84kyaxm",
            title: "3-MONTH",
            originalPrice: "$59.99",
            discountedPrice: "$29.99",
            pricePerDay: "$0.33",
            introPeriod: "3 months",
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
