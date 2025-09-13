import app from "./app"
import getEnv from "./utils/getEnv"

const PORT = getEnv(String(process.env.PORT), "3333");



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
