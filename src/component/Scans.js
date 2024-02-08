const Scans = (props) => {
  console.log(props.items[0].url);
  if (!props.items || props.items.length === 0) {
    return <div id="grid-item">No scans available</div>;
  }

  if (props.items.length === 0) {
    return <div id="grid-item">No scans available</div>;
  }

  const sectionStyle = {
    maxHeight: "150px",
    overflowY: "auto",
  };

  return (
    <div id="grid-item">
      <h1>{props.name}</h1>
      <div
        className="section"
        style={props.items.length > 4 ? sectionStyle : null}
      >
        {props.items.map((item, index) => (
          <div
            className="item"
            key={item.name}
            onClick={() => props.handleRenderPCD(item, index)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scans;
