import { useState } from "react";
import laptopsData from "../data/laptops";
import LaptopCard from "../components/LaptopCard";
import CartSummary from "../components/CartSummary";

function Shop() {
    const [laptops, setLaptops] = useState(laptopsData);

    function addLaptop(id) {
        var updated = laptops.map(function (laptop) {
            if (laptop.id === id) {
                return {
                    ...laptop,
                    quantity: laptop.quantity + 1
                };
            }
            return laptop;
        });

        setLaptops(updated);
    }

    function removeLaptop(id) {
        var updated = laptops.map(function (laptop) {
            if (laptop.id === id && laptop.quantity > 0) {
                return {
                    ...laptop,
                    quantity: laptop.quantity - 1
                };
            }
            return laptop;
        });

        setLaptops(updated);
    }

    var total = laptops.reduce(function (sum, laptop) {
        return sum + laptop.quantity;
    }, 0);

    return (
        <div className="container">
            <h1>Laptops Shop</h1>

            <CartSummary total={total} />

            <div className="cards-container">
                {laptops.map(function (laptop) {
                    return (
                        <LaptopCard
                            key={laptop.id}
                            laptop={laptop}
                            add={addLaptop}
                            remove={removeLaptop}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Shop;
