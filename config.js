const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255754640857";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255749750707";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_52_09_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDYwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NSxcbiAgICAgICAgODksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMixcbiAgICAgICAgMTEzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MyxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA3LFxuICAgICAgICA4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDU0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICA5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc5LFxuICAgICAgICA1NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjksXG4gICAgICAgIDI2LFxuICAgICAgICAzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc0LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDk5LFxuICAgICAgICAxOTksXG4gICAgICAgIDU2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3LFxuICAgICAgICAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkyLFxuICAgICAgICA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitkVFh6OWtkbHFnK0RkM3RVVGNXS3prY2cxcXZTUHdNNmFRYTkwTnlLN009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInUwME9NTGs4UktPaW5EVnFOWWhZeUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTk3MmZkYzItOWRlYi00ODM4LWE0YTUtM2FmY2E1YWE2YjE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAxMjQsXG4gICAgICAyMTEsXG4gICAgICA3NCxcbiAgICAgIDE4NyxcbiAgICAgIDc1LFxuICAgICAgMjA3LFxuICAgICAgMTg3LFxuICAgICAgOTMsXG4gICAgICAyMjAsXG4gICAgICA1NSxcbiAgICAgIDE3MCxcbiAgICAgIDE3OSxcbiAgICAgIDM1LFxuICAgICAgNDcsXG4gICAgICA2OCxcbiAgICAgIDE1MixcbiAgICAgIDE2NyxcbiAgICAgIDcyLFxuICAgICAgMTYyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MyxcbiAgICAgIDI0NCxcbiAgICAgIDE0MixcbiAgICAgIDE2NSxcbiAgICAgIDE4NyxcbiAgICAgIDUwLFxuICAgICAgNjAsXG4gICAgICA5NSxcbiAgICAgIDExNCxcbiAgICAgIDM3LFxuICAgICAgMTc4LFxuICAgICAgMjQxLFxuICAgICAgNzksXG4gICAgICAxMTMsXG4gICAgICAxNzYsXG4gICAgICAxNzMsXG4gICAgICAyLFxuICAgICAgNDEsXG4gICAgICAxMDYsXG4gICAgICAxNThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSDhaR0pKWjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1NDY0MDg1NzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlZAbGx5XCIsXG4gICAgXCJsaWRcIjogXCIxNTUxMjE4NTM5ODQ5NzQ6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3Yvdi9JRkVPelZsYmNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3cWZRNWx6YVhIbGFaaUFmOGd1WmZKSFJBWC9pUU9LZmVHUDlQdVBHTXpjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkgySms0aEVGbHk1NEl3eTNDQnVwTlFtK0dLaHFXVCtNVTUzNC9MbEEvaFM3ZDkzQ0JweklOV1VWZEZETlpHYisxbFN2aUU5WTBWWlVzVW9CMHFCSENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBOdU13bzRFUkswQURERUJuUkZRd1RXMlNGUTQ0d3ErNHJoSmt2Rm1JWnZtdEJNVWI3bnJ2Y0JsYXl6T3ZBL1VWVnkzNS8zUFBuTTZKNHBCWVRWK2pnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc1NDY0MDg1NzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2MzExMTUzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
