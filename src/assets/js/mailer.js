import nodemailer from"nodemailer";

import {google} from"googleapis";

const {OAuth2} = google.auth;

const oauth_link = "https://developers.google.com/oauthplayground";
const {EMAIL,MAILING_ID,MAILING_REFRESH,MAILING_SECRET} = process.env;

const auth = new OAuth2(
    MAILING_ID,
    MAILING_SECRET,
    MAILING_REFRESH,
    oauth_link
);

const email = document.querySelector("#email").value;

// console.log(email);
// email,name,url
const sendEmail = ()=>{
    auth.setCredentials({
        refresh_token:MAILING_REFRESH
    });
    const accessToken = auth.getAccessToken();
    const smtp = nodemailer.createTransport({
        service:"gmail",
        auth:{
            type:"OAuth2",
            user:EMAIL,
            clientId:MAILING_ID,
            clientSecret:MAILING_SECRET,
            refreshToken:MAILING_REFRESH,
            accessToken
        }
    })
    const mailOptions = {
        from:email,
        to:EMAIL,
        subject:"Facebook-clone email verification",
        text:"",
    }
    smtp.sendMail(mailOptions,(error,response)=>{
        if(error) return error;
        return response;
    })
}

const btn = document.querySelector("#btn");
btn.addEventListener('click',()=>{
    console.log(email);
    sendEmail();
})