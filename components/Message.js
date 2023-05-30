import autoprefixer from "autoprefixer";

const Message = ({ msg, bgColor }) => {
  let styles = {
    zIndex: "3000",
    position: "fixed",
    bottom: "46px",
    left: "0",
    width: "100%",
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };

  return (
    <div style={styles}>
      <p>{msg}</p>
      {/* <p dangerouslySetInnerHTML={{__html: msg}} /> */}{" "}
      {/* para poder usar html puro */}
    </div>
  );
};

export default Message;
