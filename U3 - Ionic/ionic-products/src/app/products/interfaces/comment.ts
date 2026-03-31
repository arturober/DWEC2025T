import { User } from "src/app/auth/interfaces/user";

export interface CommentInsert {
  text: string;
}

export interface Comment extends CommentInsert {
  id: number;
  date: string;
  user: User;
}
