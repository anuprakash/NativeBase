
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _NativeBaseComponent2=require('../../Base/NativeBaseComponent');var _NativeBaseComponent3=_interopRequireDefault(_NativeBaseComponent2);
var _computeProps=require('../../../Utils/computeProps');var _computeProps2=_interopRequireDefault(_computeProps);
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _blueimpMd=require('blueimp-md5');var _blueimpMd2=_interopRequireDefault(_blueimpMd);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var GRAVATAR_URI='https://www.gravatar.com/avatar/';var

GravatarNB=function(_NativeBaseComponent){_inherits(GravatarNB,_NativeBaseComponent);function GravatarNB(){_classCallCheck(this,GravatarNB);return _possibleConstructorReturn(this,(GravatarNB.__proto__||Object.getPrototypeOf(GravatarNB)).apply(this,arguments));}_createClass(GravatarNB,[{key:'getInitialStyle',value:function getInitialStyle()









{
return{
gravatar:{
borderRadius:this.props.size?this.props.size/2:15,
width:this.props.size?this.props.size:30,
height:this.props.size?this.props.size:30,
resizeMode:this.props.contain?'contain':undefined}};


}},{key:'prepareRootProps',value:function prepareRootProps()

{
var gravatarStyle={};
if(this.props.circular){
gravatarStyle.width=this.props.size;
gravatarStyle.height=this.props.size;
gravatarStyle.borderRadius=this.props.size/2;
}else
if(this.props.square){
gravatarStyle.width=this.props.size;
gravatarStyle.height=this.props.size;
gravatarStyle.borderRadius=0;
}

var defaultProps={
style:_lodash2.default.merge(this.getInitialStyle().gravatar,gravatarStyle)};


return(0,_computeProps2.default)(this.props,defaultProps);
}},{key:'render',value:function render()

{var _this2=this;
var props=this.prepareRootProps();

var uri=GRAVATAR_URI+(0,_blueimpMd2.default)(this.props.email)+'?s='+props.style.height;
return(
_react2.default.createElement(_reactNative.Image,_extends({ref:function ref(c){return _this2._root=c;}},props,{source:{uri:uri}})));

}}]);return GravatarNB;}(_NativeBaseComponent3.default);exports.default=GravatarNB;
//# sourceMappingURL=index.js.map