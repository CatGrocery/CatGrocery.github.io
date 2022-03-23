var ShowHintIteam = [];
var IsMoible;
function showHint(str)
{
    ShowHintIteam = [];
    if(str == "寵物")
    {

    }
    else
    {
       var randomnum =	Math.round(Math.random() * (5 - 1)) + 1;
    document.getElementById("order_status").innerHTML= '<img src="https://cdn.jsdelivr.net/gh/Faxey/Cat_Store/props/loading0'+randomnum+'.gif" style="display:block; margin:auto;">';
    var xmlhttp;
        if (window.XMLHttpRequest)
          {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
          }
        else
          {// code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
          }
        xmlhttp.onreadystatechange=function()
          {
                  if (xmlhttp.readyState==4 && xmlhttp.status==200)      
                  {
                        var result=xmlhttp.responseText;
                        var obj = JSON.parse(result);//解析json字串為json物件形式
                                                
                        var html = '';//
                        
                       switch(str)
                       {
                           case('寶石'):
                           {
                           for (var i = 1; i < obj.length; i ++ ) 
                               {//
                                html  +='<div class="row justify-content-center pb-4" data-shuffle="item" data-groups="pasta"><div class="col-lg-2 mx-auto text-left"><a  class="product-media" style="display: flex; justify-content: center;"><img loading="lazy" class="lazyload " style="width:100%; max-height: 200px; object-fit: contain; object-position: center " data-src="'+obj[i].data[1]+'" alt=""></a></div>';
                                html  += '<div class="col-xs-12  col-lg-4 mx-auto"><h3> <a style="color: #fbbc04" >' + obj[i].data[0] + '</a></h3>';//
                                html  +='<div class="extra-fields-all"> <div class="extra-field" style="background-color: ; color: ; font-size: 14px; padding-left: 0px ;"><b class="extra-field-column-name">價格: </b> <span class="extra-field-value">'+obj[i].data[4]+ '<span>';
                                html  +='</div> <div class="extra-field" style="background-color: ; color: ; font-size: 14px; padding-left: 0px ;"><b class="extra-field-column-name">武器效果: </b> <span class="extra-field-value">'+obj[i].data[5]+'<span>';
                                html  +='</div> <div class="extra-field" style="background-color: ; color: ; font-size: 14px; padding-left: 0px ;"><b class="extra-field-column-name">防具效果: </b> <span class="extra-field-value">'+obj[i].data[3]+'<span>';
                                html  +='</div> <div class="extra-field" style="background-color: ; color: ; font-size: 14px; padding-left: 0px ;"><b class="extra-field-column-name">現貨: </b> <span class="extra-field-value">'+obj[i].data[6]+'<span>'+'</div></div>';
                                html  +='<div style="background-color: #e9ecf0; color: #3a3a3a;; margin-right: 5px;" class="badge">'+obj[i].data[7]+'</div></div>';
                                if(obj[i].data[2] == "立即購買")
                                {
                                    html  +='<div class="col-xs-12 col-lg-2 mx-auto"><a target="_blank" class="product-media" style="display: flex; justify-content: center;" ><button class="btn w-100" data-toggle="modal" data-target="#myModal" onclick="ShowModal()" style="background-color: #fbbc04; color: #ffffff;"> '+obj[i].data[2]+'</button></a></div></div><hr>';
                                }
                                else
                                {
                                    html  +='<div class="col-xs-12 col-lg-2 mx-auto"><a target="_blank" class="product-media" style="display: flex; justify-content: center;"><button class="btn w-100" style="background-color: #fbbc04; color: #ffffff;"> '+obj[i].data[2]+'</button></a></div></div><hr>';
                                }  

                                var ShowHintIteamData = [];
                                        for(j=0 ; j < obj[i].data.length ; j++)
                                        {
                                            ShowHintIteamData[j] = obj[i].data[j];
                                            //alert('1');
                                        }
                                ShowHintIteam[i] = ShowHintIteamData;
                               }
                               break;
                           }
                           
                           case ('劍'):
                           case ('斧'):
                           case ('弓'):
                           case ('杖'):
                           case ('槍'):
                           case ('小刀'):
                           case ('迴力鏢'):
                           case ('頭盔'):
                           case ('鎧甲'):
                           case ('盾牌'):
                           case ('靴子'):
                           case ('衣服'):
                           case ('袍'):
                           case ('鞋子'):
                           case ('帽子'):
                               {
                                   for (var i = 1; i < obj.length; i ++ ) 
                                   {//
                                   html  +='<div class="row justify-content-center pb-4" data-shuffle="item" data-groups="pasta"><div class="col-lg-2 mx-auto text-left"><a  class="product-media" style="display: flex; justify-content: center;"><img loading="lazy" class="lazyload " style="width:100%; max-height: 200px; object-fit: contain; object-position: center " data-src="'+obj[i].data[1]+'" alt=""></a></div>';
                                   html  += '<div class="col-xs-12  col-lg-4 mx-auto"><h3> <a style="color: #fbbc04" >' +obj[i].data[8] +'&emsp;'+ obj[i].data[0] + '</a></h3>';//
                                   html  +='<div class="extra-fields-all"> <div class="extra-field" style="background-color: ; color: ; font-size: 14px; padding-left: 0px ;"><b class="extra-field-column-name">價格: </b> <span class="extra-field-value">'+obj[i].data[4]+ '<span>';
                                   html  +='</div> <div class="extra-field" style="background-color: ; color: ; font-size: 14px; padding-left: 0px ;"><b class="extra-field-column-name">備註: </b> <span class="extra-field-value">'+obj[i].data[5]+'<span>';
                                   html  +='</div> <div class="extra-field" style="background-color: ; color: ; font-size: 14px; padding-left: 0px ;"><b class="extra-field-column-name">現貨: </b> <span class="extra-field-value">'+obj[i].data[6]+'<span>'+'</div></div>';
                                   html  +='<div style="background-color: #e9ecf0; color: #3a3a3a;; margin-right: 5px;" class="badge">'+obj[i].data[7]+'</div></div>';
                                   if(obj[i].data[2] == "立即購買")
                                   {
                                       html  +='<div class="col-xs-12 col-lg-2 mx-auto"><a target="_blank" class="product-media" style="display: flex; justify-content: center;" ><button class="btn w-100" data-toggle="modal" data-target="#myModal" onclick="ShowModal()" style="background-color: #fbbc04; color: #ffffff;"> '+obj[i].data[2]+'</button></a></div></div><hr>';
                                   }
                                   else
                                   {
                                       html  +='<div class="col-xs-12 col-lg-2 mx-auto"><a target="_blank" class="product-media" style="display: flex; justify-content: center;"><button class="btn w-100" style="background-color: #fbbc04; color: #ffffff;"> '+obj[i].data[2]+'</button></a></div></div><hr>';
                                   }

                                   var ShowHintIteamData = [];
                                        for(j=0 ; j < obj[i].data.length ; j++)
                                        {
                                            ShowHintIteamData[j] = obj[i].data[j];
                                            //alert('1');
                                        }
                                    ShowHintIteam[i] = ShowHintIteamData;
                                       
                                   }
                                   break;
                               }
                               

                           default:
                               {
                                   for (var i = 1; i < obj.length; i ++ ) 
                                   {//
                                        html  +='<div class="row justify-content-center pb-4" data-shuffle="item" data-groups="pasta"><div class="col-lg-2 mx-auto text-left"><a  class="product-media" style="display: flex; justify-content: center;"><img loading="lazy" class="lazyload " style="width:100%; max-height: 200px; object-fit: contain; object-position: center " data-src="'+obj[i].data[1]+'" alt=""></a></div>';
                                        html  += '<div class="col-xs-12  col-lg-4 mx-auto"><h3> <a style="color: #fbbc04" >' + obj[i].data[0] + '</a></h3>';//
                                        html  +='<div class="extra-fields-all"> <div class="extra-field" style="background-color: ; color: ; font-size: 14px; padding-left: 0px ;"><b class="extra-field-column-name">價格: </b> <span class="extra-field-value">'+obj[i].data[4]+ '<span>';
                                        html  +='</div> <div class="extra-field" style="background-color: ; color: ; font-size: 14px; padding-left: 0px ;"><b class="extra-field-column-name">備註: </b> <span class="extra-field-value">'+obj[i].data[5]+'<span>';
                                        html  +='</div> <div class="extra-field" style="background-color: ; color: ; font-size: 14px; padding-left: 0px ;"><b class="extra-field-column-name">現貨: </b> <span class="extra-field-value">'+obj[i].data[6]+'<span>'+'</div></div>';
                                        html  +='<div style="background-color: #e9ecf0; color: #3a3a3a;; margin-right: 5px;" class="badge">'+obj[i].data[7]+'</div></div>';
                                        
                                        if(obj[i].data[2] == "立即購買")
                                        {
                                            html  +='<div class="col-xs-12 col-lg-2 mx-auto"><a target="_blank" class="product-media" style="display: flex; justify-content: center;" ><button class="btn w-100" data-toggle="modal" data-target="#myModal" onclick="ShowModal(this)" style="background-color: #fbbc04; color: #ffffff;" id="'+obj[i].data[9]+'">'+obj[i].data[2]+'</button></a></div></div><hr>';
                                        }
                                        else
                                        {
                                            html  +='<div class="col-xs-12 col-lg-2 mx-auto"><a target="_blank" class="product-media" style="display: flex; justify-content: center;"><button class="btn w-100" style="background-color: #fbbc04; color: #ffffff;"> '+obj[i].data[2]+'</button></a></div></div><hr>';
                                        }
                                        var ShowHintIteamData = [];
                                        for(j=0 ; j < obj[i].data.length ; j++)
                                        {
                                            ShowHintIteamData[j] = obj[i].data[j];
                                            //alert('1');
                                        }
                                        ShowHintIteam[i] = ShowHintIteamData;
                                   }
                                   
                                   break;
                               }
                       }
                        document.getElementById("order_status").innerHTML=html;
                        if(obj.length==1) //只有一筆代表查不到資料
                                alert('尚未開放');
                  }

          }
    var url="https://script.google.com/macros/s/AKfycbzXyyappt2std4S753KSWBNYGsYMkjF4LIQIV8UKJuahLJ9VYP8zTSJORp1JtKj8zcs/exec";
    
        xmlhttp.open("get",url+"?uid="+encodeURIComponent(str)+"&type=load",true);
        xmlhttp.send();
    }
   
}

