import { Card, Typography } from "@mui/material";
import { Container } from "@mui/system";
import HeaderAdmin from "./Headeradmin";

import { AdminService } from "../../services/admin";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Imgbyid } from "../../model/imgbyid";


function DetailimgAdminPage()
{
    const adminser= new AdminService();
    const params = useParams();
    const [img, setimg] = useState<Imgbyid[]>();
    const [searchParams] = useSearchParams();
    const rank = searchParams.get("rank");
    
    
    console.log(params.id);
    useEffect(()=>{
        const fetchAllImg = async () => {
            const img = await adminser.getimgByid(params.id);
            setimg(img)
            
            console.log(img);
          };
          
          fetchAllImg();
    }, []); 
    return(
        <div>
            <HeaderAdmin></HeaderAdmin>
            <div>
                <Container sx={{backgroundColor:"#FCE4B0"}}>
                    <div>
                    {
                        (img)&&(rank)&&(
                                         <div style={{display:"flex",flexDirection:"row",marginTop:10}}>
                                        <Card sx={{backgroundColor:"#EAA3FC" }} >
                                            <img style={{width:350,padding:10 }} src={img[0].image} alt="" />
                                        </Card>
                                        <div style={{marginLeft:20,width:"50%",marginTop:10}}>
                                    
                                        <div>
                                            <Typography fontSize={30} color={"black"}>รายละเอียดรูปภาพ</Typography>
                                            <Card sx={{padding:2}}>
                                            <Typography fontSize={30} color={"black"}>Name : {img[0].Name}</Typography>
                                            <Typography fontSize={30} color={"black"}>Rank : {rank}</Typography>
                                            <Typography fontSize={30} color={"black"}>Scorce : {img[0].Score}</Typography>
                                            {/* <div style={{display:'flex',alignItems :'center'}}>
                                               
                                                <TextField sx={{fontSize:30}}  type="number"
                                                    InputProps={{
                                                        startAdornment: (
                                                          <InputAdornment position="start">
                                                               <AccessTimeIcon />
                                                          </InputAdornment>
                                                        ),
                                                      }}
                                                    variant="standard" defaultValue={Time?.time }></TextField>
                                                <Typography fontSize={30} color={"black"}>s</Typography>
                                            </div> */}
                                            
                                            </Card>
                                        </div>
                                   
                            </div>
                        </div>
                         )
                        }
                    </div>
                    <br />
                    <br />
                </Container>
            </div>
        </div>
    );
}
export default  DetailimgAdminPage;