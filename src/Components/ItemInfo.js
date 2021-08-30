export default function ItemInfo({name, price, amount}) {
    let value = (convertValue(price) * Number(amount)).toFixed(2);
    let description = name+` - ${amount}`;
    return (
        <div>
            <p className="item-name">{description}</p>
            <p className="item-price">{String(value).replace('.',',')}</p>
        </div>
    );
}


function convertValue(value){
    value = value.replace(',','.');
    return Number(value);
}