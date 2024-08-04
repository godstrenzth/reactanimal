import { Container } from "@mui/system";
import Header from "./Header";
import { Button, Card, TextField, Typography } from "@mui/material";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserService } from "../services/user"
import { Imgbyid } from "../model/imgbyid";



function UpdateimgPage()
{
    const [searchParams] = useSearchParams();
    const lid = searchParams.get("lid"); 
    const userser= new UserService();
    const navigate = useNavigate();
    const Linkref=useRef<HTMLInputElement>();
    const Nameref=useRef<HTMLInputElement>();
    
    const upref = useRef(null);
    const [img, setimg] = useState<Imgbyid[]>();
    const [imageUrl, setImageUrl] = useState("https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg");
    useEffect(()=>{
        const fetchAllImg = async () => {
            const img = await userser.getimgByid(lid);
            setimg(img)
            setImageUrl(img[0].image)
            
            console.log(lid)
          };
          fetchAllImg();
          
    },[] ); 
    return(
        <div>
            <Header></Header>
            <div>
                <Container sx={{marginLeft:"20%"}}>
                    <div>
                        <div style={{display:"flex",flexDirection:"row",marginTop:10}}>
                            {imageUrl==""&&(
                                <Card sx={{backgroundColor:"#EAA3FC" }} >
                                <img style={{width:350,padding:10 }} src="https://cdn.pixabay.com/photo/2023/06/05/01/53/kitten-8041226_1280.jpg" alt="" />
                                </Card>
                            )}
                            {imageUrl!=""&&(
                                <Card sx={{backgroundColor:"#EAA3FC" }} >
                                <img style={{width:350,padding:10 }} src={imageUrl} alt="" />
                                </Card>
                            )}
                            {/* <Card sx={{backgroundColor:"#EAA3FC" }} >
                                <img style={{width:350,padding:10 }} src={imageUrl} alt="" />
                                
                            </Card> */}
                            <div style={{marginLeft:20,width:"60%"}}>
                                {(img)&&(
                                    <div>
                                        <Typography fontSize={30} color={"black"}>Link image</Typography>
                                        <TextField inputRef={Linkref} onChange={(e) => setImageUrl(e.target.value)}  defaultValue={imageUrl} value={imageUrl} style={{width:"70%",backgroundColor:"white",borderRadius:5    }} ></TextField>
                                        <br />
                                        <br />
                                        <div style={{display: "flex", flexDirection: "row", marginBottom: "1rem",border:'30px',borderColor:'red',}}>
                                            <Typography fontSize={30} color={"black"}>Upload : </Typography>
                                            <input type="file" accept="image/*" ref={upref} onChange={(e) => SETimg(e) } style={{ width: '200px', padding: '5px 10px', border: '9px solid #F8B3EB', borderRadius: '5px' ,color:'black'}} />
                            
                                        </div>
                                        <Typography fontSize={30} color={"black"}>Name</Typography>
                                        <TextField  inputRef={Nameref} style={{width:"70%",backgroundColor:"white",borderRadius:5    }} defaultValue={img[0].Name}></TextField>
                                        <br /><br />
                                        <Button variant="contained" onClick={()=>upImage(img[0].Uid,lid)}> Edit Image</Button>
                                    </div>
                                    
                                )}
                                
                                
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
    async function upImage(uid:unknown,id:unknown) {
        if(img&&Linkref.current?.value&&Nameref.current?.value)
        {
            const result= await userser.updateImg(uid,Linkref.current?.value,Nameref.current?.value,Number(id),img[0].image);
            console.log(result);
            navigate("/profile");
        }
        else
        {
            alert("Please enter Please fill out a picture and fill in your name completely!");
        }
       
      }
    async function SETimg  (event: ChangeEvent<HTMLInputElement>)  {
        const newFile = event.target.files?.[0];
            if (newFile) {
               
                const result= await userser.postImg(newFile);
                setImageUrl(result);
                
                console.log(result)
            }
        }
 
}

export default UpdateimgPage;


