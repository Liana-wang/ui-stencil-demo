import { camelToDashCase } from './case';
export var attachProps = function (node, newProps, oldProps) {
    if (oldProps === void 0) { oldProps = {}; }
    // some test frameworks don't render DOM elements, so we test here to make sure we are dealing with DOM first
    if (node instanceof Element) {
        // add any classes in className to the class list
        var className = getClassName(node.classList, newProps, oldProps);
        if (className !== '') {
            node.className = className;
        }
        Object.keys(newProps).forEach(function (name) {
            if (name === 'children' ||
                name === 'style' ||
                name === 'ref' ||
                name === 'class' ||
                name === 'className' ||
                name === 'forwardedRef') {
                return;
            }
            if (name.indexOf('on') === 0 && name[2] === name[2].toUpperCase()) {
                var eventName = name.substring(2);
                var eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
                if (typeof document !== 'undefined' && !isCoveredByReact(eventNameLc, document)) {
                    syncEvent(node, eventNameLc, newProps[name]);
                }
            }
            else {
                node[name] = newProps[name];
                var propType = typeof newProps[name];
                if (propType === 'string') {
                    node.setAttribute(camelToDashCase(name), newProps[name]);
                }
                else {
                    node[name] = newProps[name];
                }
            }
        });
    }
};
export var getClassName = function (classList, newProps, oldProps) {
    var newClassProp = newProps.className || newProps.class;
    var oldClassProp = oldProps.className || oldProps.class;
    // map the classes to Maps for performance
    var currentClasses = arrayToMap(classList);
    var incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(' ') : []);
    var oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(' ') : []);
    var finalClassNames = [];
    // loop through each of the current classes on the component
    // to see if it should be a part of the classNames added
    currentClasses.forEach(function (currentClass) {
        if (incomingPropClasses.has(currentClass)) {
            // add it as its already included in classnames coming in from newProps
            finalClassNames.push(currentClass);
            incomingPropClasses.delete(currentClass);
        }
        else if (!oldPropClasses.has(currentClass)) {
            // add it as it has NOT been removed by user
            finalClassNames.push(currentClass);
        }
    });
    incomingPropClasses.forEach(function (s) { return finalClassNames.push(s); });
    return finalClassNames.join(' ');
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
export var isCoveredByReact = function (eventNameSuffix, doc) {
    var eventName = 'on' + eventNameSuffix;
    var isSupported = eventName in doc;
    if (!isSupported) {
        var element = doc.createElement('div');
        element.setAttribute(eventName, 'return;');
        isSupported = typeof element[eventName] === 'function';
    }
    return isSupported;
};
export var syncEvent = function (node, eventName, newEventHandler) {
    var eventStore = node.__events || (node.__events = {});
    var oldEventHandler = eventStore[eventName];
    // Remove old listener so they don't double up.
    if (oldEventHandler) {
        node.removeEventListener(eventName, oldEventHandler);
    }
    // Bind new listener.
    node.addEventListener(eventName, (eventStore[eventName] = function handler(e) {
        if (newEventHandler) {
            newEventHandler.call(this, e);
        }
    }));
};
var arrayToMap = function (arr) {
    var map = new Map();
    arr.forEach(function (s) { return map.set(s, s); });
    return map;
};
//# sourceMappingURL=attachProps.js.map