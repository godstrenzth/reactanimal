import { Grid, Typography, Card, Button } from "@mui/material";
import { Container, Box } from "@mui/system";

import HeaderAdmin from "./Headeradmin";
import { useEffect, useState } from "react";
import { AdminService } from "../../services/admin";
import { User } from "../../model/user";
import { Historyimg } from "../../model/history";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Imgbyid } from "../../model/imgbyid";

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function AllprofilePage(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [Img, setImg] = useState<Imgbyid[]>();
    const adminser= new AdminService();
    const [user, setuser] = useState<User[]>();
    const [History, setHistory] = useState<Historyimg[]>();
    const [History2, setHistory2] = useState<Historyimg[]>();
    const [state, setstate] = useState("");
    useEffect(()=>{
        const userbyid = async () => {
            const re = await adminser.getuserByid(id);
            setuser(re)
            const re2 = await adminser.getimgByuid(id);
            setImg(re2)
            console.log(user); 
            const re3 = await adminser.gethistoryimg("0");
            setHistory(re3)
            const re4 = await adminser.gethistoryimg("1");
            setHistory2(re4)
          };
          
          userbyid();

    } ,[state]);
    return (
        <div>
        <HeaderAdmin></HeaderAdmin>
        <Container fixed>
            <Box
            display={"flex"}
            padding={"10px"}
            marginLeft={"10%"}
            marginRight={"10%"}
            flexDirection={"column"} 
            justifyContent={"start"}
            alignItems={"start"} 
            >
                <Grid container spacing={0}>
                    <Grid item xs={4} >
                    <Box sx={{align:"center"}}>
                            {
                                (user)&&(
                                    <img src={user[0].Profileimage} alt="image" style={{ width: "100%" }} />

                                )}
                    </Box>
                    </Grid>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={7} >
                        <div>
                             <Typography fontSize={30}  color={"black"}>รายละเอียดรูป</Typography>
                             {
                                (user)&&(
                                    <Card>
                                    <div>
                                        <strong>Uid : </strong><span>{user[0].Uid}</span>
                                    </div>
                                    <div>
                                        <strong>Email : </strong><span>{user[0].Email}</span>
                                    </div>
                                    <div>     
                                        <strong>Name : </strong><span>{user[0].Name}</span>
                                    </div>
                                    <div>
                                        <strong>Detail : </strong><span>{user[0].Detail}</span>
                                    </div>   
                                    
                                    <hr style={{ width: "100wv", border: "none", borderBottom: "3px solid gray" }} />
                                </Card>
                                )
                             }
                           
                        </div>
                        {
                                (History)&&(History2)&&(Img) ? Img.map((img5,index3)=>{
                                    const index = History.findIndex((h) => h.Iid == img5.Iid );
                                    const index2 = History2.findIndex((h) => h.Iid == img5.Iid  );
                                    const allindex =Math.abs((index+1)-(index2+1))
                                    console.log(img5)
                                    
                                    return <div style={{marginTop:10}} key={index3}>
                                        {(
                                             
                                                <Card  sx={{padding:1,alignItems:'center',display:'flex',justifyContent:"space-between"}} >
                                                    {/* <Link to={"/detailimgadmin/"+img5.Iid+"?rank="+(index+1)}> */}
                                                <img style={{width:100,height:100}}  onClick={() => deltail(img5.Iid,index+1)} src={img5.image} alt="" />
                                                <div style={{display:'flex',flexDirection:'column',marginLeft:-100}} onClick={() => deltail(img5.Iid,index+1)}>
                                                    <Typography fontSize={20}  color={"black"}>Name : {img5.Name}</Typography>
                                                    <Typography fontSize={20} sx={{display:'flex',alignContent:'center'}} color={"black"}>Rank : {index+1}
                                                    {(index+1>allindex)&&(
                                                        <div style={{display:'flex',flexDirection:'row'}}>
                                                            <ArrowDropUpIcon sx={{color:'green'}}/>
                                                            <Typography fontSize={20} sx={{display:'flex'}} color={"green"}>{allindex}</Typography>
                                                        </div>
                                                    )}

                                                    {(index+1<allindex)&&(
                                                        <div style={{display:'flex',flexDirection:'row'}}>
                                                        <ArrowDropDownIcon sx={{color:'red'}}/>
                                                        <Typography fontSize={20} sx={{display:'flex'}}   color={"red"}>{allindex}</Typography>
                                                    </div>
                                                    )}
                                                    {(allindex==index+1)&&(
                                                        <div style={{display:'flex',flexDirection:'row'}}>
                                                    
                                                        <Typography fontSize={20}   sx={{display:'flex'}} color={"red"}>-</Typography>
                                                    </div>
                                                    )}
                                                    </Typography>
                                                    <Typography fontSize={20}  color={"black"}>oldRank : {index2+1}</Typography>
                                                
                                                    <Typography fontSize={20}  color={"black"}>Score : {img5.Score}</Typography>
                                                    
                                                </div>
                                                {/* </Link> */}
                                                <div>
                                                <Button variant="contained" color="warning" onClick={() => del(img5.Iid)}>ลบ</Button>
                                                </div>
                                               
                                            </Card>
                                        
                                        )}

                                         
                                                        
                                    </div>
                                    
                                }) : null}
                        {/* <div  style={{marginTop:30}}>
                            
                            <Button variant="contained"  sx={{backgroundColor:'#F8B3EB',color:'black',display:'flex',alignItems:'center'}}fullWidth><img style={{width:20,height:20}} src="https://img5.pic.in.th/file/secure-sv1/plus84ba32632b66e9f2.png" alt="" />  Add Image</Button>
                        </div> */}
                       
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </div>
        

    );
    async function del (id:number){
    
        const re = await adminser.delimg(id);
        console.log(re)
        setstate("1")
    
    }
    function deltail(imgId :number , index:number ) {
        navigate(`/detailimgadmin/${imgId}?rank=${index + 1}`);
      }

    
    
}
export default AllprofilePage