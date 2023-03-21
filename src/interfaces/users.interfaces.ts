export interface IUserRequest {
    full_name: string;
    email: string;
    password: string;
    phone_number: string;    
  }

  export interface IUserResponse {
    id: number;
    full_name: string;
    email: string;    
    phone_number: string;
    registeredAt: Date;
    
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