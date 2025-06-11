const defaultstate = {
    color: "#AA5486"
}

const color = [
    "#3D365C",
    "#7C4585",
    "#102E50",
    "#2C2C2C",
    "#2E073F",
    "#2E236C",
    "#1B1A55",
    "#3C0753",
    "#232D3F",
    "#0C134F",
    "#472D2D",
]

const colorReducer = (state = defaultstate, action) => {
    switch (action.type) {
        case "CHANGE COLOR": {
            return { color: color[Math.floor(Math.random() * 11)] }
        }
        default:
            return state
    }
}

export default colorReducer