import { auth } from "./auth";
import { home } from "./home";
import { sidebar } from "./sidebar";
import { vote } from "./vote";

export const handlers = [...auth, ...home, ...vote, ...sidebar];
