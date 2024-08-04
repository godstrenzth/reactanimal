import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { AdminService } from "../../services/admin";
import { useEffect, useState } from "react";
import { User } from "../../model/user";

function HeaderAdmin()
{
  const navigate = useNavigate();
  const adminser= new AdminService();
  const id=localStorage.getItem("ID")
  const [user, setuser] = useState<User[]>();
  useEffect(() => {
    
    
    const userbyid = async () => {
      const re = await adminser.getuserByid(id);
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
    
                      {
                          localStorage.getItem("ID")  &&(
                            <div style={{display:"flex",flexDirection:"row",marginLeft:40}}>
                            <Link to={"/rankall"}><Button sx={{marginRight:2 }}><img src="https://img5.pic.in.th/file/secure-sv1/top-three.png" alt="Photo" style={{ width: "35px"}}/> </Button> </Link>
                            <Link to={"/user"}><Button sx={{marginRight:2 }}><img src="https://img2.pic.in.th/pic/userce5c6320dd6e143a.png" alt="Photo" style={{ width: "35px" }}/></Button></Link>
                            {/* <Button ><img src="https://img5.pic.in.th/file/secure-sv1/top-three.png" alt="Photo" style={{ width: "35px"}}/></Button> */}
                          </div>
                          )
                      }
                    
    
                </div>
                <div >
                {/* <img src="https://img5.pic.in.th/file/secure-sv1/animalVS2.png" alt="Photo" style={{ width: "40px",borderRadius:"20px" ,marginRight:10  }}/> */}
                {
                localStorage.getItem("ID")&& user &&(
                <div >
                  <Link to={"/profile"}><img src={user?.[0].Profileimage} alt="Photo" style={{ width: "40px",borderRadius:"20px" ,marginRight:10  }}/></Link>
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
                </div>
                
    
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

export default HeaderAdmin

