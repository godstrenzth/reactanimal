import { Card, CardHeader, CardContent, TextField, Button } from "@mui/material";
import { Container, Box } from "@mui/system";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserService } from "../services/user";

function ForgotPage()
{
  const navigate = useNavigate();
  const userser= new UserService();
  const newPref=useRef<HTMLInputElement>();
  const Passref=useRef<HTMLInputElement>();
  const Cpref=useRef<HTMLInputElement>();
    return(
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

              <h3 style={{ marginLeft: "12px" }}>Password</h3>
              <div style={{display:"flex",alignItems:"center",marginLeft:"10px",borderRadius:10}}>
                
                <TextField
                  id="outlined-basic"
                  label="old Password"
                  variant="outlined"
                  size="small"
                  type="password"
                  sx={{marginLeft:"5px",width:"100%"}}
                  inputRef = {Passref}
                />
              </div>
              <h3 style={{ marginLeft: "12px" }}>New Password</h3>
              <div style={{display:"flex",alignItems:"center",marginLeft:"10px"}}>
                
                <TextField
                  id="outlined-basic"
                  label="New Password"
                  variant="outlined"
                  size="small"
                  type="password"
                  sx={{marginLeft:"5px",width:"100%"}}
                  inputRef = {newPref}
                />
                <br />
                
              </div>
              <h3 style={{ marginLeft: "12px" }}>Confirm Password</h3>
              
              <div style={{display:"flex",alignItems:"center",marginLeft:"10px"}}>
                
                <TextField
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                  size="small"
                  type="password"
                  sx={{marginLeft:"5px",width:"100%",marginTop:'-33px'}}
                  inputRef = {Cpref}
                />
                <br />
              <br /><br />
              </div>
            
              <div  style={{display:"flex",alignItems:"center",marginLeft:"10px",flexDirection:'column'}}>
        
               
                <Button variant="contained" onClick={()=>reset(Passref.current?.value,newPref.current?.value,Cpref.current?.value)}  style={{borderRadius:10,width:'80%',marginTop:10,backgroundColor:"#EAA3FC",color:'black'}}>Reset Password</Button>
                <Link to={"/profile"} style={{width:'100%',marginLeft:"90px"}}><Button variant="contained"   style={{borderRadius:10,width:'80%',marginTop:10,backgroundColor:"#8BBE9B",color:'black'}}>Back</Button></Link>
              </div>
            </CardContent>
          
          </Card>
        </Box>
      </Container>
    </div>
    );
    async function reset(password:unknown,npass:unknown,Cp:unknown)
    {
      if(newPref.current?.value&&Passref.current?.value&&Cpref.current?.value){
          if (npass == Cp)
          {
            
            const result= await userser.putpassuser(localStorage.getItem("ID"),password,npass);
            console.log(result);
            navigate("/profile");
          }
          else{
            alert("Pass invalid");
          }

        }
        else{
          alert("Incorrect information");
        }
      }
      
}

export default ForgotPage;