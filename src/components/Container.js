import { useSelector } from "react-redux";
import Button from "./Button";
import Text from "./Text";

const Container = () => {
    const { author } = useSelector(state => state.quotesReducer)
    const color = useSelector(state => state.colorReducer.color)

    const style = { backgroundColor: "white", maxWidth: "500px", height: 'auto', borderRadius: 10, padding: 30, boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }
    return <div style={style}>
        <Text />
        <div style={{ display: "flex", flexDirection: "column", alignItems: 'flex-end', }}>
            <p style={{ color, display: "inline" }}>{author}</p>
            <Button />
        </div>
    </div>
}

export default Container;