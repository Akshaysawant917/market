// import PocketBase from 'pocketbase';
// import { POCKETBASE_URL } from '$env/static/private';

// export const load = async ({ cookies }) => {
//     const pb = new PocketBase(POCKETBASE_URL);
//     const token = cookies.get('pb_auth'); // Get the token from cookies

//     if (token) {
//         try {
//             pb.authStore.save(token, null); // Restore auth session
//             await pb.collection('users').authRefresh(); // Refresh auth session

//             return { user: pb.authStore.model }; // Send user data to frontend
//         } catch (err) {
//             console.error("Session refresh failed:", err);
//         }
//     }

//     return { user: null }; // If no token or failed, return null
// };
export const load = async ({ locals }) => {
    return {
        user: locals.user // Make user available to the client
    };
};
