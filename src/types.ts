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
