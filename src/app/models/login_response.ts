/**
 * Created by adebayooluwadamilola on 8/8/17.
 */
import { User } from './user';

export interface LoginResponse {
  token: string;
  user: User;
}
