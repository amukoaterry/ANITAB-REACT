const baseUrl = process.env.REACT_APP_BASE_URL;

export const getUsers = async() => {
    try{
        const reponse = await fetch(`${baseUrl}/users`);
        return reponse.json();
        }catch (error) {
        throw new Error(error.message);
    }
};