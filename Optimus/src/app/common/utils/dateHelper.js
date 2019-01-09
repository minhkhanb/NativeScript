"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
exports.DATE_FORMAT = 'YMMDD';
/**
 * Format datetime
 * @param dateTime Date
 * @param formatString string
 * @returns {String} formatted datetime string. If got error, return an empty string.
 */
exports.formatDateTimeByString = function (dateTime, formatString) {
    var result;
    try {
        result = moment(dateTime).format(formatString);
    }
    catch (error) {
        result = '';
    }
    return result === 'Invalid date' ? '' : result;
};
/**
 * Get current date string
 * @returns {String} formatted datetime string. If got error, return an empty string.
 */
exports.getCurrentDateString = function () {
    return exports.formatDateTimeByString(new Date(), exports.DATE_FORMAT);
};
exports.default = {
    formatDateTimeByString: exports.formatDateTimeByString,
    getCurrentDateString: exports.getCurrentDateString,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZUhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGVIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBaUM7QUFFcEIsUUFBQSxXQUFXLEdBQUcsT0FBTyxDQUFDO0FBRW5DOzs7OztHQUtHO0FBQ1UsUUFBQSxzQkFBc0IsR0FBRyxVQUFDLFFBQWMsRUFBRSxZQUFvQjtJQUN6RSxJQUFJLE1BQWMsQ0FBQztJQUNuQixJQUFJO1FBQ0YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDaEQ7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE1BQU0sR0FBRyxFQUFFLENBQUM7S0FDYjtJQUNELE9BQU8sTUFBTSxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDakQsQ0FBQyxDQUFBO0FBRUQ7OztHQUdHO0FBQ1UsUUFBQSxvQkFBb0IsR0FBRztJQUNsQyxPQUFPLDhCQUFzQixDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsbUJBQVcsQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQTtBQUVELGtCQUFlO0lBQ2Isc0JBQXNCLGdDQUFBO0lBQ3RCLG9CQUFvQiw4QkFBQTtDQUNyQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBjb25zdCBEQVRFX0ZPUk1BVCA9ICdZTU1ERCc7XG5cbi8qKlxuICogRm9ybWF0IGRhdGV0aW1lXG4gKiBAcGFyYW0gZGF0ZVRpbWUgRGF0ZVxuICogQHBhcmFtIGZvcm1hdFN0cmluZyBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZvcm1hdHRlZCBkYXRldGltZSBzdHJpbmcuIElmIGdvdCBlcnJvciwgcmV0dXJuIGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1hdERhdGVUaW1lQnlTdHJpbmcgPSAoZGF0ZVRpbWU6IERhdGUsIGZvcm1hdFN0cmluZzogc3RyaW5nKSA9PiB7XG4gIGxldCByZXN1bHQ6IHN0cmluZztcbiAgdHJ5IHtcbiAgICByZXN1bHQgPSBtb21lbnQoZGF0ZVRpbWUpLmZvcm1hdChmb3JtYXRTdHJpbmcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlc3VsdCA9ICcnO1xuICB9XG4gIHJldHVybiByZXN1bHQgPT09ICdJbnZhbGlkIGRhdGUnID8gJycgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0IGN1cnJlbnQgZGF0ZSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IGZvcm1hdHRlZCBkYXRldGltZSBzdHJpbmcuIElmIGdvdCBlcnJvciwgcmV0dXJuIGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnREYXRlU3RyaW5nID0gKCkgPT4ge1xuICByZXR1cm4gZm9ybWF0RGF0ZVRpbWVCeVN0cmluZyhuZXcgRGF0ZSgpLCBEQVRFX0ZPUk1BVCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZm9ybWF0RGF0ZVRpbWVCeVN0cmluZyxcbiAgZ2V0Q3VycmVudERhdGVTdHJpbmcsXG59Il19