import app from './src/app';
import { sequelize } from './src/config/Database';

const port = 4000;

const initApp = async () => {
    try {
        await sequelize.sync({ alter: true });
        app.listen(process.env.PORT || port);
    } catch (error) {
        console.log(error);
    }
}

initApp();
