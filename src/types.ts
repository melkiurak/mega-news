export interface Post {
  title: string;
  titlePosts: string;
  imgPost: string;
  description: string;
  name: string;
  date: string;
}
export interface CreateUser {
  username: string;
  password: string;
  avatar: File | null;
}
export interface User {
  isLogin: boolean;
  id: string | null;
  username: string | null;
  avatar?: string | null;
}
export interface Explanation {
  image: File | null;
  link: string;
  text: string;
  align: string;
  color: string;
}

export interface CreatePost {
  user: User[];
  title: string;
  tags: Tags[];
  imagePost: File | null;
  explanation: string;
}

export interface Tags {
  name: string;
  image: string | null;
}
