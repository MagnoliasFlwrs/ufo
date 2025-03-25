import React from "react";

const PaddleCheckout = () => {
    const handleCheckout = (planId) => {
        window.Paddle.Checkout.open({
            productId: planId,
            passthrough: JSON.stringify({ userId: "12345" }),
            successCallback: (data) => console.log("Успешная покупка:", data),
            closeCallback: () => console.log("Чекаут закрыт"),
            displayMode: "newTab"
        });
    };


    return (
        <div>
            <h2>Выберите подписку</h2>
            <button onClick={() => handleCheckout('pro_01jq7cw48bph87tn621xvj58p5')}>
                Подписка $0.1/месяц
            </button>
            <button onClick={() => handleCheckout('pro_01jq7cx43g2vv1y6g3w5qpnvj6')}>
                Подписка $1/год
            </button>
        </div>
    );
};

export default PaddleCheckout;
