import { Card, Typography } from "@mui/material";
import { Container } from "@mui/system";
import HeaderAdmin from "./Headeradmin";
import { useEffect, useState } from "react";

import { AdminService } from "../../services/admin";

import { Link } from "react-router-dom";
import { Imgalladmin } from "../../model/adminallimg";
import { Historyimg } from "../../model/history";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Rankallpage()
{
    const [Img, setimg] = useState<Imgalladmin[]>();
    const adminser= new AdminService();
    const [History, setHistory] = useState<Historyimg[]>();
    const [History2, setHistory2] = useState<Historyimg[]>();
    useEffect(()=>{
        const fetchAllImg = async () => {
            const img = await adminser.getAllimg();
            console.log(img);
            setimg(img)
            const re3 = await adminser.gethistoryimg("0");
            setHistory(re3)
            const re4 = await adminser.gethistoryimg("1");
            setHistory2(re4)
          };
          fetchAllImg();
    }, []); 
    return(
        <div>
            <HeaderAdmin></HeaderAdmin>
            <div>
                <Container sx={{backgroundColor:"#FCE4B0"}}>
                    <div>
                        <div style={{display:"flex",flexDirection:"column",marginTop:10,placeItems: "center",justifyContent:"center"}}>
                            
                            <img style={{width:150,padding:10 }} src="https://img2.pic.in.th/pic/ranking-1.png" alt="" />
                            {(!Img)&&(<div style={{display:'flex',justifyContent :'center'}}>
                            <img src="https://img5.pic.in.th/file/secure-sv1/Ellipsis-5s-200px.gif"  style={{borderRadius:100,marginTop:100  }} alt="" />
                            </div>)} 
                            <div style={{width:"80%"}}>
                            {
                                (History)&&(History2)&&(Img) ? Img.map((img10,index)=>{
                                    let rankTop10New = History.findIndex((h) => h.Iid == img10.Iid );
                                    rankTop10New+=1;
                                    let rankTop10Old = History2.findIndex((h) => h.Iid == img10.Iid  );
                                    rankTop10Old+=1;
                                    const allindex =Math.abs((rankTop10New)-(rankTop10Old))
                                    return <Link to={"/detailimgadmin/"+img10.Iid+"?rank="+(index+1)}  key={index} > 
                                    <Card sx={{width:'100%',marginBottom:3}} >
                                   <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",padding:10,marginLeft:20,marginRight:20}}>
                                   <div style={{width:"10%",display:'flex',alignItems:"center"}}>
                                        <Typography fontSize={30}>{index+1}</Typography>
                                        </div>
                                        <div style={{width:"30%",display:'flex',flexDirection:'row'}}>
                                        <img   style={{width:100,height:100 }}src={img10.image} alt="" />
                                        {(rankTop10New<rankTop10Old && rankTop10Old !=0)&&(
                                                        <div style={{display:'flex',flexDirection:'row',width:"5%"}}>
                                                            <ArrowDropUpIcon sx={{color:'green',fontSize:40 }}/>
                                                            <Typography fontSize={35} sx={{display:'flex'}} color={"green"}>{allindex}</Typography>
                                                        </div>
                                                    )}

                                                    {(rankTop10New>rankTop10Old && rankTop10Old !=0)&&(
                                                        <div style={{display:'flex',flexDirection:'row',width:"5%"}}>
                                                        <ArrowDropDownIcon sx={{color:'red',fontSize:40}}/>
                                                        <Typography fontSize={35} sx={{display:'flex'}}   color={"red"}>{allindex}</Typography>
                                                    </div>
                                                    )}
                                                    {(allindex==0||rankTop10New==rankTop10Old||rankTop10Old==0)&&(
                                                        <div style={{display:'flex',flexDirection:'row',width:"5%"}}>
                                                    
                                                        <Typography fontSize={35}   sx={{display:'flex',fontSize:50,marginLeft:2}} color={"orange"}>-</Typography>
                                                    </div>
                                                    )}
                                        </div>
                                        
                                        <div style={{width:"30%"}}>
                                        <Typography fontSize={25}>{img10.Name}</Typography>
                                        </div>
                                        <Typography fontSize={30}>Score  {img10.Score}</Typography>
                                    </div>
                                </Card>
                                </Link>
                                }) : null}
                                {/* <Card sx={{width:'100%',marginBottom:3}}>
                                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:10,marginLeft:20,marginRight:20}}>
                                        <Typography fontSize={30}>1</Typography>
                                        <img   style={{width:80,height:80 }}src="https://www.central.co.th/e-shopping/wp-content/uploads/2020/12/CUTE-KITTY.jpg" alt="" />
                                        <Typography fontSize={30}>CAT1</Typography>
                                        <Typography fontSize={30}>Score  500</Typography>
                                    </div>
                                </Card>
                                <Card sx={{width:'100%',marginBottom:3}}>
                                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:10,marginLeft:20,marginRight:20}}>
                                        <Typography fontSize={30}>2</Typography>
                                        <img   style={{width:80,height:80 }}src="https://www.central.co.th/e-shopping/wp-content/uploads/2020/12/CUTE-KITTY.jpg" alt="" />
                                        <Typography fontSize={30}>CAT2</Typography>
                                        <Typography fontSize={30}>Score  400</Typography>
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

export default Rankallpage