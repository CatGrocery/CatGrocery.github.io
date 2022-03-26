var ShowHintIteam = [];
var IsMoible;
var NowCanva;
var NowBuyFilters;


function showHint(str)
{

    if(NowBuyFilters != str)
    {
        ShowHintIteam = [];
        if(str == "pet")
        {
    
        }
        else
        {
            var box = document.getElementsByClassName('nav-link');
            for(i=0 ; i<box.length ; i++ )
            {
                box[i].style.pointerEvents = "none" ;
            } 
    
    
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
                                                        
                                var html = '';
                                
                            switch(str)
                            {
                                case('gem'):
                                {
                                for (var i = 1; i < obj.length; i ++ ) 
                                    {//
                                        html  +='<div class="row justify-content-center pb-4" data-shuffle="item" data-groups="pasta"><div class="col-lg-2 mx-auto text-left"><a  class="product-media" style="display: flex; justify-content: center;"><img loading="lazy" class="lazyload " style="width:100%; max-height: 200px; object-fit: contain; object-position: center " src="image/'+obj[i].data[1]+'" alt=""></a></div>';
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
    
                                        ShowHintIteamData = [];
                                                for(j=0 ; j < obj[i].data.length ; j++)
                                                {
                                                    ShowHintIteamData[j] = obj[i].data[j];
                                                    //alert('1');
                                                }
                                        ShowHintIteam[i] = ShowHintIteamData;
                                    }
                                    break;
                                }
                                
                                case ('sword'):
                                case ('ax'):
                                case ('bow'):
                                case ('staff'):
                                case ('spear'):
                                case ('knife'):
                                case ('boomerang'):
                                case ('helmet'):
                                case ('armor'):
                                case ('shield'):
                                case ('boots'):
                                case ('cloth'):
                                case ('robe'):
                                case ('shoe'):
                                case ('hat'):
                                    {
                                        for (var i = 1; i < obj.length; i ++ ) 
                                        {//
                                        html  +='<div class="row justify-content-center pb-4" data-shuffle="item" data-groups="pasta"><div class="col-lg-2 mx-auto text-left"><a  class="product-media" style="display: flex; justify-content: center;"><img loading="lazy" class="lazyload " style="width:100%; max-height: 200px; object-fit: contain; object-position: center " src="image/'+obj[i].data[1]+'" alt=""></a></div>';
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
    
                                         ShowHintIteamData = [];
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
                                                html  +='<div class="row justify-content-center pb-4" data-shuffle="item" data-groups="pasta"><div class="col-lg-2 mx-auto text-left"><a  class="product-media" style="display: flex; justify-content: center;"><img loading="lazy" class="lazyload " style="width:100%; max-height: 200px; object-fit: contain; object-position: center " src="image/'+obj[i].data[1]+'" alt=""></a></div>';
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
                                                ShowHintIteamData = [];
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
                                CanChoose()
                        }
                
                }
            var url="https://script.google.com/macros/s/AKfycbzXyyappt2std4S753KSWBNYGsYMkjF4LIQIV8UKJuahLJ9VYP8zTSJORp1JtKj8zcs/exec";
            
                xmlhttp.open("get",url+"?uid="+encodeURIComponent(str)+"&type=load",true);
                xmlhttp.send();
        }
        NowBuyFilters = str ;
    }

    
}


function ShowAnnouncement()
{
    if(NowCanva != 'announcement')
    {

            var randomnum =	Math.round(Math.random() * (5 - 1)) + 1;
            document.getElementById("announcement_status").innerHTML= '<img src="https://cdn.jsdelivr.net/gh/Faxey/Cat_Store/props/loading0'+randomnum+'.gif" style="display:block; margin:auto;">';
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
                                                        
                                var html = '';
                                
                                for (var i = 1; i < obj.length; i ++ ) 
                                    {
                                        html  +='<div class="w-100 jobboard-card-child" data-shuffle="item"><h6  class="card-title" style="background-color: rgb(243, 238, 232)"><a data-toggle="collapse" class="d-flex align-items-center collapsed" href="#'+obj[i].data[4]+'">';
                                        html  += '<span class="mr-5"><img loading="lazy" class="avatar avatar-s lazyloaded"  src="' + obj[i].data[6] + '" alt=""></span>';
                                        html  +='<span class="mr-auto w-60"><strong style="font-size: 20px;">'+obj[i].data[0]+ '</strong><br><br>';
                                        html  +='<div style="background-color: #e3e6eb; color: #3a3a3a;; margin-right: 5px;" class="badge">'+obj[i].data[2]+'</div></span>';
                                        html  +='<span class="jobboard-card-extra-fields-all " style="min-width: 70px"><div style="color: #3a3a3a !important; text-align: right;" >'+obj[i].data[3]+'</div></span></a></h6>';
                                        html  +='<div id="'+obj[i].data[4]+'" class="collapse" data-parent="#accordion-job" >';
                                        html  +='<div class="card-body"><p class="text-center"><p class="announcement">'+obj[i].data[1]+'</p></p></div></div></div>';
                                    }

                                document.getElementById("announcement_status").innerHTML=html;
                                if(obj.length==1) //只有一筆代表查不到資料
                                    alert('沒有公告');
                        }
                
                }
            var url="https://script.google.com/macros/s/AKfycbzXyyappt2std4S753KSWBNYGsYMkjF4LIQIV8UKJuahLJ9VYP8zTSJORp1JtKj8zcs/exec";
            
                xmlhttp.open("get",url+"?type=announcement",true);
                xmlhttp.send();
        

    }

    
}


    function CanChoose(){
        var box = document.getElementsByClassName('nav-link');
        for(i=0 ; i<box.length ; i++ )
        {
        box[i].style.pointerEvents = "auto" ;
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
            document.getElementById("leftcanvas").style.width = "180px";
            document.getElementById("maincanvas").style.marginLeft = "180px";
            document.getElementById("maincanvas2").style.marginLeft = "180px";
        }
        else
        {
            document.getElementById("leftcanvas").style.width = "180px";
            document.getElementById("maincanvas").style.marginLeft = "180px";
            document.getElementById("maincanvas2").style.marginLeft = "180px";
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

    function ClickSideNavBtn(self)
    {
        var text = self.value;
        document.getElementById('hamtext').innerHTML= text ;
    }  


    function webload()
    {
        ShowAnnouncement();
        mobile();
        showHint('料理');
        EenterWeb();

        if(IsMoible == false)
        {
            openNav();
            document.getElementById('nav-toggle').checked = true;
        }
        maincanvaChoose(document.getElementById('announcement'));
        //document.getElementById('buy').style.display= "none";

    }

    function maincanvaChoose(self)
    {
        if(NowCanva != self.id)
        {
            var showCanva = "canva-"+self.id ;
            var hideCanva = document.getElementsByClassName('maincanva') ;
            for( i=0 ; i < hideCanva.length ; i++)
            {
                hideCanva[i].style.display= "none";
            }
            document.getElementById(showCanva).style.display= "";
            NowCanva = self.id ;
            alert(NowCanva);
        }
        
    }
