'use strict'
let title = document.createElement('title');
title.innerHTML = 'Домашняя работа №7. Работа с DOM и DOM';

let metaUTF8 = document.createElement('meta');
metaUTF8.setAttribute('charset', 'UTF-8');

document.head.appendChild(title);
document.head.appendChild(metaUTF8);

let html = document.querySelector('html');
html.setAttribute('lang', 'en');

let style = document.createElement('style')
document.head.append(style)
style.innerHTML =
    `.div1{
        display: flex; 
        flex-direction: column; 
        margin-left: auto; 
        margin-right: auto; 
        align-items: center; 
        margin-bottom: 55.5px;
        background: #FFFFFF;
    }
    .h1 {
        font-family: Arvo; 
        font-size: 36px; 
        font-weight: 400; 
        line-height: 48px; 
        letter-spacing: 0px;
    }
    .p1{
        font-family: OpenSans; 
        font-size: 14px; 
        line-height: 26px; 
        color: #9FA3A7;
    }
    .divOver {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .divOver1{
        padding-top: 80,5px;
        width: 400px;
        height: 479px;
        left: 0.5px;
        top: 0.5px;
        display: flex;
        flex-direction: column; 
        align-items: center;
        // justify-content: space-around;
        border: 1px solid #E8E9ED;
    }
    .divOver11{
        padding-top: 80.5px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;

        display: flex;
        align-items: flex-end;
        text-align: center;
        letter-spacing: 2.4px;

        color: #9FA3A7;
    }
    .divOver12{
        padding-top: 19px;

        width: 210px;
        height: 92px;
        left: 95px;
        top: 115px;

        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 46px;
        /* or 128% */

        display: flex;
        align-items: center;
        text-align: center;

        color: #212121;
    }
    .divOver13{
        padding-top: 25px;

        width: 210px;
        height: 44px;
        left: 95px;
        top: 232px;

        font-family: 'OpenSans';
        font-size: 12px;
        line-height: 22px;
        /* or 183% */

        display: flex;
        align-items: center;
        text-align: center;

        color: #9FA3A7;
    }
    .divOver14{
        margin-top: 64.5px;

        width: 147px;
        height: 46px;
        left: 14.5px;
        top: 8.5px;     
        border: 3px solid #FFC80A;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        flex-direction: column; 
        align-items: center;
    }
    .divOver15{
        width: 100px;
        height: 15px;
        left: 44px;
        top: 28px;
        
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */
        letter-spacing: 2.4px;
        color: #212121;
    }
    .divOver2{
        background: #8F75BE;

    }
    .whiteColor{
        color: #FFFFFF;
    }
    .yellowColor{
        color: #FFC80A;
    }`

let div1 = document.createElement('div')
document.body.append(div1)
div1.classList.add('div1')


let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
div1.append(h1);
h1.classList.add('h1')


let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing'
div1.append(p1);
p1.classList.add('p1')


let divOver = document.createElement('div')
document.body.append(divOver)
divOver.classList.add('divOver')

let divOver1 = document.createElement('div')
divOver.append(divOver1)
divOver1.classList.add('divOver1')

let divOver11 = document.createElement('div')
divOver1.append(divOver11)
divOver11.innerHTML = 'FREELANCER'
divOver11.classList.add('divOver11')

let divOver12 = document.createElement('div')
divOver1.append(divOver12)
divOver12.innerHTML = 'Initially designed to'
divOver12.classList.add('divOver12')

let divOver13 = document.createElement('div')
divOver1.append(divOver13)
divOver13.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing'
divOver13.classList.add('divOver13')

let divOver14 = document.createElement('div')
divOver1.append(divOver14)
divOver14.classList.add('divOver14')

let divOver15 = document.createElement('div')
divOver14.append(divOver15)
divOver15.innerHTML = `<a href='#'>START HERE</a>`
divOver15.classList.add('divOver15')

let divOver2 = divOver1.cloneNode(true)
divOver.append(divOver2)
divOver2.classList.add('divOver2')

divOver2.querySelector('.divOver11').innerHTML = 'STUDIO'


divOver2.querySelector('.divOver12').classList.add('whiteColor')
divOver2.querySelector('.divOver13').classList.add('whiteColor')
divOver2.querySelector('.divOver15').classList.add('whiteColor')
divOver2.querySelector('.divOver11').classList.add('yellowColor')