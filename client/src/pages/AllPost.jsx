
import { useState } from "react";
import { getAllPost } from "../services/api";
import { useEffect } from "react"; // this works on component deadmont pe 
import Header from "../components/Header";
import {Box , Typography, Card, CardContent , InputBase , styled} from '@mui/material';

const SearchWrapper = styled(Box)({  // overriding the css using searchwrapper in react
    marginTop: 74, // header height is 64 pixels 
    display : 'flex',
    justifyContent: 'center',
    '& > div':{
        width: 500,
        height: 45,
        border: '1px solid #767676',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        marginRight: 20,
        paddingLeft: 10
    }
})

const PostWrapper = styled(Box)({
       display: 'flex',
       justifyContent: 'center',
       marginTop: 50,
       flexWrap: 'wrap', // we used it if any other comes so it shifts it self below it.
       '& > div':{
            border: '1px solid #442d0',
            borderRadius: 10,
            margin: 10,
            width:'30%',
            height: 300
       }

})

const AllPost = () => {

    const [post , setPosts] = useState([]);
    const [text , setText ] = useState("");

    useEffect(()=>{
        const getData  = async () => {
            const response  = await getAllPost(); // this is the required Api call 
            setPosts(response.data);
        }
        getData();
    },[])

    return( 
        <>
        <Header/>
        <SearchWrapper>
            <InputBase 
                placeholder="Search by Job Title " // for taking a text field where i can seacrch
                onChange = {(e) => setText(e.target.value)} // i am directly taking the thing from input field
            />
        </SearchWrapper>
        <PostWrapper>
            {
                post.filter(post => post.profile.toLowerCase().includes(text.toLowerCase())).map(post => ( // here we are mapping the required data 
                    <Card>
                        <CardContent>
                        <Typography variant = "h5">{post.profile}</Typography>
                        <Typography>{post.type === "Offline" ? "Remote" : "Office"}</Typography>
                        <Typography>Salary: {post.salary}</Typography>
                        <Typography
                            style={{color: '#6f6f6f',margin: '10px 0px'}}
                        >{post.description.length > 150 ? post.description.substring(0,150)+"..." : post.description}</Typography>

                        <Typography><b>Experience</b>: {post.experience}</Typography>
                        <Typography><b>Technology:</b> {post.technology}</Typography>
                        <Typography
                            style = {{color: '#6f6f6f', marginTop : 'auto' }}
                        >posted on {new Date(post.createdAt).toLocaleDateString()}</Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </PostWrapper>
        </>
    )
}

export default AllPost;

//inputbase works as input field
//when ever my code enters in the dom or it renders at the same moment i need to call the API 
//div tag consist of input wrapper