webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout */ "./components/layout.js");
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");
/* harmony import */ var _utils_emiter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/emiter */ "./utils/emiter.js");









var _jsxFileName = "/Users/justin/Desktop/private/nextjs/components/nav.js";



 // import banner from '../images/banner'


var timer = null;

var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      path: "",
      headerTop: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var rightHeight, leftHeight;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // while(1){
                //   rightHeight = document.getElementsByClassName("right_box")[0].clientHeight;
                //   leftHeight = document.getElementById("left_box").clientHeight;
                //   console.log(rightHeight,leftHeight)
                //   if(rightHeight != 0 && leftHeight != 0){
                //      break
                //   }
                // }
                setTimeout(function () {
                  rightHeight = document.getElementsByClassName("right_box")[0].clientHeight;
                  leftHeight = document.getElementById("left_box").clientHeight;
                  console.log(leftHeight, rightHeight);

                  document.onscroll = function () {
                    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

                    if (scrollTop > 62 + 20) {
                      _this2.setState({
                        headerTop: -61
                      });
                    } else {
                      _this2.setState({
                        headerTop: 0
                      });
                    }

                    if (scrollTop > 42 && scrollTop < rightHeight - leftHeight + 45) {
                      _utils_emiter__WEBPACK_IMPORTED_MODULE_13__["default"].emit("left-fix");
                    } else if (scrollTop < 62 + 20) {
                      _utils_emiter__WEBPACK_IMPORTED_MODULE_13__["default"].emit("left-static", 0);
                    } else if (scrollTop > rightHeight - leftHeight + 45) {
                      _utils_emiter__WEBPACK_IMPORTED_MODULE_13__["default"].emit("left-static", rightHeight - leftHeight);
                    }
                  };
                }, 1000); // let rightHeight = document.getElementsByClassName("right_box")[0].clientHeight;
                // if (scrollTop > 62 + 20){
                // }

                this.setState({
                  path: location.pathname
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          path = _this$state.path,
          headerTop = _this$state.headerTop;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: "100%",
          height: 61,
          transition: "0.3s",
          WebkitTransition: "0.3s",
          backgroundColor: "rgba(255,255,255,0.9)",
          position: "fixed",
          borderBottom: "1px solid #ddd",
          boxShadow: "0 1px 1px rgba(0,0,0,.04)",
          zIndex: 999,
          top: headerTop
        },
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          width: 1000,
          margin: "0 auto",
          height: "100%",
          lineHeight: "60px",
          fontSize: 22
        },
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          float: 'left'
        },
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Simple"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        id: "starlist",
        style: {
          float: "right",
          margin: 0
        },
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/",
        style: path == "/" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "\u9996\u9875")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        style: path == "/article" || path == "/detail" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        style: path == "/1" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "\u76F8\u518C")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        style: path == "/2" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "\u7559\u8A00")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/article",
        style: path == "/3" ? {
          color: "#f65a8a"
        } : {},
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "\u5173\u4E8E"))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          height: 75
        },
        className: "jsx-2773910157",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2773910157",
        __self: this
      }, "#starlist.jsx-2773910157 li.jsx-2773910157{float:left;display:block;padding:0 0 0 40px;font-size:16px;}#starlist.jsx-2773910157 li.jsx-2773910157 a.jsx-2773910157{-webkit-text-decoration:none;text-decoration:none;color:#555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RW9CLEFBRzBCLEFBTVEsV0FMTCxjQUNLLG1CQUNKLE1BSU4sU0FIYixFQUlBIiwiZmlsZSI6Ii9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnXG5pbXBvcnQgdHBzIGZyb20gJy4uL3V0aWxzL2Jsb2dfdHlwZXMnXG4vLyBpbXBvcnQgYmFubmVyIGZyb20gJy4uL2ltYWdlcy9iYW5uZXInXG5pbXBvcnQgRXZlbnQgZnJvbSAnLi4vdXRpbHMvZW1pdGVyJztcbnZhciB0aW1lciA9IG51bGw7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEscXVlcnksanNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgdXNlckFnZW50LHF1ZXJ5LGpzb25QYWdlUmVzIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgICAgcGF0aDpcIlwiLFxuICAgICAgaGVhZGVyVG9wOjBcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICBsZXQgcmlnaHRIZWlnaHRcbiAgICAgIGxldCBsZWZ0SGVpZ2h0XG4gICAgICAvLyB3aGlsZSgxKXtcbiAgICAgIC8vICAgcmlnaHRIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmlnaHRfYm94XCIpWzBdLmNsaWVudEhlaWdodDtcbiAgICAgIC8vICAgbGVmdEhlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVmdF9ib3hcIikuY2xpZW50SGVpZ2h0O1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhyaWdodEhlaWdodCxsZWZ0SGVpZ2h0KVxuICAgICAgLy8gICBpZihyaWdodEhlaWdodCAhPSAwICYmIGxlZnRIZWlnaHQgIT0gMCl7XG4gICAgICAvLyAgICAgIGJyZWFrXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJpZ2h0SGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJpZ2h0X2JveFwiKVswXS5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGxlZnRIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZnRfYm94XCIpLmNsaWVudEhlaWdodDtcbiAgICAgICAgY29uc29sZS5sb2cobGVmdEhlaWdodCxyaWdodEhlaWdodClcbiAgICAgICAgZG9jdW1lbnQub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICAgIGlmIChzY3JvbGxUb3AgPiA2MiArIDIwKXtcbiAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoZWFkZXJUb3A6LTYxfSlcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtoZWFkZXJUb3A6MH0pXG4gICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICAgaWYgKHNjcm9sbFRvcCA+IDQyICYmIHNjcm9sbFRvcCA8IChyaWdodEhlaWdodCAtIGxlZnRIZWlnaHQpKzQ1KXtcbiAgICAgICAgICAgICAgRXZlbnQuZW1pdChcImxlZnQtZml4XCIpXG4gICAgICAgICAgfWVsc2UgaWYoc2Nyb2xsVG9wIDwgNjIgKyAyMCl7XG4gICAgICAgICAgICAgIEV2ZW50LmVtaXQoXCJsZWZ0LXN0YXRpY1wiLDApXG4gICAgICAgICAgfWVsc2UgaWYoc2Nyb2xsVG9wID4gKHJpZ2h0SGVpZ2h0IC0gbGVmdEhlaWdodCkrNDUpe1xuICAgICAgICAgICAgRXZlbnQuZW1pdChcImxlZnQtc3RhdGljXCIscmlnaHRIZWlnaHQgLSBsZWZ0SGVpZ2h0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgXG4gICAgICAvLyBsZXQgcmlnaHRIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmlnaHRfYm94XCIpWzBdLmNsaWVudEhlaWdodDtcbiAgICAgIC8vIGlmIChzY3JvbGxUb3AgPiA2MiArIDIwKXtcbiAgICAgICAgXG4gICAgICAvLyB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtwYXRoOmxvY2F0aW9uLnBhdGhuYW1lfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7cGF0aCxoZWFkZXJUb3B9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsaGVpZ2h0OjYxLHRyYW5zaXRpb246XCIwLjNzXCIsV2Via2l0VHJhbnNpdGlvbjpcIjAuM3NcIixiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIixwb3NpdGlvbjpcImZpeGVkXCIsYm9yZGVyQm90dG9tOlwiMXB4IHNvbGlkICNkZGRcIixib3hTaGFkb3c6XCIwIDFweCAxcHggcmdiYSgwLDAsMCwuMDQpXCIsekluZGV4Ojk5OSx0b3A6aGVhZGVyVG9wfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOjEwMDAsbWFyZ2luOlwiMCBhdXRvXCIsaGVpZ2h0OlwiMTAwJVwiLGxpbmVIZWlnaHQ6XCI2MHB4XCIsZm9udFNpemU6MjJ9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDonbGVmdCd9fT5TaW1wbGU8L2Rpdj4gICAgICAgIFxuICAgICAgICAgICAgPHVsIGlkPVwic3Rhcmxpc3RcIiBzdHlsZT17e2Zsb2F0OlwicmlnaHRcIixtYXJnaW46MH19PlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIiBzdHlsZT17cGF0aCA9PSBcIi9cIiA/IHtjb2xvcjpcIiNmNjVhOGFcIn06e319PummlumhtTwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9hcnRpY2xlXCIgc3R5bGU9e3BhdGggPT0gXCIvYXJ0aWNsZVwiIHx8IHBhdGggPT0gXCIvZGV0YWlsXCIgPyB7Y29sb3I6XCIjZjY1YThhXCJ9Ont9fT7mlofnq6A8L2E+PC9saT4gXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FydGljbGVcIiBzdHlsZT17cGF0aCA9PSBcIi8xXCIgPyB7Y29sb3I6XCIjZjY1YThhXCJ9Ont9fT7nm7jlhow8L2E+PC9saT4gXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FydGljbGVcIiBzdHlsZT17cGF0aCA9PSBcIi8yXCIgPyB7Y29sb3I6XCIjZjY1YThhXCJ9Ont9fT7nlZnoqIA8L2E+PC9saT4gXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiL2FydGljbGVcIiBzdHlsZT17cGF0aCA9PSBcIi8zXCIgPyB7Y29sb3I6XCIjZjY1YThhXCJ9Ont9fT7lhbPkuo48L2E+PC9saT4gXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6NzV9fT48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNzdGFybGlzdCBsaSB7XG4gICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgNDBweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc3Rhcmxpc3QgbGkgYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+ICBcbiAgICApXG4gIH1cbn1cblxuXG4iXX0= */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/components/nav.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context2.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.c18efdbf506b4e5b8622.hot-update.js.map