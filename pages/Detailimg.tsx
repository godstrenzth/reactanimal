import { Card, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Header from "./Header";
import { UserService } from "../services/user";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Imgbyid } from "../model/imgbyid";
import { Graph } from "../model/graph";
import Graph1 from './Graph';


function DetailimgPage()
{
    const userser= new UserService();
    const params = useParams();
    const [img, setimg] = useState<Imgbyid[]>();
    const [Graph, setGraph] = useState<Graph[]>();
    const [searchParams] = useSearchParams();
    const rank = searchParams.get("rank");
    useEffect(()=>{
        const fetchAllImg = async () => {
            const img = await userser.getimgByid(params.id);
            setimg(img)
            const graph = await userser.getcheakGr(params.id);
            setGraph(graph)
            console.log(img)
            console.log(Graph)
            
          };
          fetchAllImg();
          
    },[] ); 

    let total1,total2,total3,total4,total5,total6,total7;
    if(Graph){
    total1= Graph?.[0]?.Ppoint-Graph?.[0]?.Dpoint;
    total2= Graph?.[1]?.Ppoint-Graph?.[1]?.Dpoint;
    total3= Graph?.[2]?.Ppoint-Graph?.[2]?.Dpoint;
    total4= Graph?.[3]?.Ppoint-Graph?.[3]?.Dpoint;
    total5= Graph?.[4]?.Ppoint-Graph?.[4]?.Dpoint;
    total6= Graph?.[5]?.Ppoint-Graph?.[5]?.Dpoint;
    total7= Graph?.[6]?.Ppoint-Graph?.[6]?.Dpoint;
}
      const  data1 = [
        { x: 0, y1: null, y2: Graph?.[0]?.Dpoint },
            { x: 1, y1: total1, y2: Graph?.[0]?.Dpoint },
            { x: 2, y1: total2, y2: Graph?.[1]?.Dpoint },
            { x: 3, y1: total3, y2: Graph?.[2]?.Dpoint },
            { x: 4, y1: total4, y2: Graph?.[3]?.Dpoint },
            { x: 5, y1: total5, y2: Graph?.[4]?.Dpoint },
            { x: 6, y1: total6, y2: Graph?.[5]?.Dpoint },
            { x: 7, y1: total7, y2: Graph?.[6]?.Dpoint },
          ];
   
    
    return(
        <div>
            <Header></Header>
            <div>
                <Container sx={{backgroundColor:"#FCE4B0"}}>
                    <div>
                        <div style={{display:"flex",flexDirection:"row",marginTop:10}}>
                            <Card sx={{backgroundColor:"#EAA3FC" }} >
                            {(img)&&(
                                <img style={{width:350,padding:10 }} src={img[0].image} alt="" />
                            )}
                            </Card>
                            <div style={{marginLeft:20,width:"50%",marginTop:10}}>
                                {
                                    (img)&&(
                                        <div>
                                            <Typography fontSize={30} color={"black"}>รายละเอียดรูปภาพ</Typography>
                                            <Card sx={{padding:2}}>
                                            <Typography fontSize={30} color={"black"}>Name : {img[0].Name}</Typography>
                                            <Typography fontSize={30} color={"black"}>Rank : {rank}</Typography>
                                            <Typography fontSize={30} color={"black"}>Scorce : {img[0].Score}</Typography>
                                            
                                            </Card>
                                        </div>
                                    )
                                }
                                <div style={{marginTop:5}}>
                                    <Card>
                                        
                                        <Graph1 data={data1}></Graph1>
                                    
                                    </Card> 
                                    
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    <br />
                    <br />
                </Container>
            </div>
        </div>
    );
    
}
export default DetailimgPage;