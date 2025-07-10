export interface Post {
  title: string;
  titlePosts: string;
  imgPost: string;
  description: string;
  name: string;
}
export interface CreateUser {
  name: string;
  password: string;
  avatar: File | null;
}
export interface Explanation {
  image: File | null;
  link: string;
  text: string;
  align: string;
  color: string;
}

export interface CreatePost {
  title: string;
  tags: string[];
  imagePost: File | null;
  explanation: string;
}
