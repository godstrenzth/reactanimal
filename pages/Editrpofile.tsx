import { Button, Card, Grid, TextField } from "@mui/material";
import { Container, Box } from "@mui/system";
import Header from "./Header";
import { useEffect, useRef, useState } from "react";
import { UserService } from "../services/user";

import { User } from "../model/user";
import { useNavigate } from "react-router-dom";

export default function Editprofile() {
  const userser = new UserService();
  const [user, setuser] = useState<User[]>();
  const id = localStorage.getItem("ID");
  const Emailref = useRef<HTMLInputElement>();
  const Dtailref = useRef<HTMLInputElement>();
  const Nameref = useRef<HTMLInputElement>();
  const avata1 =
    "https://img.freepik.com/premium-photo/anime-boy-man-avatar-ai-generative-art_225753-12285.jpg";
  const avata2 =
    "https://img.freepik.com/premium-vector/young-girl-animestyle-character-vector-illustration-design-manga-anime-girl_147933-2591.jpg";
  const avata3 =
    "https://img.freepik.com/photos-premium/avatar-masculin-anime_950633-948.jpg";
  const avata4 =
    "https://img.freepik.com/premium-vector/young-girl-anime-style-character-vector-illustration-design-manga-anime-girl_147933-12562.jpg";
  const avata5 =
    "https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4668.jpg";
  const [_showBorder, setshowBorder] = useState(0);
  let IImage: unknown;
  const [_img, set_img] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    userbyid();
  }, [_showBorder]);

  const userbyid = async () => {
    const re = await userser.getuserByid(id);
    setuser(re);
    console.log(re);
    console.log(re?.[0]?.Name);
  };

  return (
    <>
      <Header></Header>
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
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyItems: "center",
                  maxWidth: "150px",
                }}
              >
                <img
                  src={avata1}
                  alt="image"
                  style={{
                    width: "100%",
                    marginLeft: 10,
                    border: _showBorder == 1 ? "5px solid #cc00ff" : "none",
                  }}
                  onClick={() => {
                    setimg(avata1, 1);
                  }}
                />
                <img
                  src={avata2}
                  alt="image"
                  style={{
                    width: "100%",
                    marginLeft: 10,
                    border: _showBorder == 2 ? "5px solid #cc00ff" : "none",
                  }}
                  onClick={() => {
                    setimg(avata2, 2);
                  }}
                />
                <img
                  src={avata3}
                  alt="image"
                  style={{
                    width: "100%",
                    marginLeft: 10,
                    border: _showBorder == 3 ? "5px solid #cc00ff" : "none",
                  }}
                  onClick={() => {
                    setimg(avata3, 3);
                  }}
                />
                <img
                  src={avata4}
                  alt="image"
                  style={{
                    width: "100%",
                    marginLeft: 10,
                    border: _showBorder == 4 ? "5px solid #cc00ff" : "none",
                  }}
                  onClick={() => {
                    setimg(avata4, 4);
                  }}
                />
                <img
                  src={avata5}
                  alt="image"
                  style={{
                    width: "100%",
                    marginLeft: 10,
                    border: _showBorder == 5 ? "5px solid #cc00ff" : "none",
                  }}
                  onClick={() => {
                    setimg(avata5, 5);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <div style={{ display: "flex", justifyContent: "strat" }}>
                <Card sx={{ height: "180px", width: "40vw", marginTop: 5 }}>
                  {user && (
                    <div>
                      <div
                        style={{
                          marginLeft: 10,
                          marginTop: 10,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <strong>Email : </strong>
                        <TextField
                          size="small"
                          sx={{ marginLeft: 2, width: 350 }}
                          defaultValue={user[0].Email}
                          inputRef={Emailref}
                        >
                          {" "}
                        </TextField>
                      </div>
                      <div
                        style={{
                          marginLeft: 10,
                          marginTop: 10,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <strong>Name : </strong>
                        {/* <TextField size="small" sx={{marginLeft:2,width:350}} defaultValue={user && user.length > 0 ? user[0].Name : ''}> </TextField> */}
                        <TextField
                          size="small"
                          sx={{ marginLeft: 2, width: 350 }}
                          defaultValue={user[0].Name}
                          inputRef={Nameref}
                        >
                          {" "}
                        </TextField>
                      </div>
                      <div
                        style={{
                          marginLeft: 10,
                          marginTop: 10,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <strong>Detil : </strong>
                        <TextField
                          size="small"
                          sx={{ marginLeft: 3, width: 350 }}
                          defaultValue={user[0].Detail}
                          inputRef={Dtailref}
                        >
                          {" "}
                        </TextField>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Button
                  variant="contained"
                  onClick={saveP}
                  sx={{ backgroundColor: "#EAA3FC", color: "black" }}
                >
                  ยืนยัน
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
  function setimg(img: string, ind: number) {
    if (_showBorder == ind) {
      setshowBorder(0);
    } else {
      setshowBorder(ind);
      set_img(img);
    }
  }

  async function saveP() {
    if(Nameref.current?.value&& Emailref.current?.value&& Dtailref.current?.value){
    
        if (_showBorder == 0) {
          IImage = user?.[0].Profileimage;
          const result = await userser.putsaveuser(
            id,
            Nameref.current?.value,
            Emailref.current?.value,
            IImage,
            Dtailref.current?.value
          );
          console.log(result);
        } else {
          const result = await userser.putsaveuser(
            id,
            Nameref.current?.value,
            Emailref.current?.value,
            _img,
            Dtailref.current?.value
          );
          console.log(result);
        }
        navigate(-1);
  }
  else{
    alert("Please fill in all fields!");
  }
}
}
