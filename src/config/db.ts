// Gettign database config data from environment variables
export default {
    uri: process.env.MONGO_URI!,
    options: {
        dbName: process.env.MONGO_DATABASE,
        // user: process.env.MONGO_USER,
        // pass: process.env.MONGO_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};
