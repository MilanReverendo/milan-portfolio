import type { NextConfig } from "next";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const nextConfig: NextConfig = {
  env: {
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
  },
};

export default nextConfig;