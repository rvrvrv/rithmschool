class ColorBox extends React.Component {
  constructor() {
    super();
    this.state = { hovering: null };
  }

  render() {
    return (
      <div
        className="color-box"
        id={this.props.id}
        onMouseEnter={() => this.setState({ hovering: true })}
        onMouseLeave={() => this.setState({ hovering: null })}
        style={{
          backgroundColor: this.props.bgColor,
          width: '20vw',
          minHeight: '20vh',
          transition: 'background-color .7s',
          textAlign: 'center',
        }}
      >
        {this.state.hovering &&
          <span
            style={{
              backgroundColor: '#000',
              color: '#fff',
              fontFamily: 'Arial',
              fontSize: 18,
            }}
          >
            {this.props.bgColor.slice(3)}
          </span>}
      </div>
    );
  }
}

const ColorGrid = props =>
  (<div
    className="color-grid"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '100vw',
    }}
  >
    {props.colors.map(color => <ColorBox bgColor={color} />)}
  </div>);

class ColorGridContainer extends React.Component {
  // Return a random RGB string
  static randomRGB() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256,
    )}, ${Math.floor(Math.random() * 256)})`;
  }

  constructor() {
    super();
    this.state = { colors: [] };
  }

  // Fill the state with random colors
  componentWillMount() {
    // Generate 25 random RGB colors
    const randomColors = [];
    for (let i = 0; i < 25; i++) {
      randomColors.push(ColorGridContainer.randomRGB());
    }
    this.setState({ colors: randomColors });
  }

  // Randomly change a color every 300ms
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => {
        const newColors = prevState.colors.slice();
        newColors.splice(
          Math.floor(Math.random() * 25),
          1,
          ColorGridContainer.randomRGB(),
        );
        return { colors: newColors };
      });
    }, 200);
  }

  render() {
    return (
      <div>
        <ColorGrid colors={this.state.colors} />
      </div>
    );
  }
}

ReactDOM.render(<ColorGridContainer />, document.getElementById('root'));
