import {useState} from "react"; // this is react hook 
import Header from "../components/Header";
import {Box,Typography,styled,TextField, Button} from '@mui/material';
import Dropdown from "../components/DropDown";
import { savePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import { routhPath } from "../routes/route";

const Component = styled(Box)({
    padding : '80px 220px',
    background : '#F5F5f5'
    })

const Container = styled(Box)({
    display : 'flex',
    background: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'Space-between',
    alignItems: 'center',
    padding: '0 70px',
    '& > p ':{
        fontSize: 35,
        fontWeight: 700,
        opacity: .7
    }
})

const FormWrapper = styled(Box)({
    display: 'flex',
    flexDirection : 'column',
    marginTop: 20,
    padding: 20,
    background: '#FFFFFF',
    borderRadius: 20,
    '& > *':{
        marginTop: '20px !important'
    }
})

const defaultObj = {
    profile:"",
    type:"",
    description:"",
    experience:"",
    technology:[], // multiple values will be stored in array or we can take comma seprated string also
    salary: ""
}

const options = {
    type: ["Online","Offline"],
    experience: [ "0-2 Years","3-5 Years","5-8 Years", "8 and more years"],
    technology:["Java", "Javascipt","Angular","React","Node.js","Docker","AWS","HTML", "CSS","C","C++","C#","Python","R","Ruby"],
    salary: ["Rs 0-300000","Rs 300000-500000","Rs 500000-800000","Rs 800000-1300000","Rs 1300000 and more"]
}

const CreatePost = () =>{
    const [data, setData] = useState(defaultObj);

    const navigate = useNavigate();

    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";

    const handleChange = (e) => { // javascript basics whenever you call a function then an event object gets triggered gives all the info about triggering,most imp. is value
        setData({...data,[e.target.name]: e.target.value}) // spreding data for appending the new values and does not override also key is used for storing value where to be stored
    }

    const saveJob = async () => {
        await savePost(data); // payload is required in post api 
        navigate(routhPath.posts);
    }

    return(
        <>
            <Header/>
            <Component>
                <Container>
                    <Typography>Create a job post</Typography>
                    <img src = {image} alt = "create"/>
                </Container>
                <FormWrapper>
                    <TextField
                        placeholder="Job Title"  // hint for user 
                        name ="profile"
                        onChange={handleChange}
                    />
                    <Dropdown
                    label = "Job Type" // when using string no need of curlly brasis
                    id = "job-type-label"
                    value = {data.type} // data object / type is the key
                    handleChange = {handleChange}
                    name="type"
                    options = {options.type}
                    />
                    <TextField
                        placeholder="Job Description" // hint for user 
                        name = "description"
                        onChange={handleChange} 
                    />
                    <Dropdown
                        label = "Experience" // when using string no need of curlly brasis
                        id = "job-experience-label"
                        value = {data.experience} 
                        handleChange = {handleChange}
                        options = {options.experience}
                        name = "experience" // values will be stored in experience 
                    />
                    <Dropdown
                        label = "Technology" // when using string no need of curlly brasis
                        id = "job-technology-label"
                        value = {data.technology} 
                        handleChange = {handleChange}
                        name="technology"
                        options = {options.technology}
                        multiple // used for selecting multiple things
                    />
                    <Dropdown
                        label = "Salary" // when using string no need of curlly brasis
                        id = "job-salary-label"
                        value = {data.salary} 
                        handleChange = {handleChange}
                        options = {options.salary}
                        name = "salary"                  
                    />
                    <Button onClick={()=> saveJob()} variant = "contained" >Save Job</Button>
                </FormWrapper>
            </Component>
        </>
    )
}

export default CreatePost;