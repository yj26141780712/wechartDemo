"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_1 = require("./utils/token");
App({
    globalData: {},
    onLaunch: function () {
        var token = new token_1.Token();
        token.verify();
    },
    onShow: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXNDO0FBR3RDLEdBQUcsQ0FBYTtJQUNkLFVBQVUsRUFBRSxFQUFFO0lBQ2QsUUFBUTtRQUNOLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDRCxNQUFNO0lBRU4sQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRva2VuIH0gZnJvbSBcIi4vdXRpbHMvdG9rZW5cIjtcblxuLy8gYXBwLnRzXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBnbG9iYWxEYXRhOiB7fSxcbiAgb25MYXVuY2goKSB7XG4gICAgdmFyIHRva2VuID0gbmV3IFRva2VuKCk7XG4gICAgdG9rZW4udmVyaWZ5KCk7XG4gIH0sXG4gIG9uU2hvdygpe1xuICBcbiAgfSxcbn0pIl19