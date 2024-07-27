import axios from 'axios';

const API_URL = "http://localhost:8080" // 8080 is used for springboot api call and 3000 is used for react api call

export const savePost = async(payload) => {  // whenever you call and api is an asyncronous request
    try{
    return await axios.post(`${API_URL}/post`,payload);
    } catch(error){
        console.log("Error: ",error.message);
        return error.response.data;
    }

}

export const getAllPost = async () => {
    try{
        return await axios.get(`${API_URL}/posts`);
        } catch(error){
            console.log("Error: ",error.message);
            return error.response.data;
        }
}


// the new guest API should be handaled correctly in backend  