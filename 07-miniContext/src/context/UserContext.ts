import { createContext } from "react";

interface IContext {
    user?: any,
    setUser?: any
}

const initialState: IContext = {};

const UserContext = createContext(initialState);

export default UserContext;