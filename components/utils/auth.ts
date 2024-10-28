import { Amplify } from 'aws-amplify';
import { signIn, signOut, signUp, getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!,
    }
  }
});

// Define the return type for currentAuthenticatedUser
interface AuthUser {
  attributes: {
    email: string;
    [key: string]: string | boolean | number | null;
  };
}

// Export a custom Auth object with the methods we need
export const Auth = {
  signIn: (username: string, password: string) => 
    signIn({ 
      username, 
      password,
      options: {
        clientMetadata: {
          // Add any additional metadata if needed
        }
      }
    }),
  signOut: () => signOut(),
  signUp: ({ username, password }: { username: string; password: string }) => 
    signUp({ 
      username, 
      password,
      options: {
        userAttributes: {
          email: username
        },
        clientMetadata: {
          // Add any additional metadata if needed
        }
      }
    }),
  currentAuthenticatedUser: async (): Promise<AuthUser> => {
    await getCurrentUser(); // Verify user is authenticated
    const attributes = await fetchUserAttributes();
    
    // Ensure email exists and transform the attributes to match our UserType
    if (!attributes.email) {
      throw new Error('User email not found');
    }
    
    return {
      attributes: {
        email: attributes.email,
        ...attributes
      }
    };
  },
  federatedSignIn: async ({ }) => {
    throw new Error('Federation not implemented');
  }
};
