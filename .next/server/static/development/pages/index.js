module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Common/Input.js":
/*!************************************!*\
  !*** ./components/Common/Input.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// import "../../static/css/style.scss";
class Input extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      buttonCss: "search-button",
      inputCss: "input-fld",
      inputText: ''
    });

    _defineProperty(this, "handleClick", () => {
      this.setState({
        inputCss: "input-focus",
        buttonCss: "btn-focus"
      });
    });

    _defineProperty(this, "handleInputBlur", () => {
      this.setState({
        inputCss: "input-fld",
        buttonCss: "search-button"
      });
    });

    _defineProperty(this, "handleChange", e => {
      this.setState({
        inputText: e.target.value
      });
      event.preventDefault();
    });

    _defineProperty(this, "onSubmit", e => {
      console.log(this.state.inputText);
    });
  }

  render() {
    const {
      users
    } = this.props;
    return __jsx("div", {
      className: "search-box"
    }, __jsx("input", {
      type: "text",
      inputText: this.state.inputText,
      placeholder: this.props.placeholder,
      className: this.state.inputCss,
      onClick: this.handleClick,
      onBlur: this.handleInputBlur,
      onChange: this.handleChange
    }), __jsx("button", {
      className: this.state.buttonCss,
      style: {
        border: "none"
      },
      onClick: this.onSubmit
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      style: {
        fontSize: "20px"
      },
      type: "search"
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/Common/SideMenuLeft.js":
/*!*******************************************!*\
  !*** ./components/Common/SideMenuLeft.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ "antd/lib/layout/style");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// import "../../static/css/style.scss";
class SideMenuLeft extends react__WEBPACK_IMPORTED_MODULE_4__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, "SideNav"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SideMenuLeft);

/***/ }),

/***/ "./components/DragableExample/Dragable.js":
/*!************************************************!*\
  !*** ./components/DragableExample/Dragable.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _initial_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initial-data */ "./components/DragableExample/initial-data.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./column */ "./components/DragableExample/column.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import "@atlaskit/css-reset";



const array_move = (arr, old_index, new_index) => {
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;

    while (k--) {
      arr.push(undefined);
    }
  }

  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr; // for testing
};

class Dragable extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onDragEnd", result => {
      const {
        destination,
        source,
        draggableId
      } = result;

      if (!destination) {
        return;
      }

      if (destination.draggableId === source.draggableId && destination.index === source.index) {
        return;
      }

      const tasks = [...this.state.tasks];
      const newArr = array_move(tasks, source["index"], destination["index"]);
      console.log("your task Item is after....", newArr);
      this.setState({
        tasks: newArr
      });
    });

    this.state = {
      tasks: _initial_data__WEBPACK_IMPORTED_MODULE_1__["default"].tasks
    };
  }

  render() {
    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__["DragDropContext"], {
      onDragEnd: this.onDragEnd,
      onDragStart: this.onDragStart,
      onDragUpdate: this.onDragUpdate
    }, __jsx(_column__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: "column.id",
      tasks: this.state.tasks
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dragable); // state = initialData;
// onDragStart = () => {
//   document.body.style.color = "orange";
// };
// onDragUpdate = update => {
//   const { destination } = update;
//   const opacity = destination ? destination.index / Object.keys(this.state.tasks).length : 0;
// };
//   console.log("result ", result);
// document.body.style.color = "inherit";
// const { destination, source, draggableId } = result;
// if (!destination) {
//   return;
// }
// if (destination.draggableId === source.draggableId && destination.index === source.index) {
//   return;
// }
// const column = this.state.columns[source.droppableId];
// const newTaskIds = Array.from(column.taskIds);
// newTaskIds.splice(source.index, 1);
// newTaskIds.splice(destination.index, 0, draggableId);
// const newColumn = {
//   ...column,
//   taskIds: newTaskIds
// };
// const newState = {
//   ...this.state,
//   columns: {
//     ...this.state.columns,
//     [newColumn.id]: newColumn
//   }
// };
// this.setState(newState);
// };
// render() {
//   return (
//     <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate}>
//       {this.state.columnOrder.map(columnId => {
//         const column = this.state.columns[columnId];
//         console.log("columnId ::: ", column);
//         const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
//         console.log("task jdkfj ", tasks);
//         return <Column key={column.id} column={column} tasks={tasks} />;
//       })}
//     </DragDropContext>
//   );
// }

/***/ }),

