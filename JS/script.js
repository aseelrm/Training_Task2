var imgs=document.querySelectorAll('.p-img')
var bg=document.getElementById('modalBg')
var modalImg=document.getElementById('modalImg')

if(imgs){
    imgs.forEach(function(i){
        i.onclick=function(){
            modalImg.src=i.src
            bg.style.display="flex"
        }
    })
}

if(bg){
    bg.onclick=function(e){
        if(e.target===bg){
            bg.style.display="none"
        }
    }
}

var save=document.getElementById('saveBooking')
if(save){
    save.onclick=function(){
        var n=document.getElementById('nameInput').value
        var p=document.getElementById('phoneInput').value
        var e=document.getElementById('emailInput').value
        var c=document.getElementById('courseSelect').value
        if(n&&p&&e){
            var data={name:n,phone:p,email:e,course:c}
            var arr=JSON.parse(localStorage.getItem('bookings')||'[]')
            arr.push(data)
            localStorage.setItem('bookings',JSON.stringify(arr))
            document.getElementById('successMsg').innerText="Booking Saved Successfully"
        }
    }
}
