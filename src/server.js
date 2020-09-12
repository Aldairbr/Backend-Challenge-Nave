import app from './app';
import { PORT } from './Config/envConfig';

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
