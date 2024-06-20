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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255754463635";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_12_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgMTMyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MixcbiAgICAgICAgMTI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDg0LFxuICAgICAgICA5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjksXG4gICAgICAgIDkxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUxLFxuICAgICAgICA1MSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDczLFxuICAgICAgICAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgODEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAzMixcbiAgICAgICAgMTExLFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDU5LFxuICAgICAgICA1MixcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3SVgwSFgvU085MG10Z0JCSmdNekRodmJ5dzZ4cVRFZnVTdkRtaVVFR2prPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc1NDQ2MzYzNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkQ0Qjk3MzhBMzlCOTgzMUEwMDY1MUI1OENDN0I0MDFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4ODg1NTMxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU1NzU0NDYzNjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QkIzMUVGQkFCMTI2NDYxOUZCNjhEODU1QkVCMkNGN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg4ODU1MzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NTQ0NjM2MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJBQUQyNjUxMDEzNUE0RDY3MDlDNDU1QkQzNUJFRUU2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODg4NTUzNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc1NDQ2MzYzNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzEwQUJFQkM0Q0ZGMjZEMTExNjYyNEZDRkJEQkRBM0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4ODg1NTM2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlJLVTNFUEFOUlVteGVuZnhGR0FhNndcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2FhZmMxYzItOTk0Zi00YTg2LTgxOGYtM2U3NGQwZTdkZTA1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQzLFxuICAgICAgMTY0LFxuICAgICAgODgsXG4gICAgICA2OSxcbiAgICAgIDEzNixcbiAgICAgIDY3LFxuICAgICAgMTA2LFxuICAgICAgMzEsXG4gICAgICAxNzMsXG4gICAgICAxOTIsXG4gICAgICA0MCxcbiAgICAgIDIzOSxcbiAgICAgIDIwMyxcbiAgICAgIDE2LFxuICAgICAgOTUsXG4gICAgICAxMzYsXG4gICAgICA3OCxcbiAgICAgIDY3LFxuICAgICAgMTM0LFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg0LFxuICAgICAgMTIzLFxuICAgICAgMTYzLFxuICAgICAgMjE1LFxuICAgICAgODQsXG4gICAgICA5OSxcbiAgICAgIDE5MyxcbiAgICAgIDIxNyxcbiAgICAgIDgyLFxuICAgICAgMTQwLFxuICAgICAgMTQ5LFxuICAgICAgMjEwLFxuICAgICAgMTcsXG4gICAgICAyNTEsXG4gICAgICA5NixcbiAgICAgIDEzMCxcbiAgICAgIDE0OSxcbiAgICAgIDEyNCxcbiAgICAgIDI5LFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlFGUjI3S1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1NDQ2MzYzNToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQkFUTUFOXCIsXG4gICAgXCJsaWRcIjogXCI3MDgxMTY5NjI1MDk0NDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tETTVhTURFSlc1MExNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiem9VTkQwK0VUVHpzN2hoUU1ncXNKdExPcEhRTUwwNThQbVN0OU8zRnFGMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzQmZBbXJJUmdNcFJEL3NSdjRyRzF6TDFqeVRUZjd2WGtKcTBJU0M1clR4amQzS0pTejROc2QwMm80OEVHY3pIajAwM0dJN0x1T3d1djRGMTM1N2lBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkSEFmcndISm91bG12dkE3OTl0U0wrVXpKUnFOeGhrY0JjL2drU3BoNElOMG1HZDJJSXpwTDZzaTdNaDlXSm8zOWFXUWd1S3ArREEvbDlXcWV2ZUdnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NTQ0NjM2MzU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODg4NTUyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUM3Q1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzdDLmpzb24iOiAie1wia2V5RGF0YVwiOlwidlZWRzRvN05LUk9QMzZpRGErTDRRdUNPN0RnYllKOExVMHh5V0JMOER0Yz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4ODAzNzEyMzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODg4NTUzMDQzNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
