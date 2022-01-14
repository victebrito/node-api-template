const config = {
    port: 3000,
    auth: {
        JWT_SECRET: "",
        JWT_SESSION: { session: false },
    },
    mongodb: {
        connectionString: "mongodb+srv://",
    },
    aws: {
        AWS_ACCESS_KEY_ID: "",       
        AWS_SECRET_ACCESS_KEY:"",
        AWS_REGION: "",
        AWS_S3_BUCKET: "",
    }
};

module.exports = config;
