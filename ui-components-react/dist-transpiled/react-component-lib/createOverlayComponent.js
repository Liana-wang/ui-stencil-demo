import { __assign, __awaiter, __extends, __generator, __rest } from "tslib";
import React from 'react';
import ReactDOM from 'react-dom';
import { attachProps } from './utils';
export var createOverlayComponent = function (displayName, controller) {
    var didDismissEventName = "on" + displayName + "DidDismiss";
    var didPresentEventName = "on" + displayName + "DidPresent";
    var willDismissEventName = "on" + displayName + "WillDismiss";
    var willPresentEventName = "on" + displayName + "WillPresent";
    var Overlay = /** @class */ (function (_super) {
        __extends(Overlay, _super);
        function Overlay(props) {
            var _this = _super.call(this, props) || this;
            _this.el = document.createElement('div');
            _this.handleDismiss = _this.handleDismiss.bind(_this);
            return _this;
        }
        Object.defineProperty(Overlay, "displayName", {
            get: function () {
                return displayName;
            },
            enumerable: false,
            configurable: true
        });
        Overlay.prototype.componentDidMount = function () {
            if (this.props.isOpen) {
                this.present();
            }
        };
        Overlay.prototype.componentWillUnmount = function () {
            if (this.overlay) {
                this.overlay.dismiss();
            }
        };
        Overlay.prototype.handleDismiss = function (event) {
            if (this.props.onDidDismiss) {
                this.props.onDidDismiss(event);
            }
            if (this.props.forwardedRef) {
                this.props.forwardedRef.current = undefined;
            }
        };
        Overlay.prototype.componentDidUpdate = function (prevProps) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.overlay) {
                                attachProps(this.overlay, this.props, prevProps);
                            }
                            if (prevProps.isOpen !== this.props.isOpen && this.props.isOpen === true) {
                                this.present(prevProps);
                            }
                            if (!(this.overlay && prevProps.isOpen !== this.props.isOpen && this.props.isOpen === false)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.overlay.dismiss()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        Overlay.prototype.present = function (prevProps) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, children, isOpen, onDidDismiss, onDidPresent, onWillDismiss, onWillPresent, cProps, elementProps, _b;
                var _c;
                var _this = this;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _a = this.props, children = _a.children, isOpen = _a.isOpen, onDidDismiss = _a.onDidDismiss, onDidPresent = _a.onDidPresent, onWillDismiss = _a.onWillDismiss, onWillPresent = _a.onWillPresent, cProps = __rest(_a, ["children", "isOpen", "onDidDismiss", "onDidPresent", "onWillDismiss", "onWillPresent"]);
                            elementProps = __assign(__assign({}, cProps), (_c = { ref: this.props.forwardedRef }, _c[didDismissEventName] = this.handleDismiss, _c[didPresentEventName] = function (e) {
                                return _this.props.onDidPresent && _this.props.onDidPresent(e);
                            }, _c[willDismissEventName] = function (e) {
                                return _this.props.onWillDismiss && _this.props.onWillDismiss(e);
                            }, _c[willPresentEventName] = function (e) {
                                return _this.props.onWillPresent && _this.props.onWillPresent(e);
                            }, _c));
                            _b = this;
                            return [4 /*yield*/, controller.create(__assign(__assign({}, elementProps), { component: this.el, componentProps: {} }))];
                        case 1:
                            _b.overlay = _d.sent();
                            if (this.props.forwardedRef) {
                                this.props.forwardedRef.current = this.overlay;
                            }
                            attachProps(this.overlay, elementProps, prevProps);
                            return [4 /*yield*/, this.overlay.present()];
                        case 2:
                            _d.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        Overlay.prototype.render = function () {
            return ReactDOM.createPortal(this.props.isOpen ? this.props.children : null, this.el);
        };
        return Overlay;
    }(React.Component));
    return React.forwardRef(function (props, ref) {
        return React.createElement(Overlay, __assign({}, props, { forwardedRef: ref }));
    });
};
//# sourceMappingURL=createOverlayComponent.js.map