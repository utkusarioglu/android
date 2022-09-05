import { ethers } from "ethers";

const INFURA_API_KEY = process.env.INFURA_API_KEY;

export const provider = new ethers.providers.InfuraProvider(
  "homestead",
  INFURA_API_KEY,
);
