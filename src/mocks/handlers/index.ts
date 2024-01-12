import { auth } from "./auth";
import { home } from "./home";
import { vote } from "./vote";

export const handlers = [...auth, ...home, ...vote];
