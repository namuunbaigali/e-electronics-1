const PORT = process.env.PORT || 8080;
import * as mongooseConfig from "./configs/mongoose-config";

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
