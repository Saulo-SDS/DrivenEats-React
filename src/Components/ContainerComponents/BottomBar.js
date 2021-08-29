export default function() {

    return (
        <div className="bottom-bar">
            <div className="place-order">
                <button type="button" className="button-order" onclick="closeOrder();" disabled="disabled">
                    Selecione os 3 itens<br/>para fechar o pedido
                </button>
            </div>
        </div>
    );
}