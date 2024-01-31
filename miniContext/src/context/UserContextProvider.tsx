import { ReactNode, useState } from "react";
import UserContext from "./UserContext";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function UserContextProvider( {children }: Props) {
    
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
} 