import { auth } from "./auth";
import { home } from "./home";

export const handlers = [...auth, ...home];
