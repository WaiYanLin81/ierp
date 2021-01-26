$(document).ready(function(){
    let windowHeight = $(window).height();
    $('.scrollToTop').fadeOut();
     $(window).on('load',function(){
         $('.loader').fadeOut(500,function(){// show loader
            $('.loader-container').remove();
         })
        let current =  $(this).width();
        screenWidth(current);
     });
     $(window).resize(function(){
          let currentWidth =  $(this).width();
             screenWidth(currentWidth);// for change mobile view nav style           
     });

     function screenWidth(current){
          if(current <= 567.8){
               $("#nav_section").addClass('resize');
               $("#logo-image").attr('src','img/logo1.png')
                // let h1 = 'IERP SYSTEM<br>ဆိုတာဘာလဲ ?'
                // $("#ierp-system").html(h1);
          }else{
               $("#nav_section").removeClass('resize');
               $("#logo-image").attr('src','img/logo2.png');
            //    let h1 = 'IERP SYSTEM ဆိုတာဘာလဲ ?'
            //    $("#ierp-system").html(h1);
          }
        };

          $(window).scroll(function () {
             let currentScroll = $(this).scrollTop();
             if(currentScroll >= windowHeight - 100) {
                 $('#nav_section').addClass('active');
                 $('.scrollToTop').fadeIn(500);
             }else{
                 $('#nav_section').removeClass('active');
                 $('.scrollToTop').fadeOut(500);
             }

          })

         $('.navbar-toggler').on('click',function () {
              let currentClass =  $('.navbar-collapse').hasClass('show');
              if(currentClass){
                  $('#on-off').removeClass('fa-align-right').addClass('fa-align-justify');
              }else{
                  $('#on-off').removeClass('fa-align-justify').addClass('fa-align-right');
              }
         });

         $('.next-mouse-b').on('click',function(){
             $(window).scrollTop(windowHeight - 90);
         });

         $('.show-answer').each(function(i,v){
             $(this).on('click',function(){
                 let current = $(this);
                 let currentHasClass = $(this).hasClass('display-none');
                 if(currentHasClass){
                     current.removeClass('display-none').addClass('display-block');
                     current.html(`<i class="far fa-arrow-alt-circle-up"></i>`);
                    $(`.answer-p-${i}`).removeClass('d-none');
                 }else{
                    current.removeClass('display-block').addClass('display-none');
                    current.html(`<i class="far  fa-arrow-alt-circle-down"></i>`);
                    $(`.answer-p-${i}`).addClass('d-none');
                 }
             })
         })

         $('.scrollToTop').on('click',function(){
             $(window).scrollTop(0);//scroll to top web page
         });

         $('.nav-link-scroll').each(function(i,v){
             $(this).on('click',function(){
               let current = $(this).data('id');
               let currentToScroll = $(`${current}`).offset().top;
               $(window).scrollTop(currentToScroll - 80);
             })
         });

         $('.contact-us-btn').each(function(i,v){
             $(this).on('click',function(){
                let scrollTo = $('#contact').offset().top;
                $(window).scrollTop(scrollTo-80);
             })
         })
     
})



