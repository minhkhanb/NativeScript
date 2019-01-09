"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var LoadingInterceptor = /** @class */ (function () {
    function LoadingInterceptor() {
    }
    LoadingInterceptor.prototype.intercept = function (req, next) {
        // show loading icon
        // toggleLoading(req.url, true);
        return next.handle(req).pipe(operators_1.tap(), operators_1.finalize(function () {
            // hide loading icon
            // toggleLoading(req.url, false);
        }));
    };
    LoadingInterceptor = __decorate([
        core_1.Injectable()
    ], LoadingInterceptor);
    return LoadingInterceptor;
}());
exports.LoadingInterceptor = LoadingInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYWRpbmcuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFRM0MsNENBQStDO0FBRy9DO0lBQUE7SUFjQSxDQUFDO0lBWkMsc0NBQVMsR0FBVCxVQUFVLEdBQXFCLEVBQUUsSUFBaUI7UUFDaEQsb0JBQW9CO1FBQ3BCLGdDQUFnQztRQUVoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUMxQixlQUFHLEVBQUUsRUFDTCxvQkFBUSxDQUFDO1lBQ1Asb0JBQW9CO1lBQ3BCLGlDQUFpQztRQUNuQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQWJVLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFO09BQ0Esa0JBQWtCLENBYzlCO0lBQUQseUJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBFdmVudCxcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaW5hbGl6ZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9hZGluZ0ludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcblxuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICAvLyBzaG93IGxvYWRpbmcgaWNvblxuICAgIC8vIHRvZ2dsZUxvYWRpbmcocmVxLnVybCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxKS5waXBlKFxuICAgICAgdGFwKCksXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgIC8vIGhpZGUgbG9hZGluZyBpY29uXG4gICAgICAgIC8vIHRvZ2dsZUxvYWRpbmcocmVxLnVybCwgZmFsc2UpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=