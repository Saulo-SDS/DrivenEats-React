import Desserts from "./Desserts";
import Drinks from "./Drinks";
import Foods from "./Foods";

export default function Products() {

    return (
        <>
            <div class="produtos">
                <Foods />
            </div>
            <div class="produtos">
                <Drinks />
            </div>
            <div class="produtos">
                <Desserts />
            </div>
        </>
    );
}