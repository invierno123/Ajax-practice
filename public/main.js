console.log('abc')
let n=1
getPage.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)//注意要用反引号
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
               const array =JSON.parse(request.response)
               array.forEach(item => {
                   const li =document.createElement("li")
                   li.textContent=item.id
                   xxx.appendChild(li);

               });
               n+=1
            }
            else{
                alert('failed')
            }
        }
    }
    request.send()
}

getJson.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','./new.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
               console.log(request.response)
                const object=JSON.parse(request.response)
               myname.textContent=object.name
            }
            else{
                alert('failed')
            }
        }
    }
    

    request.send()
    }
getXML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','./new.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
               const dom=request.responseXML
               const text=dom.getElementsByTagName('warning')[0].textContent
               console.log(text.trim())
            }
            else{
                alert('failed')
            }
        }
    }
    

    request.send()
    }

getHTML.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','./new.html')
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
               const html=document.createElement('div')
               html.innerHTML=request.response
               document.body.append(html) 
            }
            else{
                alert('failed')
            }
        }
    }
    

    request.send()
    }




getJS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','./test.js')
    request.onload=()=>{
    console.log('success')
    const script=document.createElement('script')
    script.innerHTML=request.response
    document.head.append(script)
    }
    request.onerror=()=>{
        console.log('failed')
        };
    
    request.send()
    }
getCSS.onclick=()=>{
const request = new XMLHttpRequest()
request.open('GET','./style.css')
request.onload=()=>{
console.log('success')
const style=document.createElement('style')
style.innerHTML=request.response
document.head.append(style)
}
request.onerror=()=>{
    console.log('failed')
    };

request.send()
}