function choosefilters(self)
{
	var filtersarr = document.getElementsByName(self.name);
	if(self.name == 'filters')
	{
		var other_1 = document.getElementsByName('filters-arms');
		for(i=0 ; i<other_1.length ; i++)
		{
			other_1[i].className = 'nav-link';
		}

		var other_2 = document.getElementsByName('filters-armor');

		for(i=0 ; i<other_1.length ; i++)
		{
			other_2[i].className = 'nav-link';
		}
	}

	for(i=0 ; i<filtersarr.length ; i++)
	{
		filtersarr[i].className = 'nav-link';
	}
	self.className ='nav-link active';
}

function EenterWeb()
{
	var xmlhttp;
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else
		{// code for IE6, IE5
			mlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		
	var url="https://script.google.com/macros/s/AKfycbzXyyappt2std4S753KSWBNYGsYMkjF4LIQIV8UKJuahLJ9VYP8zTSJORp1JtKj8zcs/exec";
		 
	xmlhttp.open("get",url+"?type=EnterWeb",true);
	xmlhttp.send();
}


function ShowModal(btn)
{
    //document.getElementById('intocart-title').innerHTML='超級大漢堡';
    var BtnId = btn.id;
    
}

var sidecanvas;
function openNav() {
    if(sidecanvas)
    {
        document.getElementById("leftcanvas").style.width = "0";
        document.getElementById("maincanvas").style.marginLeft= "0";
        document.getElementById("maincanvas2").style.marginLeft= "0";
        sidecanvas = false;
    }
    else
    {
        if(IsMoible)
        {
            document.getElementById("leftcanvas").style.width = "50%";
        // document.getElementById("maincanvas").style.marginLeft = "100%";
        // document.getElementById("maincanvas2").style.marginLeft = "100%";
        }
        else
        {
            document.getElementById("leftcanvas").style.width = "12%";
            document.getElementById("maincanvas").style.marginLeft = "12%";
            document.getElementById("maincanvas2").style.marginLeft = "12%";
        }
        sidecanvas = true ;
    }
    
  }
  
  function closeNav() {
    document.getElementById("leftcanvas").style.width = "0";
    document.getElementById("maincanvas").style.marginLeft= "0";
    document.getElementById("maincanvas2").style.marginLeft= "0";
  }

  $(function () {
    var $win = $(window);
    var $backToTop = $('.js-back-to-top');
    // 當用戶滾動到離頂部100像素時，展示回到頂部按鈕
    
    $win.scroll(function () {
    if ($win.scrollTop() > 100) {
    $backToTop.show();
    } else {
    $backToTop.hide();
    }
    });
    
    // 當用戶點擊按鈕時，通過動畫效果返回頭部
    
    $backToTop.click(function () {
    $('html, body').animate({scrollTop: 0}, 200);
    });
    });

    function adjustModalTop(event) {
        var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
        
        if (typeof event.data == 'object' && event.data.call=='sendValue' 
            && ((typeof disableModalScroll != 'undefined' && !disableModalScroll) || $('.modal:visible').length == 0)) {
            var scrollOffset = event.data.value;
            if (typeof modalOffset != 'undefined') scrollOffset += modalOffset;

            $('.modal-content').css('marginTop', scrollOffset);
        }
    }
    window.addEventListener('message', adjustModalTop, false);

    function mobile()
    {
        try{
        document.createEvent("TouchEvent");
        return true;
        } catch(e) {
        return false;
        }
        }
        if(mobile())
        {
            IsMoible = true;
        }
        else{
            IsMoible = false;
    }
