export class UserBase {
  id: string;
  username: string;
  password: string;
}

export class UserExtend extends UserBase {
  active: boolean;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class User extends UserBase {
  constructor(id: string, username: string, password: string) {
    super();
    this.id = id;
    this.username = username;
    this.password = password;
  }
}
