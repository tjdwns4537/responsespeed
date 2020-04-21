var A = document.querySelector('#start')
var 시작시간;
var 끝시간;
var 기록 = [];
var 타임;
A.addEventListener('click',function(){
    if(A.classList.contains('bb')){
        A.classList.add('wait')
        A.classList.remove('bb')
        A.textContent = "준비해주세요"
        타임 = setTimeout(function(){
            시작시간 = new Date()
            A.click();
        },Math.floor(Math.random()*1000)+2000);        
    }else if(A.classList.contains('wait')){
        if(!시작시간){
           clearTimeout(타임)
           A.classList.add('wait')
           A.classList.remove('bb')
           A.textContent = '성급하시군요!'
           }else{
                A.classList.add('go')
                A.classList.remove('wait')    
                A.textContent = '클릭하세요'
           }
    }else if(A.classList.contains('go')){
        A.classList.add('bb');
        A.classList.remove('go')
        A.textContent= '처음으로'
        끝시간 = new Date();
        기록.push(끝시간-시작시간)
        console.log('반응속도',끝시간-시작시간,'ms',기록)
        시작시간 = null;
        끝시간 = null;        
    }
    
})


