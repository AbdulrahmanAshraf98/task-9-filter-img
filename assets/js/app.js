var list=document.getElementsByClassName("list");
var productList=document.getElementsByClassName("item");
var listSize=list.length;
for(var i =0 ; i<listSize;i++)
{
    list[i].addEventListener("click",function(){
        
        for(var j =0 ; j<listSize;j++)
        {
            list[j].classList.remove("active");
        }
        this.classList.add("active");
        dataFilter=this.getAttribute("data-filter");
        for(var k=0 ; k<productList.length;k++)
        {
          productList[k].classList.add("hidden");
          if(productList[k].getAttribute("data-filter")==dataFilter||dataFilter=="all")
          {
            productList[k].classList.remove("hidden");
          }
        }
    })
}


