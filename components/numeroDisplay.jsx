export default function NumeroDisplay(props) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50px",
                width: "50px",
                borderRadius: "25px",
                backgroundColor: "green",
                color: "black",
                fontSize: "2rem",
                margin: "20px",
            }}
        >
            {props.numero}
        </div>
    );
}
