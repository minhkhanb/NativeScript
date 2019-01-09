"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validate if email is valid
 * @returns Boolean
 */
exports.validateEmail = function (email) {
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
};
/**
 * Validate if password is valid
 * @returns Boolean
 */
exports.validatePassword = function (password) {
    // return /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,20}$/.test(password);
    return Boolean(password && password.length > 5 && password.length < 20);
};
exports.default = {
    validateEmail: exports.validateEmail,
    validatePassword: exports.validatePassword,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGVIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YWxpZGF0ZUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7R0FHRztBQUNVLFFBQUEsYUFBYSxHQUFHLFVBQUMsS0FBYTtJQUN6QyxPQUFPLDREQUE0RCxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRixDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDVSxRQUFBLGdCQUFnQixHQUFHLFVBQUMsUUFBZ0I7SUFDL0MsOEVBQThFO0lBQzlFLE9BQU8sT0FBTyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzFFLENBQUMsQ0FBQztBQUVGLGtCQUFlO0lBQ2IsYUFBYSx1QkFBQTtJQUNiLGdCQUFnQiwwQkFBQTtDQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBWYWxpZGF0ZSBpZiBlbWFpbCBpcyB2YWxpZFxuICogQHJldHVybnMgQm9vbGVhblxuICovXG5leHBvcnQgY29uc3QgdmFsaWRhdGVFbWFpbCA9IChlbWFpbDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiAvXihbYS16QS1aMC05X1xcLVxcLl0rKUAoW2EtekEtWjAtOV9cXC1cXC5dKylcXC4oW2EtekEtWl17Miw1fSkkLy50ZXN0KGVtYWlsKTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGUgaWYgcGFzc3dvcmQgaXMgdmFsaWRcbiAqIEByZXR1cm5zIEJvb2xlYW5cbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlUGFzc3dvcmQgPSAocGFzc3dvcmQ6IHN0cmluZykgPT4ge1xuICAvLyByZXR1cm4gL14oPz0uKlswLTldKy4qKSg/PS4qW2EtekEtWl0rLiopWzAtOWEtekEtWl17NiwyMH0kLy50ZXN0KHBhc3N3b3JkKTtcbiAgcmV0dXJuIEJvb2xlYW4ocGFzc3dvcmQgJiYgcGFzc3dvcmQubGVuZ3RoID4gNSAmJiBwYXNzd29yZC5sZW5ndGggPCAyMCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHZhbGlkYXRlRW1haWwsXG4gIHZhbGlkYXRlUGFzc3dvcmQsXG59O1xuIl19