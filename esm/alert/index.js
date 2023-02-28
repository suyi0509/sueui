import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["text"];
import React from 'react';
var Alert = function Alert(props) {
  var text = props.text,
    res = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("div", null, text);
};
export default Alert;