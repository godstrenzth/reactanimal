import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../model/user";
import { UserService } from "../services/user";

export default function Header() {
  const navigate = useNavigate();
  const [user, setuser] = useState<User[]>();
  const userser= new UserService();
  const id=localStorage.getItem("ID")
  useEffect(() => {
    
    
    const userbyid = async () => {
      const re = await userser.getuserByid(id);
      setuser(re)
      
     
      
    };
    userbyid();
    
      
  }, []);
  return (
    <>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{backgroundColor: '#F8B3EB',width:"100vw"}}>
          <Toolbar sx={{justifyContent:"space-between"}}>
            <div style={{display: "flex",flexDirection:"row",justifyContent:"start",alignItems:"center"}}>
              
                <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                </IconButton>
                <img src="https://img5.pic.in.th/file/secure-sv1/animalVS2.png" alt="Photo" style={{ width: "40px",borderRadius:"20px" }}/> 
                <div style={{width:"10px"}}></div>
                Animal VS
                {/* <div style={{width:"10px"}}></div>
                <img src="https://img5.pic.in.th/file/secure-sv1/home5c2c320a654abc1f.png" alt="Photo" style={{ width: "40px" }}/> 
                <div style={{width:"10px"}}></div>
                <img src="https://img5.pic.in.th/file/secure-sv1/vs.png" alt="Photo" style={{ width: "40px" }}/>
                <div style={{width:"10px"}}></div>
                <img src="https://img5.pic.in.th/file/secure-sv1/top-three.png" alt="Photo" style={{ width: "40px"}}/> */}
                
                
              <div style={{display:"flex",flexDirection:"row",marginLeft:40}}>
                {/* <Link to={"/vs"}><Button sx={{marginRight:2 }}><img src="https://img5.pic.in.th/file/secure-sv1/home5c2c320a654abc1f.png" alt="Photo" style={{ width: "35px"}}/> </Button> </Link> */}
                <Link to={"/vs"}><Button sx={{marginRight:2 }}><img src="https://img5.pic.in.th/file/secure-sv1/vs.png" alt="Photo" style={{ width: "35px" }}/></Button></Link>
                {
                  localStorage.getItem("ID")&&(
                    <Link to={"/rank"}><Button ><img src="https://img5.pic.in.th/file/secure-sv1/top-three.png" alt="Photo" style={{ width: "35px"}}/></Button></Link>

                  )
                }
              </div>
                 
                

            </div>
            {
                localStorage.getItem("ID")&&user&&(
                <div >
                  <Link to={"/profile"}><img src={user?.[0].Profileimage} defaultValue={"https://img5.pic.in.th/file/secure-sv1/animalVS2.png"} alt="Photo" style={{ width: "40px",borderRadius:"20px" ,marginRight:10  }}/></Link>
                  <img onClick={logout} src="https://img2.pic.in.th/pic/logout7a70077f8d6eb4db.png" alt="Photo" style={{ width: "35px", }}/>
                </div>
                )
            }
            {
               localStorage.getItem("ID") == null&&(
                <div>
                  {/* < Button onClick={login} >< LoginIcon sx={{color:"black",height}} /></Button> */}
                  
                  <img  onClick={login}  src="https://img2.pic.in.th/pic/login62a3484341575b7b.png" alt="Photo" style={{ width: "35px", }}/>
              
                </div>
                )
            }
            
            

          </Toolbar>
        </AppBar>
      </Box>
    </>
  ); //  ); ไม่จำเป้ฯต้องใส่ก็ได้
  function logout()
  {
    localStorage.removeItem("ID");
    localStorage.removeItem("Type");
    navigate("/login");

  }
  function login()
  {
    // localStorage.removeItem("ID");
    navigate("/login");

  }
}
