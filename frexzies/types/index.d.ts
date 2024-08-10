declare type User = {
  username?: string;
  email: string;
  password: string;
}

declare type Posts = {
  $id: string;
  title: string;
  $updatedAt: string;
}