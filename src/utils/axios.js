import axios from "axios";

// const getAccessToken = ()=>{
//   const user = localStorage.getItem("USER");
//     if (!user) return ""
//      return JSON.parse(user)?.accessToken;
// }

const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjMwLzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNzAyNzIwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE3MTc0ODAwfQ.7MW8E_eXXd0bcbNFchNRQTlWpRBVvM0yUAkLRSo12ws";
export let https = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
    // Authorization: 'Bearer ' + getAccessToken(),
  },
});
