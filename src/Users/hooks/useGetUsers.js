import { getUsers } from "../utils";
import { useEffect, useState } from "react";

export const useGetUsers = () =>{
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(false);


      useEffect( ()=>{
        const fetchUsers = async () =>{
            try{
                setLoading(true);
                const reponse = await getUsers();
                setUsers(reponse.users);
                setLoading(false);
            }
            catch(error){
                 setErrors(`Error:${error.message}`)
                 setErrors(`Error: ${error.message}`)

            }
        }
        fetchUsers();
      },[] )

      return{users,loading,errors}
}


