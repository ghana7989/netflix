
export const HOME = process.env.NODE_ENV === 'development' ? "/" : "/netflix";
export const BROWSE = process.env.NODE_ENV === 'development' ? "/browse" : "netflix/browse";
export const SIGN_UP = process.env.NODE_ENV === 'development' ? "/signup" : "/netflix/signup";
export const SIGN_IN = process.env.NODE_ENV === 'development' ? "/signin" : "/netflix/signin";