import { constructApp } from "./app";
import { createFsStore } from "./store";

const app = constructApp(createFsStore("/Users/tbw/log"));
app.listen(5000);
