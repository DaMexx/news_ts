export type userType = {
  email: string;
  name: string;
  id: number;
  created_at?: string;
  updated_at?: string;
  avatar?: string | null;
};

export type registrationType = {
  email: string;
  name: string;
  password: string | number;
};

export type loginType = {
  email: string;
  password: string;
};
 export type postType = {
  id: number;
  title: string;
  content: string;
  image?: string | null;
  user_id: number;
  user: userType;
  created_at?: string;
  updated_at?: string;
  tags: string[];
 }
