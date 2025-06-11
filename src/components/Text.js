import { useSelector } from "react-redux";

const Text = () => {
    const color = useSelector(state => state.colorReducer.color)
    const { quotes } = useSelector(state => state.quotesReducer)
    return <div style={{ color: color }}>
        <p style={{ fontSize: 20, textAlign: "left" }}><i style={{ fontSize: 80, marginRight: 15 }} class="fa-solid fa-quote-left"></i>
            {quotes}
        </p>
    </div>
}

export default Text;