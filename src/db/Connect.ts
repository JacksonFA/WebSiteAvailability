import mongoose from 'mongoose';
import config from '../Config/default';

const Connect = async () => {
    const dbUri = config.dbUri as string;

    return mongoose
        .connect(dbUri)
        .then(() => {
            console.log('DB connected');
        })
        .catch(error => {
            console.log('Error DB connection: ' + error);
            process.exit(1);
        });
}

export default Connect;