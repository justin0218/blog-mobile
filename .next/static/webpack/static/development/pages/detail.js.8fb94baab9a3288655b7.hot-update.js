webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
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
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../proto/blog_pb */ "./proto/blog_pb.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_proto_blog_pb__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");









var _jsxFileName = "/Users/justin/Desktop/private/nextjs/pages/detail.js";










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
      blogDtail: "",
      detailData: {}
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var id, res, data, message, key, hres, hdata, hmessage;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.props.query.id;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/detail?id=").concat(id), {
                  responseType: 'blob'
                });

              case 3:
                res = _context.sent;
                _context.next = 6;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_17__["default"])(res.data);

              case 6:
                data = _context.sent;
                message = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.detailRes.deserializeBinary(data);
                data = message.toObject();
                key = data.htmlTxtUrl.replace("http:" + _utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"] + "/redources/", "");
                _context.next = 12;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/tool/file/read?key=").concat(key), {
                  responseType: 'blob'
                });

              case 12:
                hres = _context.sent;
                _context.next = 15;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_17__["default"])(hres.data);

              case 15:
                hdata = _context.sent;
                hmessage = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.fileReadRes.deserializeBinary(hdata);
                hdata = hmessage.toObject();
                this.setState({
                  blogDtail: hdata.txt,
                  detailData: data
                });

              case 19:
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
          blogDtail = _this$state.blogDtail,
          detailData = _this$state.detailData;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          background: "#fff",
          padding: "0 30px"
        },
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-944222848" + " " + "news_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, detailData.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-944222848" + " " + "bloginfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-944222848" + " " + "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-944222848" + " " + "lmname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, Object(_utils_blog_types__WEBPACK_IMPORTED_MODULE_12__["getTpValue"])(detailData.type)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-944222848" + " " + "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_13___default()(detailData.createTime).format("YYYY-MM-DD")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-944222848" + " " + "view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, detailData.view, " \u4EBA\u5DF2\u9605\u8BFB"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-944222848" + " " + "news_about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u7B80\u4ECB"), " ", detailData.preface), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: blogDtail
        },
        previewcontainer: "true",
        style: {
          width: "auto"
        },
        className: "jsx-944222848" + " " + "markdown-body editormd-preview-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: "20px"
        },
        className: "jsx-944222848" + " " + "share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-944222848" + " " + "diggit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "\u5F88\u8D5E\u54E6\uFF01"), "(", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "79"), ")")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-944222848" + " " + "nextinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/diary/18.html",
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u4E00\u4E2ASEO\u7AD9\u957F\u5206\u4EAB\u4E2A\u4EBA\u535A\u5BA2\u4EA7\u54C1\u7F51\u8D5A\u5EFA\u7AD9\u7ECF\u5386\u5168\u8FC7\u7A0B")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/diary/",
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\u8FD4\u56DE\u5217\u8868"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-944222848" + " " + "news_pl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "\u6587\u7AE0\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-944222848" + " " + "gbko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-944222848" + " " + "fb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        style: {
          color: "#000"
        },
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "\u7A0B\u5E8F\u5458\u5C0F\u5F20"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-944222848" + " " + "fbtime",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "2019-08-12 12:05:07")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-944222848" + " " + "fbinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "33232"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-944222848" + " " + "fb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        style: {
          color: "#000"
        },
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "\u7A0B\u5E8F\u5458\u5C0F\u5F20"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-944222848" + " " + "fbtime",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "2019-02-17 16:02:42")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-944222848" + " " + "fbinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "\u6CA1\u5174\u8DA3\u5C31\u4E0D\u8981\u5165\u95E8\u8FD9\u4E00\u884C\u4E86\u3002"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-944222848" + " " + "saying",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "\u5171\u670934\u6761\u8BC4\u8BBA")), "\u6765\u8BF4\u4E24\u53E5\u5427..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        name: "saytext",
        rows: "6",
        id: "saytext",
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "imageField",
        type: "submit",
        value: "\u63D0\u4EA4",
        style: {
          outline: "none",
          cursor: "pointer"
        },
        className: "jsx-944222848",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "944222848",
        __self: this
      }, ".nextinfo.jsx-944222848 a.jsx-944222848{-webkit-text-decoration:none;text-decoration:none;color:#555;}.nextinfo.jsx-944222848 a.jsx-944222848:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}.yzm.jsx-944222848{margin:10px 10px 10px 0;}#plpost.jsx-944222848 input[type=\"submit\"].jsx-944222848{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}#saytext.jsx-944222848{width:99%;outline:none;resize:none;}.saying.jsx-944222848 span.jsx-944222848{float:right;}.saying.jsx-944222848{line-height:30px;color:#a9a6a6;}.news_pl.jsx-944222848 h2.jsx-944222848{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}.fbtime.jsx-944222848{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}.fbtime.jsx-944222848 span.jsx-944222848{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}p.fbtime.jsx-944222848{color:#000;}p.fbinfo.jsx-944222848{margin:10px 0;word-wrap:break-word;}.fb.jsx-944222848 ul.jsx-944222848{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background:url(/static/images/erweima.jpg) no-repeat top 14px left 10px;background-size:47px 47px;}.news_pl.jsx-944222848{margin:10px 0 20px 0;width:100%;overflow:hidden;}.nextinfo.jsx-944222848{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-944222848>p.jsx-944222848{padding:4px 10px;border-radius:5px;}.diggit.jsx-944222848{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;}.news_about.jsx-944222848{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-944222848{width:100%;overflow:hidden;}.news_title.jsx-944222848{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-944222848 li.jsx-944222848{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9kZXRhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUdzQixBQUdrQyxBQUlLLEFBSUEsQUFHWixBQWFGLEFBS0ksQUFHQyxBQUlZLEFBT2pCLEFBUUEsQUFRRCxBQUdHLEFBSUcsQUFPSSxBQUtKLEFBTUEsQUFJTCxBQVVNLEFBUUwsQUFJTSxBQU9KLFVBNUZBLENBbUNoQixBQStDbUIsQUFXSSxDQXhGdEIsQUFjVyxBQVFBLEFBcUNDLEVBN0VPLEFBbURFLEFBb0NRLENBWU4sRUE5RVQsQUFrQ2MsQUFZakIsQUFNTyxJQVhQLEVBaERHLEFBbUJDLEFBUUEsQ0E1Q2pCLEFBaUZxQixHQWtCbkIsQ0E1QmdCLENBM0NDLEFBa0ZHLEVBckZyQixDQXlDaUIsQ0E5REwsQ0FtR1EsQ0FyRnJCLEFBcUNDLEFBc0JBLEdBeENZLEFBUUEsQ0E4Q00sSUFUTixDQTdFRixBQW1FSyxDQWJrQixBQW9EaEMsQ0FsRmUsRUFzQ2hCLENBN0JpQixBQVFBLEFBMERELENBaEhKLEVBb0dvQixDQXRGZCxDQTZFeUIsSUFWM0MsRUE3RVcsQUE2R0UsQ0FoSGQsQUFxQ29CLElBU0MsQUFRQSxJQTJEbkIsQ0FuR2UsQ0FWakIsTUErRDBFLEVBN0I3RCxBQThEVSxLQXJEdEIsQUFRQSxDQXhDbUIsS0F3Qm5CLE1Bb0RtQixBQVVxQixPQXJGM0IsV0E0RUssQ0EzRUUsZ0JBNEVELEFBU2xCLEdBcEZnQixlQWtEVSxBQTBCM0IsQ0EzRWlCLGdCQUNsQixTQWlEQyIsImZpbGUiOiIvVXNlcnMvanVzdGluL0Rlc2t0b3AvcHJpdmF0ZS9uZXh0anMvcGFnZXMvZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7Z2V0VHBWYWx1ZX0gZnJvbSAnLi4vdXRpbHMvYmxvZ190eXBlcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHthcGlIb3N0fSBmcm9tICcuLi91dGlscy9jb25maWcnO1xuaW1wb3J0IHByb3RvYnVmIGZyb20gXCIuLi9wcm90by9ibG9nX3BiXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgcmVhZFN0cmVhbSBmcm9tICcuLi91dGlscy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEscXVlcnksanNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgdXNlckFnZW50LHF1ZXJ5LGpzb25QYWdlUmVzIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgICAgYmxvZ0R0YWlsOlwiXCIsXG4gICAgICBkZXRhaWxEYXRhOnt9XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHMucXVlcnlcbiAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpSG9zdH0vdjEvYmxvZy9kZXRhaWw/aWQ9JHtpZH1gLHtcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYidcbiAgICAgIH0pXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlYWRTdHJlYW0ocmVzLmRhdGEpO1xuICAgICAgbGV0IG1lc3NhZ2UgPSBwcm90b2J1Zi5kZXRhaWxSZXMuZGVzZXJpYWxpemVCaW5hcnkoZGF0YSk7XG4gICAgICBkYXRhID0gbWVzc2FnZS50b09iamVjdCgpO1xuICAgICAgbGV0IGtleSA9IGRhdGEuaHRtbFR4dFVybC5yZXBsYWNlKFwiaHR0cDpcIithcGlIb3N0ICsgXCIvcmVkb3VyY2VzL1wiLFwiXCIpO1xuICAgICAgbGV0IGhyZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YXBpSG9zdH0vdG9vbC9maWxlL3JlYWQ/a2V5PSR7a2V5fWAse1xuICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xuICAgICAgfSlcbiAgICAgIGxldCBoZGF0YSA9IGF3YWl0IHJlYWRTdHJlYW0oaHJlcy5kYXRhKTtcbiAgICAgIGxldCBobWVzc2FnZSA9IHByb3RvYnVmLmZpbGVSZWFkUmVzLmRlc2VyaWFsaXplQmluYXJ5KGhkYXRhKTtcbiAgICAgIGhkYXRhID0gaG1lc3NhZ2UudG9PYmplY3QoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Jsb2dEdGFpbDpoZGF0YS50eHQsZGV0YWlsRGF0YTpkYXRhfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7YmxvZ0R0YWlsLGRldGFpbERhdGF9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiI2ZmZlwiLHBhZGRpbmc6IFwiMCAzMHB4XCJ9fT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuZXdzX3RpdGxlXCI+e2RldGFpbERhdGEubmFtZX08L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9naW5mb1wiPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImF1dGhvclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxtbmFtZVwiPntnZXRUcFZhbHVlKGRldGFpbERhdGEudHlwZSl9PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGltZXJcIj57bW9tZW50KGRldGFpbERhdGEuY3JlYXRlVGltZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKX08L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ2aWV3XCI+e2RldGFpbERhdGEudmlld30g5Lq65bey6ZiF6K+7PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NsZWFyOidib3RoJ319PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX2Fib3V0XCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+566A5LuLPC9zdHJvbmc+IHtkZXRhaWxEYXRhLnByZWZhY2V9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGJsb2dEdGFpbH19IGNsYXNzTmFtZT1cIm1hcmtkb3duLWJvZHkgZWRpdG9ybWQtcHJldmlldy1jb250YWluZXJcIiBwcmV2aWV3Y29udGFpbmVyPVwidHJ1ZVwiIHN0eWxlPXt7d2lkdGg6XCJhdXRvXCJ9fT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmVcIiBzdHlsZT17e3BhZGRpbmc6IFwiMjBweFwifX0+XG4gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlnZ2l0XCI+XG4gICAgICAgICAgICAgICA8YT7lvojotZ7lk6bvvIE8L2E+KDxiPjc5PC9iPilcbiAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV4dGluZm9cIj5cbiAgICAgICAgICAgICAgPHA+5LiK5LiA56+H77yaPGEgaHJlZj1cIi9kaWFyeS8xOC5odG1sXCI+5LiA5LiqU0VP56uZ6ZW/5YiG5Lqr5Liq5Lq65Y2a5a6i5Lqn5ZOB572R6LWa5bu656uZ57uP5Y6G5YWo6L+H56iLPC9hPjwvcD5cbiAgICAgICAgICAgICAgPHA+5LiL5LiA56+H77yaPGEgaHJlZj1cIi9kaWFyeS9cIj7ov5Tlm57liJfooag8L2E+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19wbFwiPlxuICAgICAgICAgICAgICA8aDI+5paH56ug6K+E6K66PC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYmtvXCI+IFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmJcIj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiMwMDBcIn19Pueoi+W6j+WRmOWwj+W8oDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmJ0aW1lXCI+PHNwYW4+MjAxOS0wOC0xMiAxMjowNTowNzwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZiaW5mb1wiPjMzMjMyPC9wPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYlwiPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOlwiIzAwMFwifX0+56iL5bqP5ZGY5bCP5bygPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYnRpbWVcIj48c3Bhbj4yMDE5LTAyLTE3IDE2OjAyOjQyPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmJpbmZvXCI+5rKh5YW06Laj5bCx5LiN6KaB5YWl6Zeo6L+Z5LiA6KGM5LqG44CCPC9wPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGxwb3N0XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzYXlpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPuWFseaciTM05p2h6K+E6K66PC9hPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAg5p2l6K+05Lik5Y+l5ZCnLi4uXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwieXptXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPumqjOivgeeggTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwia2V5XCIgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJpbnB1dFRleHRcIiBzaXplPVwiMTZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lL1Nob3dLZXkvP3Y9cGxcIiBhbGlnbj1cImFic21pZGRsZVwiIG5hbWU9XCJwbEtleUltZ1wiIGlkPVwicGxLZXlJbWdcIiB0aXRsZT1cIueci+S4jea4healmizngrnlh7vliLfmlrBcIiAvPiBcbiAgICAgICAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInNheXRleHRcIiByb3dzPVwiNlwiIGlkPVwic2F5dGV4dFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImltYWdlRmllbGRcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLmj5DkuqRcIiBzdHlsZT17e291dGxpbmU6IFwibm9uZVwiLGN1cnNvcjogXCJwb2ludGVyXCJ9fSAvPlxuICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dCBuYW1lPVwiaWRcIiB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJpZFwiIHZhbHVlPVwiMTlcIiAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJjbGFzc2lkXCIgdHlwZT1cImhpZGRlblwiIGlkPVwiY2xhc3NpZFwiIHZhbHVlPVwiM1wiIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImVuZXdzXCIgdHlwZT1cImhpZGRlblwiIGlkPVwiZW5ld3NcIiB2YWx1ZT1cIkFkZFBsXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicmVwaWRcIiB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJyZXBpZFwiIHZhbHVlPVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJlY21zZnJvbVwiIHZhbHVlPVwiL2RpYXJ5LzE5Lmh0bWxcIiAvPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubmV4dGluZm8gYXtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmV4dGluZm8gYTpob3ZlcntcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgY29sb3I6IzIyMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnl6bSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3BscG9zdCBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzMwMzAzMDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMSU7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzYXl0ZXh0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDk5JTtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2F5aW5nIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgLnNheWluZ3tcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNhOWE2YTY7XG4gICAgICAgICAgIH0gXG4gICAgICAgICAgIC5uZXdzX3BsIGgye1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogIzAwMCAycHggc29saWQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYnRpbWV7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA2NnB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZidGltZSBzcGFue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogNjdweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIHAuZmJ0aW1le1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcC5mYmluZm97XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmIgdWx7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDcwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAjZWNlY2VjIDFweCBzb2xpZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL2ltYWdlcy9lcndlaW1hLmpwZykgbm8tcmVwZWF0IHRvcCAxNHB4IGxlZnQgMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDdweCA0N3B4O1xuICAgICAgICAgICB9ICBcbiAgICAgICAgICAgLm5ld3NfcGx7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLm5leHRpbmZve1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV4dGluZm8gPiBwe1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmRpZ2dpdHtcbiAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNFMjUyM0E7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggNnB4IDBweCByZ2JhKDAsMCwwLC4yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXdzX2Fib3V0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODg4ODtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjNGM0YzO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMTVweCBhdXRvO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IDAgMCAjRjZGNkY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2dpbmZvIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmV3c190aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJsb2dpbmZvIGxpIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD4gICAgIFxuICAgIClcbiAgfVxufVxuXG5cbiJdfQ== */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/pages/detail.js */"));
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
//# sourceMappingURL=detail.js.8fb94baab9a3288655b7.hot-update.js.map