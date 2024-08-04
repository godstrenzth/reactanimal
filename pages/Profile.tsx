import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import { Container, Box, useMediaQuery, useTheme } from "@mui/system";
import Header from "./Header";
import { UserService } from "../services/user";
import { useState, useEffect, useRef } from "react";
import { User } from "../model/user";
import { Link, useNavigate } from "react-router-dom";
import { Imgbyid } from "../model/imgbyid";
import { Historyimg } from "../model/history";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import { UserService } from "../services/user"
// import { useEffect } from "react";
// // import { useEffect } from "react";
import { Time } from "../model/time";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HeaderAdmin from "./admin/Headeradmin";
import { AdminService } from "../services/admin";
export default function Profile() {
    const id=localStorage.getItem("ID")
    const userser= new UserService();
    const [Time, settime] =useState<Time>();
    const [state, setstate] = useState("");
    const [user, setuser] = useState<User[]>();
    const [Img, setImg] = useState<Imgbyid[]>();
    const [History, setHistory] = useState<Historyimg[]>();
    const [History2, setHistory2] = useState<Historyimg[]>();
    const navigate = useNavigate();
    const adminser= new AdminService();
    const CDref=useRef<HTMLInputElement>();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = useState(false);
    // if(History.m)
    // {
    //     const index = History.findIndex((h) => h.Iid == id );
    // }
    
   
    useEffect(()=>{
        const userbyid = async () => {
            const re = await userser.getuserByid(id);
            setuser(re)
            const re2 = await userser.getimgByuid(id);
            setImg(re2)
            const re3 = await userser.gethistoryimg("0");
            setHistory(re3)
            const re4 = await userser.gethistoryimg("1");
            setHistory2(re4)
            const time = await adminser.getTime();
            settime(time)
           
            
          };
          
          userbyid();

    } ,[state]);
   
    return (
        <>
        {(user)&&(user[0].Type==1) ?(
            <HeaderAdmin></HeaderAdmin>
        ):(
            <Header></Header>
        )}
        
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
                        <img src={user?.[0].Profileimage} alt="image" style={{ width: "100%" }} />
                        <Link to={"/editprofile"}><Button variant="contained" sx={{backgroundColor:'#F8B3EB',color:'black',display:'flex',alignItems:'center'}}fullWidth color="secondary">Edit Profile</Button></Link>
                    </Box>
                    </Grid>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={7} >
                        <div>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                             <Typography fontSize={30}  color={"black"}>รายละเอียดรูป</Typography>
                             <Link to={"/forgot"}> <img width={40}height={40} src="https://img5.pic.in.th/file/secure-sv1/padlock10bbf8b589714122.png" alt="" /></Link>
                             </div>
                             {
                                (user)&&(
                                <Card>
                                   <div>
                                        <strong>Uid : </strong>{user[0].Uid}
                                    </div>
                                    <div>
                                        <strong>Email : </strong>{user[0].Email}
                                    </div>
                                    <div>     
                                        <strong>Name : </strong>{user[0].Name}
                                    </div>
                                    <div>
                                        <strong>Detail : </strong>{user[0].Detail}
                                    </div>  
                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={Cdialog}
                                        aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">
                                        {"Alert CooldownVote"}
                                        </DialogTitle>
                                        <DialogContent>
                                        <DialogContentText>
                                            setcooldownvote {CDref.current?.value} s completed.
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button autoFocus onClick={Cdialog} variant="contained" color="secondary">
                                            Close
                                        </Button>
                                        
                                        </DialogActions>
                                    </Dialog>
                                    {(localStorage.getItem("Type")=="1"&&Time)&&(
                                        <div style={{display:'flex',alignItems :'center'}}>
                                        {/* <AccessTimeIcon></AccessTimeIcon>
                                         <Typography fontSize={30} color={"black"}>:</Typography> */}
                                          <strong>SetCooldownVote : </strong>
                                        <TextField sx={{fontSize:30}}  type="number"
                                            InputProps={{
                                                startAdornment: (
                                                  <InputAdornment position="start">
                                                       <AccessTimeIcon />
                                                  </InputAdornment>
                                                ),
                                              }}
                                              onKeyDown={(event) => { // Handle Enter key press
                                                if (event.key === 'Enter') {
                                                  setCD(CDref.current?.value); // Call setCD on Enter
                                                }
                                              }}
                                            variant="standard" defaultValue={Time?.time } inputRef={CDref}></TextField>
                                        <Typography fontSize={30} color={"black"}>s</Typography>
                                    </div>

                                    )}
                                    <hr style={{ width: "100wv", border: "none", borderBottom: "3px solid gray" }} />
                                </Card>
                                )}
                            
                        </div>
                        
                        {
                                (History)&&(History2)&&(Img) ? Img.map((img5)=>{
                                    let index = History.findIndex((h) => h.Iid == img5.Iid );
                                    index+=1;
                                    let index2 = History2.findIndex((h) => h.Iid == img5.Iid  );
                                    index2+=1;
                                    const allindex =Math.abs((index)-(index2))
                                    console.log(img5)
                                    console.log(user)
                                    
                                    return <div style={{marginTop:10}}>
                                        {(
                                            //  <Link to={"/detailimg/"+img5.Iid+"?rank="+(index+1)} onClick={(event) => {event.preventDefault(); del(img5.Iid)}}>
                                                <Card sx={{padding:1,alignItems:'center',display:'flex',justifyContent:'space-between'}}>
                                                
                                               
                                               
                                                <div style={{display:'flex',flexDirection:'row' ,alignItems  :'center'}}  onClick={() => deltail(img5.Iid,index)}>
                                                    <div style={{display:'flex'}}>
                                                        <img style={{width:100,height:100}}  onClick={() => deltail(img5.Iid,index)} src={img5.image}  alt="" />
                                                    </div>
                                                    <div style={{display:'flex',flexDirection:'column',marginLeft:10}}>                              
                                                    <Typography fontSize={20}  color={"black"}>Name : {img5.Name}</Typography>
                                                    <Typography fontSize={20} sx={{display:'flex',alignContent:'center'}} color={"black"}>Rank : {index}
                                                    {(index<index2 && index2 !=0)&&(
                                                        <div style={{display:'flex',flexDirection:'row'}}>
                                                            <ArrowDropUpIcon sx={{color:'green'}}/>
                                                            <Typography fontSize={20} sx={{display:'flex'}} color={"green"}>{allindex}</Typography>
                                                        </div>
                                                    )}

                                                    {(index>index2 && index2 !=0)&&(
                                                        <div style={{display:'flex',flexDirection:'row'}}>
                                                        <ArrowDropDownIcon sx={{color:'red'}}/>
                                                        <Typography fontSize={20} sx={{display:'flex'}}   color={"red"}>{allindex}</Typography>
                                                    </div>
                                                    )}
                                                    {(allindex==0||index==index2||index2==0)&&(
                                                        <div style={{display:'flex',flexDirection:'row'}}>
                                                    
                                                        <Typography fontSize={20}   sx={{display:'flex'}} color={"orange"}>-</Typography>
                                                    </div>
                                                    )}
                                                    </Typography>
                                                    <Typography fontSize={20}  color={"black"}>oldRank : {index2}</Typography>
                                                
                                                    <Typography fontSize={20}  color={"black"}>Score : {img5.Score}</Typography>
                                                    </div>
                                                </div>
                                                <div >
                                                    <Button variant="contained" color="secondary" style={{marginRight:2}}onClick={() => updateimg(img5.Iid)}>แก้ไข</Button>
                                                    <Button variant="contained" color="warning" onClick={() => del(img5.Iid,img5.image)}>ลบ</Button>
                                                </div>
                                               
                                            </Card>
                                        // </Link>
                                        )}
                                    </div>
                                    
                                }) : null}
                                { Img &&Img.length < 5 &&(
                                    <div  style={{marginTop:30}}>
                                    <Link to={"/img"}>  
                                        <Button variant="contained"  sx={{backgroundColor:'#F8B3EB',color:'black',display:'flex',alignItems:'center'}}fullWidth><img style={{width:20,height:20,marginRight:10}} src="https://img5.pic.in.th/file/secure-sv1/plus84ba32632b66e9f2.png" alt="" />  Add Image</Button>
                                    </Link>
                                 </div>
                                )}
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </>

    );
   function updateimg (id:number){
    
    navigate(`/imgupdate?lid=${id}`);
    
    }
    async function del (id:number,link:string){
        console.log(link)
        const re = await userser.delimg(id,link);
        console.log(re)
        setstate("1")
    
    }
    function deltail(imgId :number , index:number ) {
        navigate(`/detailimg/${imgId}?rank=${index}`);
      }
      async function setCD (id:unknown){
    
        const re = await adminser.putTime(id);
        console.log(re)
        opendialog()

    }
    function opendialog()
    {
     
        setOpen(true)
        
        
    }
     
    
    function Cdialog()
    {
     
      setOpen(false)
  
      
     
    }

   
}