function tasksIndex(){
 $("body").on("click","div#to_do a.ajax" ,function(e){
   e.preventDefault()
   uri = $(this).attr("href");
   $.ajaxSetup({
         headers: {
           'X-CSRF-Token' : AUTH_TOKEN
         }
       });
   $.ajax({
     method: "PUT",
     url: uri,
     data: JSON.stringify({"status": "done"}),
     contentType: "application/json",
     dataType: "json",
     success: function(data){
       console.log(data)
       $("#done").append($("#" + data.id))
     }
   })
 })

 $("body").on("click", "div#done a.ajax",function(e){
   e.preventDefault()
   uri = $(this).attr("href");
   $.ajaxSetup({
         headers: {
           'X-CSRF-Token' : AUTH_TOKEN
         }
       });
   $.ajax({
     method: "PUT",
     url: uri,
     data: JSON.stringify({"status": "to_do"}),
     contentType: "application/json",
     dataType: "json",
     success: function(data){
       $("#to_do").append($("#" + data.id))
     }
   })

 })
}