/***/ "./components/DragableExample/column.js":
/*!**********************************************!*\
  !*** ./components/DragableExample/column.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./components/DragableExample/task.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3`
  padding: 8px;
`;
const TaskList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  padding: 8px;
  background-color: ${props => props.isDraggingOver ? "skyblue" : "white"};
`;

class Dragable extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      index,
      tasks
    } = this.props;
    console.log("Your coulmn id is #####.......", this.props.key);
    return __jsx(Container, null, __jsx(Title, null, "New Dropable"), __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__["Droppable"], {
      droppableId: tasks[0].id
    }, (provided, snapshot) => {
      return __jsx(TaskList, _extends({
        ref: provided.innerRef
      }, provided.droppableProps, {
        isDraggingOver: snapshot.isDraggingOver
      }), tasks.map((column, index) => {
        return __jsx(_task__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: column.id,
          task: column,
          index: index
        });
      }), provided.placeholder);
    })); // return this.props.column.title;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dragable);

/***/ }),

/***/ "./components/DragableExample/initial-data.js":
/*!****************************************************!*\
  !*** ./components/DragableExample/initial-data.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const initialData = {
//   tasks: {
//     "task-1": { id: "task-1", content: "Take out the garbage1" },
//     "task-2": { id: "task-2", content: "Take out the garbage2" },
//     "task-3": { id: "task-3", content: "Take out the garbage3" }
//   },
//   columns: {
//     "column-1": {
//       id: "column-1",
//       title: "To do",
//       taskIds: ["task-1", "task-2", "task-3"]
//     }
//   },
//   columnOrder: ["column-1"]
// };
// export default initialData;
const initialData = {
  tasks: [{
    id: "task-1",
    content: "Take out the garbage1"
  }, {
    id: "task-2",
    content: "Take out the garbage2"
  }, {
    id: "task-3",
    content: "Take out the garbage3"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (initialData); ///comment

/***/ }),

/***/ "./components/DragableExample/task.js":
/*!********************************************!*\
  !*** ./components/DragableExample/task.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
`;

class Task extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    // return null;
    return __jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__["Draggable"], {
      draggableId: this.props.task.id,
      index: this.props.index
    }, (provided, snapshot) => __jsx(Container, _extends({}, provided.draggableProps, provided.dragHandleProps, {
      ref: provided.innerRef,
      isDragging: snapshot.isDragging
    }), this.props.task.content));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Task);

/***/ }),

/***/ "./components/Layout/Dashboard.js":
/*!****************************************!*\
  !*** ./components/Layout/Dashboard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ "antd/lib/layout/style");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_actions_dashboardAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/dashboardAction */ "./redux/actions/dashboardAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Common_SideMenuLeft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Common/SideMenuLeft */ "./components/Common/SideMenuLeft.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import "../../static/css/style.scss";

class Dashboard extends react__WEBPACK_IMPORTED_MODULE_6__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});

    _defineProperty(this, "displayList", data => {
      const list = data.users && data.users.map((item, index) => __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
        md: 12,
        key: item._id
      }, __jsx("div", {
        className: "profile-card"
      }, __jsx("span", null, "X"), __jsx("div", {
        className: "card-img"
      }, __jsx("img", {
        src: item.profileUrl,
        className: "profile-img"
      })), __jsx("p", {
        className: "name"
      }, item.name))));
      return list;
    });
  }

  componentDidMount() {
    this.props.fetchProfiles();
  }

  render() {
    const {
      users
    } = this.props;
    console.log("your users....", users);
    return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      span: 4,
      md: 4,
      xs: 24,
      className: "sidenav"
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(_Common_SideMenuLeft__WEBPACK_IMPORTED_MODULE_9__["default"], null))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      span: 12,
      md: 12,
      xs: 24
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, this.props.users && this.displayList(users))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      span: 4,
      md: 4,
      xs: 24
    }, "Dashboard")));
  }

}

const mapStateToProps = state => {
  return {
    users: state.profiles
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fetchProfiles: data => {
      dispatch(Object(_redux_actions_dashboardAction__WEBPACK_IMPORTED_MODULE_7__["fetchProfiles"])(data));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Dashboard));

/***/ }),

/***/ "./components/Layout/Login.js":
/*!************************************!*\
  !*** ./components/Layout/Login.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "antd/lib/button/style");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style */ "antd/lib/layout/style");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/divider/style */ "antd/lib/divider/style");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/divider */ "antd/lib/divider");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input/style */ "antd/lib/input/style");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/icon/style */ "antd/lib/icon/style");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);














var __jsx = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement;


