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
                        $(i).parent().parent().parent().remove()
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


    // ***********************
    document.getElementsByClassName('seach ')[0].onclick= ()=>{
        alert(1)
       let mes = document.getElementById('inp_sea').value;
       $.ajax({
           url:'/about/search/'+mes,
           type:'get',
           success:function(data){
               alert(22)
               document.getElementsByClassName('row1')[0].innerHTML =
               data.map(i =>
                   `
                   <div class="col-xs-1 ">
                   <p>${i.id}</p>
               </div>
               <div class="col-xs-4">
               <p>${i.ta_name}</p>
               </div>
               <div class="col-xs-5"> 
               <p>${i.ta_order}</p> 
               <!-- <div class="col-xs-13"> 
               <p>${i.ta_account}</p>  -->
          </div>
         <div class="col-xs-2">
           <button  class="btn btn-success btn-xs btu" data-toggle="modal" data-target="#changeChar" data-id=${i.id}>添加</button>
           <button class="btn btn-danger btn-xs del" data-toggle="modal" data-target="#deleteChar" data-id=${i.id}>删除</button>
           <button class="btn btn-danger btn-xs upa" data-toggle="modal" data-target="#deleteChar" data-id=${i.id}>修改</button>
        </div>
                   `
               ).join("");
           }
       })
    }

})