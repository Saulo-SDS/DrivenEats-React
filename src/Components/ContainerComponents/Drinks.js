import Product from "./Product";

export default function Drinks() {

    const drinksData = [
        {
            image: "../assets/coca.jpg",
            name: "Coca-cola",
            description: "Lata 350ml",
            price: "4,90"
        },
        {
            image: "../assets/limonada.png",
            name: "Limonada",
            description: "Copo 300ml",
            price: "8,99"
        },
        {
            image: "../assets/vinho.jpg",
            name: "Vinho Tinto",
            description: "Garrafa 900ml",
            price: "55,99"
        },
        {
            image: "../assets/caipirinha.jpg",
            name: "Caipirinha",
            description: "Copo 200ml",
            price: "3,99"
        },
        {
            image: "../assets/cerveja.jpg",
            name: "Heineken",
            description: "Garrafa 275ml",
            price: "7,89"
        },
        {
            image: "../assets/champagne.jpg",
            name: "Chandon",
            description: "Garrafa 900ml",
            price: "99,99"
        }
    ];


    return (
        <>
            <p className="general-titles">Agora, sua bebida</p>
            <ul>
                {drinksData.map((drink, index) => (<li className="item" key={index}>
                    <Product image={drink.image} name={drink.name} description={drink.description} price={drink.price}/>
                    </li>)
                )}
            </ul>
        </>
    );
}