const textController = (function(){
     return{
        ierpSystemUse:[//for business type
            {
                ierpBusinessType:'ရွှေနှင့်ကျောက်မျက် ရတနာဆိုင်',
            },
            {
                ierpBusinessType:'Mini Mart နှင့် လူသုံးကုန်ပစ္စည်းဆိုင်များ',
            },
            {
                ierpBusinessType:'ဆေးဆိုင် နှင့် ဆေးခန်း များ',
            },
            {
                ierpBusinessType:'Bakery နှင့် မုန့်ဆိုင်များ',
            },
            {
                ierpBusinessType:'ဖုန်း နှင့် လျှပ်စစ်ပစ္စည်းဆိုင်များ',
            },
            {
                ierpBusinessType:'Computer နှင့် Service လုပ်ငန်းများ',
            },
            {
                ierpBusinessType:'Fashion နှင့် အင်္ကျီဆိုင်များ',
            },
            {
                ierpBusinessType:'အိတ်နှင့် ဖိနပ်ဆိုင်များ',
            },
            {
                ierpBusinessType:'ဆောက်လုပ်ရေးပစ္စည်းဆိုင်များ',
            },
            {
                ierpBusinessType:'Spa နှင့် Beauty Saloon များ',
            },
            {
                ierpBusinessType:'လူသုံးကုန်ပစ္စည်းဆိုင်များ',
            },
            {
                ierpBusinessType:'အရောင်းနှင့်သက်ဆိုင်သော လုပ်ငန်းများ',
            },
         
            
        ],
        advanceFeature:[//for advance feature
            {
                image:'img/adv/product-management.svg',
                header:'Product Management',
                body:'ကုန်ပစ္စည်းနဲ့ဆိုင်သော အချက်အလက်များ Product နှင့် Services များသတ်မှတ်နိုင်ခြင်း',
            },
            {
                image:'img/adv/selling-price.svg',
                header:'Pricing Management',
                body:'	ရောင်းဈေးအမျိုးမျိုး Unit အမျိုးမျိုးသတ်မှတ်နိုင်ခြင်း ကုန်ပစ္စည်းလယ်ဂျာပါဝင်ပြီး တိုက်ရိုက် Print ထုတ်နိုင်ခြင်း ပစ္စည်းလက်ကျန်နှင့် ပြန်ဖြည့်ရန်လိုအပ်သောစာရင်းပါဝင်ခြင်း',
            },
            {
                image:'img/adv/user-management.svg',
                header:'User Management',
                body:'အသုံးစရိတ်နှင့် နှင့် အခြားဝင်ငွေနှင့်ဆိုင်သော အချက်များ အမျိုးအစားများခွဲခြားသတ်မှတ်နိုင်ခြင်း အသုံးစရိတ်နှင့် အခြားဝင်ငွေထွက်ငွေတို့အားထည့်သွင်းနိုင်ခြင်း',
            },
            {
                image:'img/adv/payment.svg',
                header:'Payment System',
                body:'Cash on delivery အပြင်အခြားသော KBZ Pay , CB  Pay စသည့် Payment အမျိုးမျိူးနှင့်ချိတ်ဆက်နိုင်ခြင်',
            },
            {
                image:'img/adv/backup.svg',
                header:'Data Backup',
                body:'မိမိ၏ စာရင်းဖိုင်အား လွယ်ကူစွာ Backup ပြုလုပ်နိုင်ခြင်း',
            },
            {
                image:'img/adv/system-update.svg',
                header:'System Update',
                body:'ERP Software အား software မှနေ၍ လွယ်ကူစွာ online update ပြုလုပ်နိုင်ခြင်း'
            },
            {
                image:'img/adv/unit.svg',
                header:'Unit Composition',
                body:'ကုန်ပစ္စည်းများကို Unit အလိုက်သေချာစွာ သတ်မှတ်ပေးနိုင်ခြင်း',
            },
            {
                image:'img/adv/assemble.svg',
                header:'Assemble',
                body:'Stock လက်ကျန်နှင့် လိုအပ်နေသောပစ္စည်းများအား အသေးစိတ်သိရှိနိုင်သည့် စနစ်',
            },
            {
                image:'img/adv/atribute.svg',
                header:'Attribute',
                body:'Product အမျိုးအစားအလိုက် Attribute များစွာ ထိန်းချုပ်နိုင်ခြင်း',
            },
        ],
        specialFeature:[
            {
                header:'header1',
                body:'body1',
            },
            {
                header:'header2',
                body:'body2',
            },
            {
                header:'header3',
                body:'body3',
            },
            {
                header:'header4',
                body:'body4',
            },
            {
                header:'header5',
                body:'body5',
            },
            {
                header:'header6',
                body:'body6',
            },
            {
                header:'header7',
                body:'body7',
            },
            {
                header:'header8',
                body:'body8',
            },
            {
                header:'header9',
                body:'body9',
            },
            {
                header:'header10',
                body:'body10',
            },
            {
                header:'header11',
                body:'body11',
            },
            {
                header:'header12',
                body:'body12',
            },
        ],
        pricing:[

        ],
     }
})();
const codeController = (function(){
    return{
        ierpSystemUse(){
            return{
                ierpBusinessType:document.getElementsByClassName('ierp-usuage'),
            }
        },
        advanceFeature(){
            return{
                advImage:document.getElementsByClassName('adv-image-link'),
                advheader:document.getElementsByClassName('adv-h1'),
                advBody:document.getElementsByClassName('ad-fs-text'),
            }
        },
        specialFeature(){
            return{
                specialHeader:document.getElementsByClassName('special-h4'),
                specialBody:document.getElementsByClassName('special-p')
            }
        }
    }
})()
const uiController = (function(text,code){
   return{
    ierpBusinessTypeShow(){
        let ierpBusinessTypes = code.ierpSystemUse().ierpBusinessType;
        text.ierpSystemUse.forEach(function(item,i){
            ierpBusinessTypes[i].innerHTML = item.ierpBusinessType;
        })
    },
    advanceFeatureShow(){
        let advImage = code.advanceFeature().advImage;
        let advheader = code.advanceFeature().advheader;
        let advbody= code.advanceFeature().advBody;
        text.advanceFeature.forEach(function(item,i){
            advImage[i].src = item.image;
            advheader[i].innerHTML = item.header;
            advbody[i].innerHTML = item.body;
        })
    },
    specialFeatureShow(){
        let specialHeader = code.specialFeature().specialHeader;
        let specialBody  = code.specialFeature().specialBody;
        text.specialFeature.forEach(function(item,i){
            specialHeader[i].innerHTML = item.header;
            specialBody[i].innerHTML = item.body;
        })
    }
   }
})(textController,codeController);
uiController.ierpBusinessTypeShow();
uiController.advanceFeatureShow();
// uiController.specialFeatureShow();

let carouselItem =document.getElementsByClassName('card-body-carousel');
let carouselContainer = document.getElementById('carousel-inner');
let active='';
active += `<div class="carousel-item active">${carouselItem[0].innerHTML}</div>`;
for(let i=0 ;i<carouselItem.length;i++){
    if(i==0) {
        continue;
    }
        active += `<div class="carousel-item">${carouselItem[i].innerHTML}</div>`;

        carouselContainer.innerHTML = active;


}