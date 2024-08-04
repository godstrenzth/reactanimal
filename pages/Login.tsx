import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, TextField, } from "@mui/material";
import { UserService } from "../services/user"
import { useEffect, useRef } from "react";
import {  useNavigate } from "react-router-dom";

function LoginPage()
{
  const userser= new UserService();
    const navigate = useNavigate();
    const Emailref=useRef<HTMLInputElement>();
    const Passref=useRef<HTMLInputElement>();
    console.log(localStorage.getItem("Type"))
    useEffect(()=>{
      if(localStorage.getItem("Type")=="0")
    {
      navigate("/vs");
    }
    if(localStorage.getItem("Type")=="1")
    {
      navigate("/rankall");
    }
  }, []);
    
    return (
        <div style={{backgroundColor:'#E4DBBF',placeContent:'center',width:'100vw'}}>
      {/* <Head /> */}
      <Container fixed>
        <Box
          display={"flex"}
          width={"100vm"}
          height={"100vh"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          borderColor={"black"}
          
        >
          <Card variant="outlined" sx={{ width: 500,filter:"drop-shadow(0px 0px 5px #545355)",borderRadius:5,backgroundColor:"#DF6E52"}}>
            <CardHeader title={""} />
            <CardContent sx={{marginTop:"-50px"}}>
                <div style={{display:'flex',justifyContent:'center',flexDirection:"column",alignItems:"center",marginTop:5}}>
                    <img  style={{width:230,height:200,borderRadius:20}} src="https://img5.pic.in.th/file/secure-sv1/animalVS2.png" alt="" />
                    
                    
                </div>
            
              {/* <p style={{ marginLeft: "12px" }}>Please enter username and password</p> */}

              <h3 style={{ marginLeft: "12px" }}>Email</h3>
              <div style={{display:"flex",alignItems:"center",marginLeft:"10px",borderRadius:10}}>
                
                <TextField
                 
                  label="Email"
                  variant="outlined"
                  size="small"
                  sx={{marginLeft:"5px",width:"100%"}}
                  inputRef={Emailref}
                  required
                />
              </div>
              <h3 style={{ marginLeft: "12px" }}>Password</h3>
              <div style={{display:"flex",alignItems:"center",marginLeft:"10px"}}>
                
                <TextField
                
                  label="Password"
                  variant="outlined"
                  size="small"
                  type="password"
                  sx={{marginLeft:"5px",width:"100%"}}
                  inputRef={Passref}
                  required
                />
                <br />
                
              </div>
              {/* <p style={{ marginLeft: "12px",justifyItems:'end' }}>ForgotPassword</p> */}
              <div  style={{display:"flex",alignItems:"center",marginLeft:"10px",flexDirection:'column',marginTop:15}}>
                <Button variant="contained" onClick={Login} style={{borderRadius:10,width:'80%',backgroundColor:"#8BBE9B",color:'black'}}>LOGIN</Button>
                <Button variant="contained" onClick={register} style={{borderRadius:10,width:'80%',marginTop:10,backgroundColor:"#8BBE9B",color:'black'}}>REGISTER</Button>
              </div>
            </CardContent>
            <CardActions sx={{marginTop:"10px",padding:'20px',justifyContent:'space-between'}}>
              {/* <Button variant="outlined">SIGN UP</Button>
              <Button variant="contained">LOGIN</Button>
               */}
              {/* <Button variant="text">remember</Button> */}
            </CardActions>
          </Card>
        </Box>
      </Container>
    </div>
    );
    async function Login() {

    const { pwresult, last_idx,status} = await userser.login(Emailref.current?.value,Passref.current?.value);
      if (pwresult)
      {
        // navigate("/vs");
        // console.log("all",response.data);
        // console.log("pwresult:", pwresult);
        // console.log("last_idx:", last_idx);
        // localStorage.setItem("Type", status);
        // localStorage.setItem("ID", last_idx);
        // console.log(localStorage.getItem("ID"));
        if(status=="0")
        {
          navigate("/vs");
          localStorage.setItem("Type", status);
          localStorage.setItem("ID", last_idx);
          console.log(localStorage.getItem("ID"));
        }
        if(status=="1")
        {
          navigate("/rankall");
          localStorage.setItem("Type", status);
          localStorage.setItem("ID", last_idx);
          console.log(localStorage.getItem("ID"));
        }
      }
      else
      {
        
        alert("Sorry, the information was not found. \nPlease enter your email and password again.");
        console.log("fail", last_idx);
      }
      
      
    }

    function register()
    {
      navigate("/register");
    }
}
export default LoginPage