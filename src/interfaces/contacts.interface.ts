export interface IContactRequest {
    full_name: string;
    email: string;
    phone_number: string;    
  }

  export interface IContactResponse {
    id: number;
    full_name: string;
    email: string;    
    phone_number: string;
    registeredAt: Date;
    
  }
  
  export interface IContactUpdate {
    full_name?: string;
    email?: string;    
    phone_number?: string    
  }
  