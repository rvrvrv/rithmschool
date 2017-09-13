'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorBox = function ColorBox(props) {
  return React.createElement('div', {
    className: 'color-box',
    id: props.id,
    style: {
      backgroundColor: props.randomColor,
      width: '12.5vw',
      minHeight: '33.333vh',
      transition: 'background-color .7s'
    }
  });
};

var ColorGrid = function (_React$Component) {
  _inherits(ColorGrid, _React$Component);

  function ColorGrid() {
    _classCallCheck(this, ColorGrid);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  // Return a random RGB string

  ColorGrid.randomRGB = function randomRGB() {
    return 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
  };

  // Change a random box to a random color every 300ms

  ColorGrid.prototype.componentDidMount = function componentDidMount() {
    setInterval(function () {
      var randomBox = document.getElementById('box-' + Math.floor(Math.random() * 24));
      randomBox.style.backgroundColor = randomRGB();
    }, 300);
  };

  ColorGrid.prototype.render = function render() {
    // First, generate 24 random RGB colors
    var boxColors = [];
    for (var i = 0; i < 24; i++) {
      boxColors.push(this.randomRGB());
    }
    // Then, generate JSX for each ColorBox
    var boxJSX = boxColors.map(function (color, i) {
      return React.createElement(ColorBox, { randomColor: color, id: 'box-' + i });
    });
    return React.createElement(
      'div',
      {
        className: 'color-grid',
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          width: '100vw'
        }
      },
      boxJSX
    );
  };

  return ColorGrid;
}(React.Component);

var App = function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(ColorGrid, null)
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));