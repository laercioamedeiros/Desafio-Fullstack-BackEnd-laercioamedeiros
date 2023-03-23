export interface IUserRequest {
    full_name: string;
    email: string;
    password: string;
    phone_number: string;
    isAdm?: boolean;  
  }

  export interface IUserResponse extends IUserRequest {
    id: number;   
    registeredAt: Date;
    isActive:boolean;
    isAdm:boolean
  }
  
  export interface IUserLogin {
    email: string;
    password: string;
  }
  
  export interface IUserUpdate {
    full_name?: string;
    email?: string;    
    phone_number?: string
    password?: string;
    
  }