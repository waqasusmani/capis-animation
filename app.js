document.getElementById('whirl').classList.add('whirl-invisible')

setTimeout(()=>{
    document.getElementById('whirl').classList.remove('whirl-invisible')    
    document.getElementById('whirl').classList.add('whirl-circling')    
},1000)

setTimeout(()=>{
    document.getElementById('bubbles').classList.add('bubbles-rising')
    document.getElementById('capis').classList.add('capis-visible')
    document.getElementById('capis').classList.remove('capis')
},3000)

setTimeout(()=>{
    document.getElementById('whirl').classList.add('whirl-invisible')
    document.getElementById('capis-div').classList.add('capis-grown')
},8000)

setTimeout(()=>{
    document.getElementById('gradient').style.display='unset'
    document.getElementById('capis-div').style.left='47.5vw'
},11000)

setTimeout(()=>{
    document.getElementById('last-text').style.display='unset'
},11500)

setTimeout(()=>{
    document.getElementById('qualities').style.display='unset'
},12000)

setTimeout(()=>{
    document.getElementById('daraz').style.display='unset'
},12500)
