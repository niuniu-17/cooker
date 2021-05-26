$(function(){
    Array.from(document.getElementsByClassName('btu')).forEach(i =>{
        i.onclick = () =>{
            window.location.href='/about/add1'
        }
    })


    Array.from(document.getElementsByClassName('del')).forEach(i=>{
        i.onclick=()=>{
            let id = i.getAttribute('data-id')
            $.ajax({
                url:"/about/del/"+id,
                type:'DELETE',
                success:function(data){
                    if(data =='success'){
                        alert('删除成功')
                        $(i).parent().siblings().siblings().remove()
                    }
                }
            })
        }
    })

    Array.from(document.getElementsByClassName('upa')).forEach(i =>{
        i.onclick = () =>{
            let id = i.getAttribute('data-id')
            window.location.href='/about/upa/'+id
        }
    })

    
})