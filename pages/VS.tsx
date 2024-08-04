import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Container, useMediaQuery, useTheme } from "@mui/system";
import Header from "./Header";
import { useEffect, useState } from "react";
import { UserService } from "../services/user";
import { Imgalladmin } from "../model/adminallimg";
import { User } from "../model/user";



function VSPage() {
  const [Img, setimg] = useState<Imgalladmin[]>();
  const [ImgVS, setimgVS] = useState<Imgalladmin[]>();
  const [open, setOpen] = useState(false);
  const [openR, setOpenR] = useState(false);
  const [openL, setOpenL] = useState(false);
  const [user, setuser] = useState<User[]>();
  const [user2, setuser2] = useState<User[]>();
  const [Winu, setWinu] = useState("wait for a minute");
  const [Scwall, setScwall] = useState("wait for a minute");
  const [Scw, setScw] = useState("wait for a minute");
  const [Lossu, setLossu] = useState("wait for a minute");
  const [Sclall, setSclall] = useState("wait for a minute");
  const [Scl, setScl] = useState("wait for a minute");
  const [R, setR] = useState("wait for a minute");
  const [mathc, setmathc] = useState("wait for a minute");
  const [mathmax, setmathmax] = useState("wait for a minute");
  const [K, setK] = useState("wait for a minute");
  const [P1, setP1] = useState("wait for a minute");
  const [P2, setP2] = useState("wait for a minute");


  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [randomNumber2, setRandomNumber2] = useState<number>(1);
  
  const [soldimg, setsoldimg] = useState(0);
  
  const id=localStorage.getItem("ID") ?? 0
  console.log(id+"joj");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const now = new Date();
  
  // setTimeout(() => {
  //   console.log('รันโค้ดตอนเวลา 00.01');
  // }, delay);

    
   
  const userser = new UserService();
  // let IS=0;
  // if(ImgVS&& IS==0)
  // {
  //   IS=1;
  //   generateRandomNumbers(ImgVS);
  // }
   async function ImgVS1() {
   
      const allimgvs = await userser.getVSimg(id);
     
      

      console.log(allimgvs);
      if(allimgvs.length>1){
        console.log("111111111111111111111111111111111111111111");
        setsoldimg(1);
        setimgVS(allimgvs);
        generateRandomNumbers(allimgvs);
        
      
      }else{
        setsoldimg(2);
        console.log("1333333333333333333");
        setimgVS(Img);
        console.log(Img);
        if(Img)
        {
          generateRandomNumbers(Img);
        }
        
      }
      // setimgVS(allimgvs);
      console.log("aaaaa"+soldimg);
    
    
  }
  
  if(now.getHours()==0&&now.getMinutes()==1)
  {
    console.log(now.getHours());
    console.log(now.getMinutes());
  }
  useEffect(() => {
  
    // const interval = setInterval(() => {
    //   const now = new Date();
    //   if (now.getHours() === 0 && now.getMinutes() === 1) {
    //     console.log('รันโค้ดตอนเวลา 00.01');
    //     clearInterval(interval);
    //   }
    // }, 1000);
   
      
    const fetchAllImg = async () => {
      const allimg = await userser.getAllimg();
      console.log("all"+allimg);
      setimg(allimg);
      console.log(allimg)
     
      
    };
    fetchAllImg();
    ImgVS1();
   
    
      
  }, []);
  //แก้ ให้ดึงรูปใหม่ตลอดฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝฝ

  function addvotesql(win:number)
  {
    if (win === 1) {
      console.log(randomNumber+"1"+randomNumber2);
      addvoteELO(randomNumber, randomNumber2);
    }
    if (win === 2) {
      console.log(randomNumber2+"2"+ randomNumber);
      addvoteELO(randomNumber2, randomNumber);
    }
  }
  async function generateRandomNumbers(Img: Imgalladmin[]) {
   
    console.log(Img);
   
    if (Img) {

      console.log("0")
      const newRandomNumber = Math.floor(Math.random() * Img.length);
      setRandomNumber(newRandomNumber);
      let ckmun;
      const randon=newRandomNumber - 10;
      if ( randon< 0) {
        ckmun = 0;
      } else {
        ckmun = newRandomNumber - 10;
      }
      let randommax = Img.length - ckmun;
      if (randommax <= 0) {
        randommax = Img.length;
      } else if (randommax >= 20) {
        randommax = 20;
      }
      let newRandomNumber2 = Math.floor(Math.random() * randommax);
      while (newRandomNumber2 + ckmun === newRandomNumber) {
        newRandomNumber2 = Math.floor(Math.random() * randommax);
      }
      setRandomNumber2(newRandomNumber2+ckmun);
      const re = await userser.getuserByid(Img[newRandomNumber].Uid);
        setuser(re)
        const re2 = await userser.getuserByid(Img[newRandomNumber2+ckmun].Uid);
        setuser2(re2)
    }
      
  }

  if (id==0) {
    return <div>
      <Header></Header>
     
      <div>
        <Container sx={{ backgroundColor: "#FCE4B0" }}>
        {(!Img)&&(
        <div style={{display:'flex',justifyContent :'center'}}>
        <img src="https://img5.pic.in.th/file/secure-sv1/Ellipsis-5s-200px.gif"  style={{borderRadius:100,marginTop:100  }} alt="" />
        </div>)}  
          <div>
          
            {ImgVS && (
              
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 10,
                  placeItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{ backgroundColor: "#EAA3FC", marginTop: 10 }}
                  onClick={() => {
                    
                    if(soldimg==1){
                      // setimgVS(ImgVS => ImgVS?.filter((item, index) => index !== randomNumber));
                      addvotesql(1)
                      // generateRandomNumbers(ImgVS);
                    }
                    // setstat(1);
                    if(soldimg==2)
                    {
                      ImgVS1();
                    }
                  }}
                >
                  <div style={{display:'flex',textAlign:'center',flexDirection:"column"}}>


                    <img
                      style={{ width: 350, padding: 10 }}
                      src={ImgVS[randomNumber].image}
                      alt=""
                    />
                    <strong>{ImgVS[randomNumber].Name}</strong>
                  </div>
                </Card>
                {(soldimg==1||soldimg==0)&&(
                  <img
                  style={{ width: 100, height: 100, marginTop: 20, margin: 20 }}
                  src="https://img2.pic.in.th/pic/versus-1.png"
                  alt=""
                />
                )}
                <Card
                  sx={{ backgroundColor: "#EAA3FC", marginTop: 10 }}
                  onClick={() => {
                    if(soldimg==1){
                      // setimgVS(ImgVS => ImgVS?.filter((item, index) => index !== randomNumber2));
                      addvotesql(2)
                      // generateRandomNumbers(ImgVS);
                    }
                    if(soldimg==2)
                    {
                      ImgVS1();
                    }
                    
                    // setstat(2);
                  }}
                >
                  <div style={{display:'flex',textAlign:'center',flexDirection:"column",margin:"auto?"}}>


                  <img
                    style={{ width: 350, padding: 10 }}
                    src={ImgVS[randomNumber2].image}
                    alt=""
                  />
                  <strong>{ImgVS[randomNumber2].Name}</strong>
                  </div>
                  
                </Card>
              </div>
            )}
          </div>
          <br />
          <br />
          <br />
          <br />
          <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={Cdialog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"EloRating"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
              <div >
                <h3>{Winu}[win]</h3>
                <h2>{Scwall}</h2>
                <h4>{Scw}</h4>
                <h5>{mathc}</h5>
                
              </div>
              <div style={{marginLeft:40,justifyItems:'center',textAlign:'center'}}>
                <h3>{Lossu}[loss]</h3>
                <h2>{Sclall}</h2>
                <h4>{Scl}</h4>
                <h5>{mathmax}</h5>
              </div>
            

            
            </div>
            <div style={{justifyItems:'center',textAlign:'center'}}>
              <h3>{K}</h3>
             <h5>{R}</h5>
             
             <h4>{P1}</h4>
             <h4>{P2}</h4>
             
            
            </div>
           
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={Cdialog} variant="contained" color="secondary">
            Close
          </Button>
         
        </DialogActions>
      </Dialog>
          
        </Container>
      </div></div>;
  }

  return (
    <div>
      <Header></Header>
      <div>
        <Container sx={{ backgroundColor: "#FCE4B0" }}>
        {(!Img)&&(
        <div style={{display:'flex',justifyContent :'center'}}>
        <img src="https://img5.pic.in.th/file/secure-sv1/Ellipsis-5s-200px.gif"  style={{borderRadius:100,marginTop:100  }} alt="" />
        </div>)}  
          <div>
            {soldimg == 2 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 10,
                  placeItems: "center",
                  justifyContent: "center",
                }}
              >
                <h1>Image Cool Down !! Press the picture to refresh.</h1>

              </div>
            )}
            {ImgVS && (
              
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 10,
                  placeItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card
                  sx={{ backgroundColor: "#EAA3FC", marginTop: 10 }}
                  
                >
                  <div style={{display:'flex',textAlign:'center',flexDirection:"column"}}>

                  <strong>{ImgVS[randomNumber].Name}</strong>
                    <img
                      style={{ width: 350, padding: 10 }}
                      src={ImgVS[randomNumber].image}
                      alt=""
                      onClick={() => {
                    
                        if(soldimg==1){
                          // setimgVS(ImgVS => ImgVS?.filter((item, index) => index !== randomNumber));
                          addvotesql(1)
                          // generateRandomNumbers(ImgVS);
                        }
                        // setstat(1);
                        if(soldimg==2)
                        {
                          ImgVS1();
                        }
                      }}
                    />
                    {/* <strong style={{fontSize:30}}>{ImgVS[randomNumber].Score}</strong> */}
                    <div onClick={opendialogUL}>
                      <strong>Uid : {ImgVS[randomNumber].Uid}</strong>
                      {(user)&&(
                        < div>
                          <strong>User : {user[0].Name}</strong>
                        </div>
                      )}
                      </div>
                      
                      
                      
                  </div>
                </Card>
                {(soldimg==1||soldimg==0)&&(
                  <img
                  style={{ width: 100, height: 100, marginTop: 20, margin: 20 }}
                  src="https://img2.pic.in.th/pic/versus-1.png"
                  alt=""
                />
                )}
                <Card
                  sx={{ backgroundColor: "#EAA3FC", marginTop: 10 }}
                 
                >
                  <div style={{display:'flex',textAlign:'center',flexDirection:"column",margin:"auto?"}}>

                  <strong>{ImgVS[randomNumber2].Name}</strong>
                  <img
                    style={{ width: 350, padding: 10 }}
                    src={ImgVS[randomNumber2].image}
                    alt=""
                    onClick={() => {
                      if(soldimg==1){
                        // setimgVS(ImgVS => ImgVS?.filter((item, index) => index !== randomNumber2));
                        addvotesql(2)
                        // generateRandomNumbers(ImgVS);
                      }
                      if(soldimg==2)
                      {
                        ImgVS1();
                      }
                      
                      // setstat(2);
                    }}
                    
                  />
                  {/* <strong style={{fontSize:30}}>{ImgVS[randomNumber2].Score}</strong> */}
                 <div onClick={opendialogUR}>
                  <strong>Uid : {ImgVS[randomNumber2].Uid}</strong>
                  {(user2)&&(
                        < div>
                          <strong>User : {user2[0].Name}</strong>
                        </div>
                      )}
                  </div>
                  
                  </div>
                  
                </Card>
              </div>
            )}
          </div>
          <br />
          <br />
          {/* dialogคำนวณ */}
          <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={Cdialog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"EloRating"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div style={{display:'flex',justifyContent:'space-between',textAlign:'center'}}>
              <div >
                <h3>{Winu}[win]</h3>
                <h2>{Scwall}</h2>
                <h4>{Scw}</h4>
                <h5>{mathc}</h5>
                
              </div>
              <div style={{marginLeft:40,justifyItems:'center',textAlign:'center'}}>
                <h3>{Lossu}[loss]</h3>
                <h2>{Sclall}</h2>
                <h4>{Scl}</h4>
                <h5>{mathmax}</h5>
              </div>
            

            
            </div>
            <div style={{justifyItems:'center',textAlign:'center'}}>
              <h3>{K}</h3>
             <h5>{R}</h5>
             
             <h4>{P1}</h4>
             <h4>{P2}</h4>
             
            
            </div>
           
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={Cdialog} variant="contained" color="secondary">
            Close
          </Button>
         
        </DialogActions>
      </Dialog>
      
      {/* dialogขวา */}
      <Dialog
        fullScreen={fullScreen}
        open={openR}
        onClose={UdialogR}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"User"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div style={{display:'flex',justifyContent:'space-between',textAlign:'center',}}>
             
            {(user2)&&(
                        < div style={{display:'flex',flexDirection:'column'}}>
                        <img src={user2[0].Profileimage}  width="200" height={200} alt="" />
                        <br />
                          <strong>Uid : {user2[0].Uid}</strong>
                          <strong>User : {user2[0].Name}</strong>
                          <strong>Detail : {user2[0].Detail}</strong>
                        </div>
                      )}

            
            </div>
           
           
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={UdialogR} variant="contained" color="secondary">
            Close
          </Button>
         
        </DialogActions>
      </Dialog>

      {/* dialogซ้าย */}
      <Dialog
        fullScreen={fullScreen}
        open={openL}
        onClose={UdialogL}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"User"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div style={{display:'flex',justifyContent:'space-between',textAlign:'center',}}>
             
            {(user)&&(
                        < div style={{display:'flex',flexDirection:'column'}}>
                        <img src={user[0].Profileimage} width="200" height={200} alt="" />
                        <br />
                          <strong color="black">Uid : {user[0].Uid}</strong>
                          <strong>User : {user[0].Name}</strong>
                          <strong>Detail : {user[0].Detail}</strong>
                        </div>
                      )}

            
            </div>
           
           
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={UdialogL} variant="contained" color="secondary">
            Close
          </Button>
         
        </DialogActions>
      </Dialog>
        </Container>
      </div>
    </div>
  );

  async function addvoteELO(Windex: number, Lindex: number) {
    if (ImgVS && ImgVS.length > Windex && ImgVS.length > Lindex) {
      // Ra and Rb are current ELO ratings
      const Ra = ImgVS[Windex].Score;
      const Rb = ImgVS[Lindex].Score;
      const K = 10;
      const d = true;

      EloRating(Ra, Rb, K, d, Windex, Lindex);
    }

    // This code is contributed by Vishal Vilas Shinde.
  }
  // Javascript program for Elo Rating

  // Function to calculate the Probability
  function Probability(rating1: number, rating2: number) {
    return (
      (1.0 * 1.0) / (1 + 1.0 * Math.pow(10, (1.0 * (rating1 - rating2)) / 400))
    );
  }

  // Function to calculate Elo rating
  // K is a constant.
  // d determines whether Player A wins
  // or Player B.
  async function EloRating(
    Ra: number,
    Rb: number,
    K: number,
    d: boolean,
    Windex: number,
    Lindex: number
  ) {
    console.log(Windex+" "+Lindex)
    const wina = Ra;
    const lossb = Rb;
    // To calculate the Winning
    // Probability of Player B
    const Pb = Probability(Ra, Rb);

    // To calculate the Winning
    // Probability of Player A
    const Pa = Probability(Rb, Ra);

    // Case 1 When Player A wins
    // Updating the Elo Ratings
    if (d === true) {
      Ra = Ra + K * (1 - Pa);
      Rb = Rb + K * (0 - Pb);
    }

    // Case 2 When Player B wins
    // Updating the Elo Ratings
    else {
      Ra = Ra + K * (0 - Pa);
      Rb = Rb + K * (1 - Pb);
    }
    console.log(wina+" "+Math.max(0,Math.floor((Ra * 1000000.0) / 1000000.0)))
    const wins = (Math.ceil((Ra * 1000000.0) / 1000000.0)) - wina;

   
    console.log(lossb+" "+Math.max(0,Math.floor((Rb * 1000000.0) / 1000000.0))
    );
    let losss = lossb - Math.max(0,Math.floor((Rb * 1000000.0) / 1000000.0));
    opendialog(Windex,Lindex,wina,lossb,wins,losss,K,Pa,Pb,d,Ra,Rb);
    if (losss <= 0) {
      console.log("loss<0")
      losss = 0;
    }else{
      console.log("else")
    }
    if (ImgVS && ImgVS.length > Windex && ImgVS.length > Lindex) {
      const resultwin = async () => {
        const addvote = await userser.addvote(
          ImgVS[Windex]?.Iid,
        id,
        1,
        wins
        );
        console.log(addvote);
      };
      resultwin();
      const resultloss = await userser.addvote(
        ImgVS[Lindex].Iid,
        id,
        0,
        losss
      );
      
      console.log(resultloss);
    }

    console.log("Updated Ratings:-");
    console.log(
      "Ra = " +
      Math.max(0,Math.ceil((Ra * 1000000.0) / 1000000.0))+
        " Rb = " +
        Math.max(0,Math.floor((Rb * 1000000.0) / 1000000.0))

    );
    console.log(
      "Ra2 = " +
        wins +
        " Rb2 = " +
        losss
    );
  }
  function opendialog(indexw:number,indexl:number,scw:number,scl:number,newscw:number
    ,newscl:number,k:number,p1:number,p2:number,d:boolean,ra:number,rb:number)
  {
    if(ImgVS)
    { 
      
      const winll=scw+newscw;
      const lll=scl-newscl;
      setOpen(true)
      setWinu(ImgVS[indexw].Name)
      setLossu(ImgVS[indexl].Name)
      setScwall(`${winll}`)
      setSclall(`${lll}`)
      setScw(`${scw} +${newscw}  `)
      setScl( `${scl} -${newscl}`)
      setP1(`P1=(1.0 * 1.0) / (1 + 1.0 * Math.pow(10, (1.0 * (${scl} - ${scw})) / 400))=${p1}`)
      setP2(`P2=(1.0 * 1.0) / (1 + 1.0 * Math.pow(10, (1.0 * (${scw} - ${scl})) / 400))=${p2}`)
      setK(`K=${k} `)
      if(d)
      {
        setR(`Ra  = ${scw} + ${k} * (1 - ${p1}) = ${ra}  ,  Rb = ${scl} + ${k} * (0 - ${p2}) = ${rb} `)
      }
      else(
        setR(`Ra = ${scw} + ${k} * (0 - ${p1}) = ${ra} , Rb = ${scl} + ${k} * (1 - ${p2}); = ${rb} `)
      )
      setmathc(` ${winll} = (Math.ceil((${ra} * 1000000.0) / 1000000.0))`)
      setmathmax(`${lll} =  Math.max(0,Math.floor((${ra} * 1000000.0) / 1000000.0)`)
      
    }
   
  }
  function Cdialog()
  {
   
    setOpen(false)
    ImgVS1();
    // setstat(1);
    // if(ImgVS)
    // { 

    //   generateRandomNumbers(ImgVS);
    // }
   
  }
  function UdialogR()
  {
   
    setOpenR(false)
   
   
  }
  function opendialogUR()
  {
    setOpenR(true)
  }
  function UdialogL()
  {
   
    setOpenL(false)
   
   
  }
  function opendialogUL()
  {
    setOpenL(true)
  }
}

export default VSPage;