// import "../../static/css/style.scss";
class Login extends react__WEBPACK_IMPORTED_MODULE_14__["Component"] {
  render() {
    return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
      span: 14,
      md: 14,
      xs: 24
    }, "Login Page"), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
      span: 10,
      md: 10,
      xs: 24
    }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "card"
    }, __jsx("p", {
      className: "login-title"
    }, __jsx("h2", null, "Welcome to ")), __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "form-login"
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
      span: 1,
      md: 1,
      xs: 1
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
      type: "mail",
      className: "input-icon"
    })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
      span: 23,
      md: 23,
      xs: 23
    }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
      placeholder: "Email",
      className: "email"
    })), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: "line"
    })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
      span: 1,
      md: 1,
      xs: 1
    }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_11___default.a, {
      type: "lock",
      className: "input-icon"
    })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
      span: 23,
      md: 23,
      xs: 23
    }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_9___default.a, {
      type: "password",
      className: "password",
      placeholder: "input password"
    })), __jsx(antd_lib_divider__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: "line"
    })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
      span: 16,
      md: 16,
      xs: 24
    }), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
      span: 8,
      md: 8,
      xs: 24
    }, "forgot password"))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
      span: 1,
      md: 1,
      xs: 1
    }), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
      span: 22,
      md: 22,
      xs: 22
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "btn-submit"
    }, "SignIn")), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_13___default.a, {
      span: 1,
      md: 1,
      xs: 1
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./components/Navbar/Navar.js":
/*!************************************!*\
  !*** ./components/Navbar/Navar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ "antd/lib/layout/style");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "antd/lib/row/style");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "antd/lib/col/style");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Common_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Common/Input */ "./components/Common/Input.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

// import { fetchProfiles } from "../../redux/actions/dashboardAction";



class Navbar extends react__WEBPACK_IMPORTED_MODULE_6__["Component"] {
  render() {
    return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
      className: "navbar"
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      span: 24,
      md: 24,
      xs: 24
    }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: "p-10"
    }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      span: 4,
      md: 4,
      xs: 0
    }), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      span: 8,
      md: 8,
      xs: 24
    }, __jsx("div", {
      className: "search-area"
    }, __jsx(_Common_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
      placeholder: "Search"
    })))))));
  }

}

const mapStateToProps = state => {
  return {
    users: state.profiles
  };
};

function mapDispatchToProps(dispatch) {//   return {
  //     fetchProfiles: data => {
  //       dispatch(fetchProfiles(data));
  //     }
  //   };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Navbar));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/counterActions */ "./redux/actions/counterActions.js");
/* harmony import */ var _components_Layout_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Login */ "./components/Layout/Login.js");
/* harmony import */ var _components_DragableExample_Dragable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DragableExample/Dragable */ "./components/DragableExample/Dragable.js");
/* harmony import */ var _components_Layout_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout/Dashboard */ "./components/Layout/Dashboard.js");
/* harmony import */ var _components_Navbar_Navar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar/Navar */ "./components/Navbar/Navar.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static getInitialProps({
    store
  }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", null, __jsx(_components_Navbar_Navar__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_components_Layout_Dashboard__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  }

}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__["incrementCounter"],
  decrementCounter: _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__["decrementCounter"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./redux/actions/counterActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/counterActions.js ***!
  \*****************************************/
/*! exports provided: INCREMENT_COUNTER, DECREMENT_COUNTER, incrementCounter, decrementCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCounter", function() { return incrementCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCounter", function() { return decrementCounter; });
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER"; //Action Creator

const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});
const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});

/***/ }),

/***/ "./redux/actions/dashboardAction.js":
/*!******************************************!*\
  !*** ./redux/actions/dashboardAction.js ***!
  \******************************************/
/*! exports provided: apiRequest, fetchData, fetchProfiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiRequest", function() { return apiRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProfiles", function() { return fetchProfiles; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const apiUrl = "http://localhost:5000/user_list";
const apiRequest = () => {
  return {
    type: "PROFILE_REQUEST"
  };
};
const fetchData = data => {
  return {
    type: "PROFILE_SUCCESS",
    data
  };
};
const fetchProfiles = (data, browserHistory) => {
  const headers = {
    "Content-Type": "application/json"
  };
  return dispatch => {
    dispatch(apiRequest());
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(apiUrl, data).then(response => {
      console.log("YOur Response from the server is.......", response);
      dispatch(fetchData(response.data.datas));
    }).catch(error => {
      throw error;
    });
  };
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RANJEET_DON\Documents\exampl\exampl\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style":
/*!****************************************!*\
  !*** external "antd/lib/button/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/col/style":
/*!*************************************!*\
  !*** external "antd/lib/col/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style");

/***/ }),

/***/ "antd/lib/divider":
/*!***********************************!*\
  !*** external "antd/lib/divider" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/divider/style":
/*!*****************************************!*\
  !*** external "antd/lib/divider/style" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider/style");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/icon/style":
/*!**************************************!*\
  !*** external "antd/lib/icon/style" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/input/style":
/*!***************************************!*\
  !*** external "antd/lib/input/style" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input/style");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/layout/style":
/*!****************************************!*\
  !*** external "antd/lib/layout/style" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/style");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "antd/lib/row/style":
/*!*************************************!*\
  !*** external "antd/lib/row/style" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-beautiful-dnd":
/*!**************************************!*\
  !*** external "react-beautiful-dnd" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-beautiful-dnd");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map