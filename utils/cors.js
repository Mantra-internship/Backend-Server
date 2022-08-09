const corsOptions = {
  cors: {
    origin: "https://videochat-frontend.vercel.app/",
    methods: ["GET", "POST"],
    credentials: true,
  },
};

module.exports = corsOptions;
