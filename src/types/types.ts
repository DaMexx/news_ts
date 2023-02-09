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
  user_id: number;
  user: userType;
  tags: string[];
  created_at?: string;
  updated_at?: string;
  image?: string | null;
 }
