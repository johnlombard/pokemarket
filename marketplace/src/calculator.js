import React from 'react';

const Calculator = (prices) => {


    // Converts each element of array into a number 
    let priceValues = prices.prices.map(Number);

    let highestValue = priceValues.reduce(function(a, b) {
        return Math.max(a, b);
    });

    let lowestValue = priceValues.reduce(function(a, b) {
        return Math.min(a, b);
    });

    // Max-Min = Profit
    let calculateProfit = highestValue - lowestValue;

    return (

        <div className="Calculator">
            <h1>Prices throughout the day</h1>

            {/* Displays daily prices */}
            {priceValues.map(priceValue => {
                return (
                    <div>
                        {priceValue},
                    </div>
                )
            })}
            <div>
                <p>You should have bought when price was {lowestValue} and sold when price was {highestValue}</p>
                <p>You would have made {calculateProfit}</p>
            </div>
        </div>
    );
}

export default Calculator;
