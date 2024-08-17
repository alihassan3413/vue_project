export interface APIResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
}

export type Avatar = {
  _id: string;
  localPath: string;
  url: string;
};

export type User = {
  __v: number;
  _id: string;
  avatar: Avatar;
  createdAt: string;
  email: string;
  isEmailVerified: boolean;
  //"loginType": "EMAIL_PASSWORD",
  role: "ADMIN" | "USER";
  updatedAt: string;
  username: string;
};

export type loginData = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type Category = {
  _v: number;
  _id: string;
  updatedAt: string;
  createdAt: string;
  owner: string;
  name: string;
};

export type paginationContent = {
  limit: number;
  page: number;
  totalPages: number;
  serialNumberStartFrom: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: null | number;
};

export type Categories = paginationContent & {
  totalCategories: number;
  categories: Category[];
};
