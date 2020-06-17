import { Token } from "./utils/token";

// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    var token = new Token();
    token.verify();
  },
  onShow(){
  
  },
})