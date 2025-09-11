import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68bce6bf4cc2235d2ded8c8a", 
  requiresAuth: true // Ensure authentication is required for all operations
});
