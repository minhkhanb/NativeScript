"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
        var _this = this;
        this.width = 0;
        this.height = 0;
        this.widthChange = new core_1.EventEmitter();
        this.heightChange = new core_1.EventEmitter();
        this.updateWidthByDevice = function () {
            _this.setDimension(window.innerWidth, window.innerHeight);
        };
        this.setDimension = function (w, h) {
            _this.width = w;
            _this.widthChange.emit(_this.width);
            _this.height = h;
            _this.heightChange.emit(_this.height);
        };
    }
    ContainerComponent.prototype.ngOnInit = function () {
        this.updateWidthByDevice();
    };
    ContainerComponent.prototype.onWindowResize = function (ev) {
        this.updateWidthByDevice();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "widthChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ContainerComponent.prototype, "heightChange", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ContainerComponent.prototype, "onWindowResize", null);
    ContainerComponent = __decorate([
        core_1.Component({
            selector: 'app-container',
            templateUrl: './container.component.html',
            styleUrls: ['./container.component.scss']
        })
    ], ContainerComponent);
    return ContainerComponent;
}());
exports.ContainerComponent = ContainerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbm50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFpbmVyLmNvbXBvbm50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNGO0FBT3RGO0lBTEE7UUFBQSxpQkErQkM7UUF4QkMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDRCxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO1FBQ3pDLGlCQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFXcEQsd0JBQW1CLEdBQUc7WUFDcEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUE7UUFFRCxpQkFBWSxHQUFHLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFuQkMscUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFHRCwyQ0FBYyxHQUFkLFVBQWUsRUFBRTtRQUNmLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFWUztRQUFULGFBQU0sRUFBRTs7MkRBQTBDO0lBQ3pDO1FBQVQsYUFBTSxFQUFFOzs0REFBMkM7SUFPcEQ7UUFEQyxtQkFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzREQUd6QztJQWRVLGtCQUFrQjtRQUw5QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO09BQ1csa0JBQWtCLENBMEI5QjtJQUFELHlCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250YWluZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHdpZHRoID0gMDtcbiAgaGVpZ2h0ID0gMDtcbiAgQE91dHB1dCgpIHdpZHRoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBoZWlnaHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVdpZHRoQnlEZXZpY2UoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxuICBvbldpbmRvd1Jlc2l6ZShldikge1xuICAgIHRoaXMudXBkYXRlV2lkdGhCeURldmljZSgpO1xuICB9XG5cbiAgdXBkYXRlV2lkdGhCeURldmljZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldERpbWVuc2lvbih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG4gIHNldERpbWVuc2lvbiA9ICh3LCBoKSA9PiB7XG4gICAgdGhpcy53aWR0aCA9IHc7XG4gICAgdGhpcy53aWR0aENoYW5nZS5lbWl0KHRoaXMud2lkdGgpO1xuICAgIHRoaXMuaGVpZ2h0ID0gaDtcbiAgICB0aGlzLmhlaWdodENoYW5nZS5lbWl0KHRoaXMuaGVpZ2h0KTtcbiAgfVxufVxuIl19