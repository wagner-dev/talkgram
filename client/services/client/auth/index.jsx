import {useState, useContext, createContext } from 'react'

const UserContext = createContext(null)

export const AuthContext = ({userAuth, children}) => {
    
    const [user, setUser] = useState( userAuth )

    return ( 
        <UserContext.Provider
        value={{
            user,
            setUser
        }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(UserContext)
    if(context) {
        const { user,  setUser } = context
        return { user, setUser }
    }
}