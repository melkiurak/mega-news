export interface CreateUser {
  username: string;
  password: string;
  avatar: File | null;
}
export interface User {
  isLogin: boolean;
  id: string | null;
  username: string;
  avatar?: string | null;
}
export interface Explanation {
  title: string;
  paragraph: string;
  img: File | null;
}
export interface CreatePost {
  user: User[];
  date: string;
  title: string;
  tags: Tags[];
  imagePost: File | null;
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
  image: File | null;
  link: string;
  text: string;
  align: string;
  color: string;
}
export interface Tags {
  name: string;
  image: string | null;
}
