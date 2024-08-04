import { Card, Typography } from "@mui/material";
import { Container } from "@mui/system";
import HeaderAdmin from "./Headeradmin";
import { useEffect, useState } from "react";
import { UserService } from "../../services/user";
import { Alluser } from "../../model/alluser";
import { Link } from "react-router-dom";

function UseralladminPage()
{
    const userService = new UserService();
    const [users, setUser] = useState<Alluser[]>();
    useEffect(() => {
        const loadDataAsync = async () => {
          const res = await userService.getAlluser();
          setUser(res);
        };
        loadDataAsync();
      },[] );
    return(
        <div>
            <HeaderAdmin></HeaderAdmin>
            <div>
                <Container sx={{backgroundColor:"#FCE4B0"}}>
                    <div>
                        <div style={{display:"flex",flexDirection:"column",marginTop:10,placeItems: "center",justifyContent:"center"}}>
                            
                            <Typography fontSize={40} color={'black'}>User</Typography>
                            {(!users)&&(<div style={{display:'flex',justifyContent :'center'}}>
                            <img src="https://img5.pic.in.th/file/secure-sv1/Ellipsis-5s-200px.gif"  style={{borderRadius:100,marginTop:100  }} alt="" />
                            </div>)} 
                          
                            <div style={{width:"80%"}}>
                                {
                                (users) ? users.map((user,index)=>{
                                    if(index==0)
                                    {
                                        return(<></>)
                                    }
                                    return <Link to={"/allprofile?id="+user.Uid} key={index} > 
                                    <Card sx={{width:'100%',marginBottom:3}} >
                                    <div style={{display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"start",padding:10,marginLeft:20,marginRight:20} }>
                                        <div style={{width:"10%"}}>
                                            <Typography fontSize={30}>{index}</Typography>
                                        </div>
                                        
                                        <div style={{width:"30%"}}>
                                        <img   style={{width:100,height:100 }}src={user.Profileimage} alt="" />
                                        </div>
                                        <div style={{width:"30%"}}>
                                        <Typography fontSize={30}>UID:{user.Uid}</Typography>
                                        </div>
                                        {/* <Typography fontSize={30}>Email:{user.Email}</Typography> */}
                                        <Typography fontSize={30}>Name: {user.Name}</Typography>
                                  
                                    </div>
                                </Card>
                                </Link>
                                }) : null}
                                
                                {/* <Card sx={{width:'100%',marginBottom:3}}>
                                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:10,marginLeft:20,marginRight:20}}>
                                        <Typography fontSize={30}>2</Typography>
                                        <img   style={{width:80,height:80 }}src="https://www.central.co.th/e-shopping/wp-content/uploads/2020/12/CUTE-KITTY.jpg" alt="" />
                                        <Typography fontSize={30}>UID:2323</Typography>
                                        <Typography fontSize={30}>Email:asd</Typography>
                                        <Typography fontSize={30}>Name: sad</Typography>
                                        
                                    </div>
                                </Card> */}
                                
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
export default UseralladminPage;
