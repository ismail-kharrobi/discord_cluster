
import fetch from "node-fetch"
import puppeteer from 'puppeteer-core';
import  {executablePath} from 'puppeteer'
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import * as dotenv from 'dotenv' 
dotenv.config()

// console.log(`${process.env.URL_PHP_PHP}`)
const delete_msg = async(message_id) =>
{

  await fetch(`https://discord.com/api/v9/channels/${process.env.CHANNEL_ID}/messages/${message_id}`, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "authorization": `${process.env.AUTH_HEADER}`,
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      "x-debug-options": "bugReporterEnabled",
      "x-discord-locale": "en-US",
      "x-super-properties": "eyJvcyI6Ik1hYyBPUyBYIiwiYnJvd3NlciI6IkNocm9tZSIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE0XzYpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85Ni4wLjQ2NjQuNDUgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijk2LjAuNDY2NC40NSIsIm9zX3ZlcnNpb24iOiIxMC4xNC42IiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjE3NzAyNiwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbCwiZGVzaWduX2lkIjowfQ==",
      "cookie": `${process.env.COOKIE}`,
      "Referer": `https://discord.com/channels/${process.env.SERVER_ID}/${process.env.CHANNEL_ID}`,
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
  "body": null,
  "method": "DELETE"
});
}
const wait = async() =>
{
  let nonce = Math.floor(Math.random() * (8076432320971407360 - 1076432320971407360) + 1076432320971407360)
  let response = await fetch(`https://discord.com/api/v9/channels/${process.env.CHANNEL_ID}/messages`, {
    "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "authorization": `${process.env.AUTH_HEADER}`,
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      "x-debug-options": "bugReporterEnabled",
      "x-discord-locale": "en-US",
      "x-super-properties": "eyJvcyI6Ik1hYyBPUyBYIiwiYnJvd3NlciI6IkNocm9tZSIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE0XzYpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85Ni4wLjQ2NjQuNDUgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijk2LjAuNDY2NC40NSIsIm9zX3ZlcnNpb24iOiIxMC4xNC42IiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjE3NzAyNiwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbCwiZGVzaWduX2lkIjowfQ==",
      "cookie": `${process.env.COOKIE}`,
      "Referer": `https://discord.com/channels/${process.env.SERVER_ID}/${process.env.CHANNEL_ID}`,
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": `{\"content\":\"wait a moment ...\",\"nonce\":\"${nonce}\",\"tts\":false,\"flags\":0}`,
    "method": "POST"
  });
    let data = await response.json();
    return data;
}
const  performAction = async(name) => {

    let nonce = Math.floor(Math.random() * (8076432320971407360 - 1076432320971407360) + 1076432320971407360)
         let response =  await fetch(`https://discord.com/api/v9/channels/${process.env.CHANNEL_ID}/messages`, {
          "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "authorization": `${process.env.AUTH_HEADER}`,
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-debug-options": "bugReporterEnabled",
            "x-discord-locale": "en-US",
            "x-super-properties": "eyJvcyI6Ik1hYyBPUyBYIiwiYnJvd3NlciI6IkNocm9tZSIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1VUyIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE0XzYpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS85Ni4wLjQ2NjQuNDUgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6Ijk2LjAuNDY2NC40NSIsIm9zX3ZlcnNpb24iOiIxMC4xNC42IiwicmVmZXJyZXIiOiIiLCJyZWZlcnJpbmdfZG9tYWluIjoiIiwicmVmZXJyZXJfY3VycmVudCI6IiIsInJlZmVycmluZ19kb21haW5fY3VycmVudCI6IiIsInJlbGVhc2VfY2hhbm5lbCI6InN0YWJsZSIsImNsaWVudF9idWlsZF9udW1iZXIiOjE3NzAyNiwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbCwiZGVzaWduX2lkIjowfQ==",
            "cookie": `${process.env.COOKIE}`,
            "Referer": `https://discord.com/channels/${process.env.SERVER_ID}/${process.env.CHANNEL_ID}`,
            "Referrer-Policy": "strict-origin-when-cross-origin"
          },
        "body": `{\"content\":\"${process.env.URL_CDN}:${process.env.CDN_PORT}/${name}\",\"nonce\":\"${nonce}\",\"tts\":false,\"flags\":0}`,
        "method": "POST",
   
      });
      let data = await response.json();
      return data;
}


async function generate_img(url,name) {
    // puppeteer.use(hidden())
    const browser = await puppeteer.launch({
        args: ['--no-sandbox',],
        headless: true,
        ignoreHTTPSErrors: true,
        fullPage : true,
        quality : 1,
        executablePath: executablePath(),
    })

    const page = await browser.newPage()
    await page.setViewport({
      width: 960,
      height: 1400,
      deviceScaleFactor: 1,
  });


  await page.goto(url, {
    waitUntil: 'networkidle2'
  });

  await page.screenshot({ path: `./images/${name}.png` });

  await browser.close();
}



let msg1 = await wait()

let cluster =  "cluster1.php" 
const url = `${process.env.URL_PHP}/${cluster}`;
let uuid = uuidv4();
 await generate_img(url,uuid)
 let msg2 = await performAction(`${uuid}.png`);
 await setTimeout(() => { delete_msg(msg1.id)}, 10000);

 await setTimeout(() => {delete_msg(msg2.id)}, 60000);

//  try {
//   fs.unlinkSync(`./images/${uuid}.png`);
//   console.log("Delete File successfully.");
// } catch (error) {
//   console.log(error);
// }