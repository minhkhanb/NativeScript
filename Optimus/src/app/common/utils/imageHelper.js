"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * preload image
 * @param string imgSrc
 * @param Function onload
 * @param Function onerror
 */
exports.preloadImage = function (imgSrc, onload, onerror) {
    var img = new Image();
    img.src = imgSrc;
    if (onload) {
        img.onload = onload;
    }
    if (onerror) {
        img.onerror = onerror;
    }
};
exports.default = {
    preloadImage: exports.preloadImage,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbWFnZUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztHQUtHO0FBQ1UsUUFBQSxZQUFZLEdBQUksVUFBQyxNQUFjLEVBQUUsTUFBTSxFQUFFLE9BQU87SUFDM0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUN4QixHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUNqQixJQUFJLE1BQU0sRUFBRTtRQUNWLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3JCO0lBQ0QsSUFBSSxPQUFPLEVBQUU7UUFDWCxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN2QjtBQUNILENBQUMsQ0FBQztBQUVGLGtCQUFlO0lBQ2IsWUFBWSxzQkFBQTtDQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIHByZWxvYWQgaW1hZ2VcbiAqIEBwYXJhbSBzdHJpbmcgaW1nU3JjXG4gKiBAcGFyYW0gRnVuY3Rpb24gb25sb2FkXG4gKiBAcGFyYW0gRnVuY3Rpb24gb25lcnJvclxuICovXG5leHBvcnQgY29uc3QgcHJlbG9hZEltYWdlID0gIChpbWdTcmM6IHN0cmluZywgb25sb2FkLCBvbmVycm9yKSA9PiB7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuc3JjID0gaW1nU3JjO1xuICBpZiAob25sb2FkKSB7XG4gICAgaW1nLm9ubG9hZCA9IG9ubG9hZDtcbiAgfVxuICBpZiAob25lcnJvcikge1xuICAgIGltZy5vbmVycm9yID0gb25lcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcmVsb2FkSW1hZ2UsXG59O1xuIl19