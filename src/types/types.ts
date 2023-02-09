export type userType = {
    created_at?: string;
    email: string;
    name: string;
    updated_at?: string;
    id:number,
    avatar?: string | null
  };

export type registrationType = {
    email: string;
    name: string;
    password: string | number;
}