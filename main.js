const reviews=[
    {
        id:1,
        name:"Ms Dhomi",
        job:"Captain",
        img:"https://www.faceofnation.com/wp-content/uploads/2019/07/dhoni-makes-himself-unavailable-for-windies-tour-to-serve-his-regiment-2019-07-20.jpg",
        text:"Captain cool and one of the best wicket keeper" 
         
       
         
    },
    {
        id:2,
        name:"Yuvraj Singh",
        job:"cricketer",
        img:"https://2.bp.blogspot.com/-eB4NFDxXXxI/WDLqbtgi6fI/AAAAAAAAAW0/qj_nkYjN4pAgul9e9tysRcnj8yda7UCDwCLcB/s1600/Yuvraj%2BSingh%2BImages-hd.jpg",
        text:"left hand batsman and world cup champion 2011"
    },
    {
        id:3,
        name:"Sachin tandulkar",
        job:"cricketer",
        img:"https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2020-07/Sachin%20Tendulkar.jpg?h=920929c4&itok=Is5LHMDi",
        text:"God of cricket "
    },
    {
        id:4,
        name:" Birendra Sehwag",
        job:"cricketer",
        img:"https://th.bing.com/th/id/R.09862518d41907a85755dcca2af1a9ea?rik=URqlnS7dreVJgQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-6yYCm-YY9dg%2fT_ZNoLD08qI%2fAAAAAAAAAh4%2fnICf8m3TVCI%2fs1600%2fVirender-Sehwag-Photos-2010-4.jpg&ehk=EFs7d6GRVs%2fvviSO06dcAA2Ogq%2bGSH0Xr0VL%2fKLnv6E%3d&risl=&pid=ImgRaw&r=0",
        text:"One of the best all rounder"
    },
    {
        id:5,
        name:"Shikhar Dhawan",
        job:"crickter",
        img:"https://imagevars.gulfnews.com/2019/06/11/Shikhar-Dhawan_16b474c45ad_large.jpg",
        text:"Left hand batsman with his best perfomance"
    },
    
        {
            id:5,
            name:"Rohit sharma",
            job:"crickter",
            img:"https://cdn.lifestyleasia.com/wp-content/uploads/sites/7/2020/08/18154524/CJ_RS-OKLEY-0320_1115-1-683x1024.jpg",
            text:" Hit man"
    },
];
  
  let displayIndex=0

const currentElement=reviews[displayIndex]

   const nameElem=document.querySelector('.name')
   const imageElem=document.querySelector('#image')
   const jobElem=document.querySelector('.job')
   const textElem=document.querySelector('.text')

   const nextBtn=document.querySelector('#next')
   const prevBtn=document.querySelector('#prev')
   const randomBtn=document.querySelector('#random')


   nextBtn.addEventListener('click',displayNext) 
   prevBtn.addEventListener('click',displayPrev)
   randomBtn.addEventListener('click',displayRandom)



function displayNext(){
    if(displayIndex===reviews.length-1){
        displayIndex=0
    }else{
        displayIndex++
    }
    
    updateScreen(reviews[displayIndex])
}

function displayPrev(){
    if(displayIndex===0){
        displayIndex= reviews.length-1
    }else{
        displayIndex--
    }
    
    updateScreen(reviews[displayIndex])
}


function displayRandom(){
    
    var random =Math.floor(Math.random()*reviews.length);
    console.log(random)
    updateScreen(reviews[displayIndex])
}





function updateScreen(someText){
    nameElem.innerText= someText.name
    jobElem.innerText=  someText.job
    textElem.innerText= someText.text
    imageElem.src= someText.img
}

updateScreen(currentElement)