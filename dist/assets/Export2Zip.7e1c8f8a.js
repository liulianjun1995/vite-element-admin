import{F as e}from"./FileSaver.min.7135435f.js";import{J as t}from"./index.2d61fb5d.js";import"./vendor.71a11aaa.js";import"./index.35fc3a83.js";import"./demo.53a485be.js";import"./upload.3ed066c6.js";import"./file.56c9db88.js";import"./index.f3301aa0.js";function i(i,o,r,a){const n=new t,s=r||"file",p=a||"file";let f=`${i}\r\n`;o.forEach((e=>{let t="";t=e.toString(),f+=`${t}\r\n`})),n.file(`${s}.txt`,f),n.generateAsync({type:"blob"}).then((t=>{e.exports.saveAs(t,`${p}.zip`)}),(e=>{alert("导出失败")}))}export{i as export_txt_to_zip};