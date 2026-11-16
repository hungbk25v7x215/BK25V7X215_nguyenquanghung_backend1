import app from "./app.js";
import config from "./app/config/index.js";

app.listen(config.app.port, () => {
  console.log(`Máy chủ đang chạy trên cổng ${config.app.port}.`);
});
