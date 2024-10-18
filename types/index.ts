export interface User {
    id: string;
    email: string;
    name?: string;
    auth0Id: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface NavbarProps {
    className?: string;
  }
  