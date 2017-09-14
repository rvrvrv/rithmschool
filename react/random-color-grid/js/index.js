"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorBox = function (_React$Component) {
  _inherits(ColorBox, _React$Component);

  function ColorBox() {
    _classCallCheck(this, ColorBox);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    _this.state = { hovering: null };
    return _this;
  }

  ColorBox.prototype.render = function render() {
    var _this2 = this;

    return React.createElement(
      "div",
      {
        className: "color-box",
        id: this.props.id,
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({ hovering: true });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({ hovering: null });
        },
        style: {
          backgroundColor: this.props.bgColor,
          width: "20vw",
          minHeight: "20vh",
          transition: "background-color .7s",
          textAlign: "center"
        }
      },
      this.state.hovering && React.createElement(
        "span",
        {
          style: {
            backgroundColor: "#000",
            color: "#fff",
            fontFamily: "Arial",
            fontSize: 18
          }
        },
        this.props.bgColor.slice(3)
      )
    );
  };

  return ColorBox;
}(React.Component);

var ColorGrid = function ColorGrid(props) {
  return React.createElement(
    "div",
    {
      className: "color-grid",
      style: {
        display: "flex",
        flexWrap: "wrap",
        width: "100vw"
      }
    },
    props.colors.map(function (color) {
      return React.createElement(ColorBox, { bgColor: color });
    })
  );
};

var ColorGridContainer = function (_React$Component2) {
  _inherits(ColorGridContainer, _React$Component2);

  function ColorGridContainer() {
    _classCallCheck(this, ColorGridContainer);

    var _this3 = _possibleConstructorReturn(this, _React$Component2.call(this));

    _this3.state = { colors: [] };
    return _this3;
  }

  // Return a random RGB string

  ColorGridContainer.randomRGB = function randomRGB() {
    return "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
  };

  // Fill the state with random colors

  ColorGridContainer.prototype.componentWillMount = function componentWillMount() {
    // Generate 25 random RGB colors
    var randomColors = [];
    for (var i = 0; i < 25; i++) {
      randomColors.push(ColorGridContainer.randomRGB());
    }
    this.setState({ colors: randomColors });
  };

  // Randomly change a color every 300ms

  ColorGridContainer.prototype.componentDidMount = function componentDidMount() {
    var _this4 = this;

    setInterval(function () {
      _this4.setState(function (prevState) {
        var newColors = prevState.colors.slice();
        newColors.splice(Math.floor(Math.random() * 25), 1, ColorGridContainer.randomRGB());
        return { colors: newColors };
      });
    }, 200);
  };

  ColorGridContainer.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(ColorGrid, { colors: this.state.colors })
    );
  };

  return ColorGridContainer;
}(React.Component);

ReactDOM.render(React.createElement(ColorGridContainer, null), document.getElementById("root"));
