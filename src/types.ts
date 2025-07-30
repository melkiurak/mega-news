export interface CreateUser {
  username: string;
  password: string;
  avatar: string | null;
}
export interface User {
  isLogin: boolean;
  id: string | null;
  username: string;
  avatar?: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  banner: string | null;
  explanation: Explanation[];
}
export interface ChangePasswordData {
  oldPassword: string;
  newPassword: string;
}
export interface Explanation {
  title: string;
  paragraph: string;
  img: string | null;
}
export interface CreatePost {
  user: User[];
  date: string;
  title: string;
  tags: Tags[];
  imagePost: string | null;
  explanation: Explanation[];
  favoriteCount: number;
}

export interface Post {
  objectId: string;
  title: string;
  imagePost: string;
  explanation: Explanation[];
  tags: Tags[];
  user: User;
  date: string;
  favoriteCount: number;
}
export interface Explanation {
  image: string | null;
  link: string;
  text: string;
  align: string;
  color: string;
}
export interface Tags {
  name: string;
  image: string | null;
  id: string | null;
}
