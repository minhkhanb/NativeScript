"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FocusDirective = /** @class */ (function () {
    function FocusDirective(el) {
        el.nativeElement.focus();
    }
    FocusDirective = __decorate([
        core_1.Directive({
            selector: '[inputFocus]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FocusDirective);
    return FocusDirective;
}());
exports.FocusDirective = FocusDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNEO0FBS3REO0lBQ0Usd0JBQVksRUFBYztRQUN4QixFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFIVSxjQUFjO1FBSDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztTQUN6QixDQUFDO3lDQUVnQixpQkFBVTtPQURmLGNBQWMsQ0FJMUI7SUFBRCxxQkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpbnB1dEZvY3VzXSdcbn0pXG5leHBvcnQgY2xhc3MgRm9jdXNEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZikge1xuICAgIGVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxufVxuIl19