const Error = ({ message }) => {
  return (
    <div>
      <p
        style={{
          fontWeight: "bold",
          paddingTop: "10px",
          paddingBottom: "10px",
          color: "#FF0000",
        }}
      >
        💥 {message}
      </p>
    </div>
  );
};

export default Error;
