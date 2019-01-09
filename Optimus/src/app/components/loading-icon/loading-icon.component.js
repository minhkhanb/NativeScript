"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LoadingIconComponent = /** @class */ (function () {
    function LoadingIconComponent() {
        var _this = this;
        this.iconPath = 'assets/icons/animated-loading-icon.gif';
        this.iconRatio = 0.1;
        this.updateStyle = function () {
            if (_this.viewportWith) {
                _this.styles = {
                    width: _this.iconRatio * _this.viewportWith + "px",
                    hieght: _this.iconRatio * _this.viewportWith + "px",
                };
            }
            else {
                _this.styles = {
                    width: '30px',
                    hieght: '30px',
                };
            }
        };
    }
    LoadingIconComponent.prototype.ngOnInit = function () {
    };
    LoadingIconComponent.prototype.ngOnChanges = function () {
        this.updateStyle();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LoadingIconComponent.prototype, "viewportWith", void 0);
    LoadingIconComponent = __decorate([
        core_1.Component({
            selector: 'loading-icon',
            templateUrl: './loading-icon.component.html',
            styleUrls: ['./loading-icon.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], LoadingIconComponent);
    return LoadingIconComponent;
}());
exports.LoadingIconComponent = LoadingIconComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy1pY29uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvYWRpbmctaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFPcEU7SUFPRTtRQUFBLGlCQUFpQjtRQUxqQixhQUFRLEdBQUcsd0NBQXdDLENBQUM7UUFHcEQsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQVdoQixnQkFBVyxHQUFHO1lBQ1osSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHO29CQUNaLEtBQUssRUFBSyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxZQUFZLE9BQUk7b0JBQ2hELE1BQU0sRUFBSyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxZQUFZLE9BQUk7aUJBQ2xELENBQUM7YUFDSDtpQkFBTTtnQkFDTCxLQUFJLENBQUMsTUFBTSxHQUFHO29CQUNaLEtBQUssRUFBRSxNQUFNO29CQUNiLE1BQU0sRUFBRSxNQUFNO2lCQUNmLENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQTtJQXJCZSxDQUFDO0lBRWpCLHVDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBWFE7UUFBUixZQUFLLEVBQUU7OzhEQUFzQjtJQUhuQixvQkFBb0I7UUFMaEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzs7T0FDVyxvQkFBb0IsQ0E4QmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2FkaW5nLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZGluZy1pY29uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0ljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgaWNvblBhdGggPSAnYXNzZXRzL2ljb25zL2FuaW1hdGVkLWxvYWRpbmctaWNvbi5naWYnO1xuICBASW5wdXQoKSB2aWV3cG9ydFdpdGg6IG51bWJlcjtcbiAgc3R5bGVzOiBPYmplY3Q7XG4gIGljb25SYXRpbyA9IDAuMTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy51cGRhdGVTdHlsZSgpO1xuICB9XG5cbiAgdXBkYXRlU3R5bGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudmlld3BvcnRXaXRoKSB7XG4gICAgICB0aGlzLnN0eWxlcyA9IHtcbiAgICAgICAgd2lkdGg6IGAke3RoaXMuaWNvblJhdGlvICogdGhpcy52aWV3cG9ydFdpdGh9cHhgLFxuICAgICAgICBoaWVnaHQ6IGAke3RoaXMuaWNvblJhdGlvICogdGhpcy52aWV3cG9ydFdpdGh9cHhgLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZXMgPSB7XG4gICAgICAgIHdpZHRoOiAnMzBweCcsXG4gICAgICAgIGhpZWdodDogJzMwcHgnLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxufVxuIl19