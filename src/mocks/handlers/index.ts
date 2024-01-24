import {auth} from './auth';
import {home} from './home';
import {invite} from './Invite';
import {sidebar} from './sidebar';
import {vote} from './vote';

export const handlers = [...home, ...vote, ...sidebar, ...invite];
