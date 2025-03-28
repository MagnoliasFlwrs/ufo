import { usePaddle } from "@/hooks/usePaddle";

const PaddleCheckout = () => {
  const PRICE_IDS = {
    MONTHLY: "pri_01jqf6227819yce54z6hdf0hcj",
    YEARLY: "pri_01jqf5zd53n6wn620w84kyaxm0",
  };

  const { openCheckout, isPaddleReady } = usePaddle();

  if (!isPaddleReady) return <div>Загрузка платежной системы...</div>;

  return (
    <div>
      <h2>Выберите подписку</h2>
      <button onClick={() => openCheckout(PRICE_IDS.MONTHLY)}>Подписка $1/месяц</button>
      <button onClick={() => openCheckout(PRICE_IDS.YEARLY)}>Подписка $10/год</button>
    </div>
  );
};

export default PaddleCheckout;
