import { Box, Button, Card, CardContent, CardHeader, Container, FormControl, TextField, } from "@mui/material";

import { useRef } from "react";
import { UserService } from "../services/user"
import { Link, useNavigate } from "react-router-dom";

function RegisterPage()
{
  const navigate = useNavigate();
  const userser= new UserService();
  const Emailref=useRef<HTMLInputElement>();
  const Passref=useRef<HTMLInputElement>();
  const Nameref=useRef<HTMLInputElement>();

  
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
          <FormControl>
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
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  type="email"  
                  sx={{marginLeft:"5px",width:"100%"}}
                  inputRef={Emailref}
                  required
                />
              </div>
              <h3 style={{ marginLeft: "12px" }}>Password</h3>
              <div style={{display:"flex",alignItems:"center",marginLeft:"10px"}}>
                
                <TextField
                  id="outlined-basic"
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
              <h3 style={{ marginLeft: "12px" }}>Name</h3>
              <div style={{display:"flex",alignItems:"center",marginLeft:"10px",marginTop:"-700"}}>
                
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  size="small"
                  type="text"
                  sx={{marginLeft:"5px",width:"100%"}}
                  inputRef={Nameref}
                  required
                />
                
                <br />
                
              </div>
              
              <div  style={{display:"flex",alignItems:"center",marginLeft:"10px",flexDirection:'column'}}>
        
               
                <Button variant="contained" type="submit"  onClick={addNew}  style={{borderRadius:10,width:'80%',marginTop:10,backgroundColor:"#8BBE9B",color:'black'}}>REGISTER</Button>
                <Link to={"/login"}style={{width:'100%',marginLeft:'20% '  }}><Button variant="contained"  style={{borderRadius:10,width:'80%',marginTop:10,backgroundColor:"#8BBE9B",color:'black'}}>Back</Button></Link>
              </div>
             
            </CardContent>
          
          </Card>
          </FormControl>
        </Box>
      </Container>
    </div>
    );
    async function addNew() {
      
      if(Emailref.current?.value&&Passref.current?.value&&Nameref.current?.value)
      {
        const result= await userser.register(Emailref.current?.value,Passref.current?.value,Nameref.current?.value);
        console.log(result);
        navigate("/login");
      }
      else if(Emailref.current?.value=="")
      {
        alert("Please enter Email!");
      }
      else if(Passref.current?.value=="")
      {
        alert("Please enter Password!");
      }
      else if(Nameref.current?.value=="")
      {
        alert("Please enter Name!");
      }
      
    }
}
export default RegisterPage