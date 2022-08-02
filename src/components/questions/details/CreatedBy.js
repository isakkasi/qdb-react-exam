import { useEffect } from "react"
import { useState } from "react"
import userService from "../../../services/userService"


export const CreatedBy = ({author}) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        if(author) {
            userService.getUserDetails(author)
                .then(result => setUser(result))

        }
    }, [author])

    console.log(author);
    console.log(user);
    
    return (
        <span>{user ? user.fullName : '[UNK]'}</span>
        )
    }