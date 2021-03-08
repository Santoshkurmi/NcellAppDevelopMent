import React from 'react';
import axios from 'axios';
import {Text,AsyncStorage} from 'react-native';
import Writedata from './Storage';
import { sha256} from 'js-sha256';






var login='';
var data1='';

const LoginNcell=async (phone='',password='',bodynumber=1,otp='',res='',amount='',unit='')=>{
  

   
 
        const url=["/api/login/sendMsgCode",
        "/api/login/loginWithSmsOrPWD",
        "/api/billing/queryAcctBal",
        "/api/billing/qryUsageDetail",
        "/api/login/sendMsgCode",
        "/api/login/register",//5
        "/api/login/sendMsgCode",//6
        "/api/login/resetPwd",//7
        0,
        0,
        "/api/billing/exportCdrWithPath",//10
        "/api/login/sendMsgCode",//11
        "/api/billing/balTransfer",//12
        "/api/billing/Borrowing",//13
        "/api/system/sendSMSRestCount",//14,2
        "/api/system/validate4SendSMS",//15,14
        "/api/system/sendSMS",
        "/api/subs/orderOrRemoveOrderVas",
        '/api/subs/modifySubsPlan',//18
        "/api/subs/qryMySubscriber",//19
        "/api/subs/simCardRestore",//20
        "/api/subs/simCardLost",//21
        "/api/billing/qryCdr",//22
        "/api/resource/qrySimCardDetail",//23
        "/api/login/sendMsgCode",//24
        "/api/system/validate4CallHistory"
        ];

      const  bodys=[{"ACC_NBR":phone,
"MSG_TYPE":"LOGIN_WITH_SMS"},

{"ACC_NBR":phone,
  "LOGIN_CODE": password,
  "MSG_TYPE": "SMS",
  "IS_COOKIE_PWD": "N",
  "CUST_TYPE": "S"},

  {"":""},

  { "PREFIX":"977"},

  {"ACC_NBR":phone,
  "MSG_TYPE":"REGISTER"},

  {
    "ACC_NBR":phone,
"PWD":password,
"VER_CODE":otp,
"MSG_TYPE":"REGISTER"},

{"ACC_NBR":phone,
  "MSG_TYPE":"FORGET_PWD"},


{"NEW_PWD":password,
  "ACC_NBR":phone,
  "VER_CODE":otp,
  "MSG_TYPE":"FORGET_PWD"},


{"MSG_TYPE":"CALL_HISTORY"},


{  "VER_CODE":"$otp",
  "MSG_TYPE":"CALL_HISTORY"},


{"SERVICE_TYPE":"",
  "BEGIN_DATE":'',
  "END_DATE":'',
  "PAYMENT_TYPE":"Y"},


{"MSG_TYPE":"VALIDATE_BAL_TRANSFER_CODE"},


{"Operation":1,
  "ACCT_RES_CODE":res,
  "DMSISDN":phone,
  "AMOUNT":amount,
  "VER_CODE":otp,
  "UNIT":unit},

  {"DEBIT_LOAN_TYPE":"1",
  "AMOUNT":"$amount"},


{"":""},


{"ACC_NBR":"$phone",
  "MSG":"$msg",
  "SEND_TIME":""},

  {"ACC_NBR":"$phone",
  "MSG":"$msg",
  "SEND_TIME":""},

  {"MOD_TYPE":"final",
  "IS_ORDER": "1",
  "OFFER_ID":'otp'},

  {"NEW_SUBS_PLAN_ID":'',
  "MOD_TYPE": "FINAL"},

  {
    "QRY_INDEP_PROD":true,
    "QRY_USED_RES":true,
    "INCLUDE_TERMINATION":true
  },//pin puk 10 numbber body number 19

  {
    "ORDER_REASON_ID":2,
    "ORDER_REASON":"I lost my simcard.I will resume after I found it"
  },

  {
    "ORDER_REASON_ID":3,
    "ORDER_REASON":"I found my simcard."
  },
  
  {
     "SERVICE_TYPE":'check',
  "BEGIN_DATE":'$sdate',
  "END_DATE":'$edate',
  "PAYMENT_TYPE":"Y",
  "PAGE_INDEX":'$page',
  "PAGE_SIZE":'$number' },
  
  {
      
      "SIM_CARD_ID":'$sim'//23
     },
      
   {
       "MSG_TYPE":"CALL_HISTORY"//24
       }  ,
       
    {
        
    "VER_CODE":'$otp',
    "MSG_TYPE":"CALL_HISTORY"//25
        }
      
      

        ];
//body above it then everything will happen right here hehe
        const urlmain="https://customer.ncell.axiata.com"+url[bodynumber];

        // const body={
        //     "ACC_NBR":phone,
        //   "LOGIN_CODE":password,
        //   "MSG_TYPE":"SMS",
        //   "IS_COOKIE_PWD":"N",
        //   "CUST_TYPE":"S"
        // }\
        async function get(){
        let data= await AsyncStorage.getItem('detail'); 
        //console.warn(data);
       return  data= await JSON.parse(data);}
      if(bodynumber!=1 || bodynumber!=4 || bodynumber!=6){
       data2=await get();
       var session=await data2.session;
       var token=await data2.token;}
       else {session=""; token=''}

        const body=bodys[bodynumber];
        console.log(body)
        const bodystring=JSON.stringify(body);
        const length=bodystring.length;
        const clean=bodystring.replace(/[^a-zA-Z0-9]/g,'');
        //console.warn(body);
        
        const signcode=sha256(session+url[bodynumber]+clean+token+'16BytesString');
        // console.warn(body);
        // console.warn(signcode);
        // console.warn(session);
        // console.warn(token)
        // console.warn(clean)
        // console.warn(bodystring)
        // console.warn(length)
        // console.warn(urlmain)
           
        const header={
          headers:{
          "Accept":"*/*",
          'signcode ':signcode,
          "Connection": "Keep-Alive",
          "Host": "customer.ncell.axiata.com",
          "Save-Data":"on",
          "User-Agent":"Mozilla/5.0 (Linux; Android 10; RMX1851) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Mobile Safari/537.36 OPR/59.1.2926.54067",
          
              "Accept-Language":"en",
              "Content-Type":"application/json;charset=UTF-8",
              "Access-Control-Allow-Origin":'"*","X-Requested-With:XMLHttpRequest"',
              "Access-Control-Allow-Headers":"x-requested-with,content-type",
              "Origin":"https://customer.ncell.axiata.com",
              "Referer":"https://customer.ncell.axiata.com/",
              "Accept-Encoding":"gzip, deflate, br",
              "Cookie":"  _ga\u003dGA1.2.389050490.1595234853; _fbp\u003dfb.1.1595234881615.1640557001; __utmc\u003d34668734; __utma\u003d34668734.389050490.1595234853.1596914799.1598788611.8; __utmz\u003d34668734.1598788611.8.5.utmcsr\u003dgoogle|utmccn\u003d(organic)|utmcmd\u003dorganic|utmctr\u003d(not%20provided)",
              
              "Sec-Fetch-Mode":'"cors","Sec-Fetch-Dest:empty"',
              "Sec-Fetch-Site":"same-origin",
              "TOKEN-ID":token,'Content-Type': 'application/json',
              
              "SESSION-ID":session,"Content-Length":length}
          
          }


            
         
          //  console.warn(header)
         
           const login= await axios.post(urlmain,body,header);
          
         
            try{

             const code=await login.data.resultCode;
            const codeout=await login.data.resultDesc;
             const result=await login.data.result;
             const data1={
               'code':code,'codeout':codeout,'result':result
             }

                 console.log(login.data)
            if(bodynumber==1){
             if(code==0){
              
             const result= await login.data.result; 
             const logged=1;
             const customer=await result.CUST_NAME;
             const session=await result['SESSION-ID'];
              const token= await result.TOKEN_ID;
              var  ofdata= await {'logged':logged,'customer':customer,'session':session,'token':token}
           //  console.warn('aaaaaaaaaa')
             Writedata(ofdata);
        

             } }
         //  if bodynumber==2
           if (code==5){ Writedata(); }

               
            if(bodynumber==3){ }
        
             return data1;
            
            } catch(error){console.log(error);}
       //console.warn(data1)
      
        return( 
          data1
        )
          
        



}

export default LoginNcell;