const Overlay = (props) => {
  return (
    <div className="overlay-container">
      <a
        href="https://gitlab.rz.htw-berlin.de/c71_cse/2023ss_teamc"
        className="overlay-link"
      >
        TeamC
      </a>
      <div className="overlay-logo">SurfCap</div>
          <div className="overlay-text">
            { props.showLogo &&
            <>
              <h1 className="overlay-title" style={{color: props.color}}>{props.logo}</h1>
              <p className="text">{props.p} </p>
            </>
            }
          </div>
    </div>
  );
};

export default Overlay;
