import Product from "./Product";

export default function Foods() {

    const foodsData = [
        {
            image: "../assets/frango.jpg",
            name: "Frango",
            description: "Frango empanado com molho",
            price: "18,90"
        },
        {
            image: "../assets/bife.png",
            name: "Bife de carne",
            description: "Um pouco de salada com legumes",
            price: "22,99"
        },
        {
            image: "../assets/ensopado.png",
            name: "Ensopado",
            description: "Ervas acompanhado de chucrute",
            price: "30,00"
        },
        {
            image: "../assets/maminha.jpg",
            name: "Maminha",
            description: "Acompanha salada, farofa e macarrã",
            price: "45,00"
        },
        {
            image: "../assets/lasanha.jpg",
            name: "Lasanha",
            description: "Lasanha à bolonesa 200g",
            price: "25,00"
        },
        {
            image: "../assets/Strogonoff-frango.jpg",
            name: "Strogonoff",
            description: "Strogonoff de frango com batata palha",
            price: "23,49"
        }
    ];

    return (
        <>
            <p class="general-titles">Primeiro, seu prato</p>
            <ul>
                {foodsData.map((food, index) => (<li className="item" key={index}>
                    <Product image={food.image} name={food.name} description={food.description} price={food.price}/>
                    </li>)
                )}
            </ul>
        </>
    );
}
