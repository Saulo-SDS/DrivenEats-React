import Product from "./Product";

export default function Desserts({desserts, setDessert}) {
    
    const dessertsData = [
        {
            image: "../assets/pudim.jpg",
            name: "Pudim",
            description: "pudim 35g",
            price: "7,90"
        },
        {
            image: "../assets/bolo_morango.png",
            name: "Bolo de morango",
            description: "Bolo de morango 40g",
            price: "12,70"
        },
        {
            image: "../assets/cookies.png",
            name: "Cookies",
            description: "Cookies 3 und",
            price: "5,99"
        },
        {
            image: "../assets/nega_maluca.jpg",
            name: "Nega maluca",
            description: "Boo de cacau 55g",
            price: "13,99"
        },
        {
            image: "../assets/mousse.jpg",
            name: "Mousse",
            description: "Copo com 35g",
            price: "7,99"
        },
        {
            image: "../assets/sorvete.jpg",
            name: "Sorvete",
            description: "Com 3 bolas",
            price: "10,73"
        }
    ];


    return (
        <>
            <ul>
                {dessertsData.map((dessert, index) => (
                    <Product key={index} image={dessert.image} name={dessert.name} description={dessert.description} price={dessert.price} chosen={desserts} func={setDessert}/>
                ))}
            </ul>
        </>
    );
}