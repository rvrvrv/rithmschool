const ColorBox = props => (
  <div
    className="color-box"
    id={props.id}
    style={{
      backgroundColor: props.randomColor,
      width: '12.5vw',
      minHeight: '33.333vh',
      transition: 'background-color .7s',
    }}
  />
);

class ColorGrid extends React.Component {
  // Return a random RGB string
  static randomRGB() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256,
    )}, ${Math.floor(Math.random() * 256)})`;
  }

  // Change a random box to a random color every 300ms
  componentDidMount() {
    setInterval(() => {
      const randomBox = document.getElementById(
        `box-${Math.floor(Math.random() * 24)}`,
      );
      randomBox.style.backgroundColor = ColorGrid.randomRGB();
    }, 300);
  }

  render() {
    // First, generate 24 random RGB colors
    const boxColors = [];
    for (let i = 0; i < 24; i++) {
      boxColors.push(ColorGrid.randomRGB());
    }
    // Then, generate JSX for each ColorBox
    const boxJSX = boxColors.map((color, i) =>
      <ColorBox randomColor={color} id={`box-${i}`} />,
    );
    return (
      <div
        className="color-grid"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100vw',
        }}
      >
        {boxJSX}
      </div>
    );
  }
}

const App = () => (
  <div>
    <ColorGrid />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
