import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Http from "../Services/Api";

const Button = () => {
    const color = useSelector(state => state.colorReducer.color)
    const dispatch = useDispatch()
    const style = {
        color: "white",
        backgroundColor: color,
        border: "none",
        borderRadius: 150,
        width: 30,
        height: 30
    }
    useEffect(() => {
        Http.get().then(res => {
            dispatch(({ type: "CHANGE QUOTES", payload: res.data }))
        }).catch(error => console.log(error))
    }, [color])
    return <button onClick={() => dispatch({ type: "CHANGE COLOR" })} style={style}>
        <i class="fa-solid fa-chevron-right"></i>
    </button>
}

export default Button;