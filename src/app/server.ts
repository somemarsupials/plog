import { constructApp } from './app';
import { fsStore } from './store';

const app = constructApp(fsStore);
app.listen(5000);
