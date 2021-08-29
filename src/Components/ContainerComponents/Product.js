export default function Product({image, name, description, price}) {

    return (
        <div className="option">
            <img src={image} className="product-image" alt=""/>
            <p className="name-food1">{name}</p>
            <p className="product-description">{description}</p>
            <div>
                <p>R$ <span className="price-food1">{price}</span></p>
                <ion-icon name="checkmark-circle-sharp" className="icon-food1"></ion-icon>
            </div>
        </div>
    );
}