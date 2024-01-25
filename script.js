"use strict"

const body = document.querySelector('body');
body.style.cssText =  "margin: 0px;padding: 0px; box-sizing: border-box; background-color: #FEFBF1;"

const container = document.querySelectorAll('.container');
container.forEach(conElement => {
    conElement.style.cssText = 'max-width: 1056px; margin: 0 auto;';
});
// container.style.cssText = "max-width: 1056px; margin: 0 auto;";


//header
const menu = document.querySelector('.menu');
menu.style.cssText = "height: 61px; width: 100%;"

const navbar = document.querySelector('.navbar');
navbar.style.cssText = " display: flex; flex-direction: column; gap: 120px;"

const items = document.querySelector('.items');
items.style.cssText = "display: flex; flex-direction: row; padding: 20px 0; gap: 40px;justify-content: center;"

const item = document.querySelectorAll('.item');
item.forEach(itemElement => {
    itemElement.style.listStyle = 'none';
});
// item.style.cssText = 'list-style: none;'

const itema = document.querySelectorAll('.itema');
itema.forEach(itemaElement => {
    itemaElement.style.cssText = 'color: #703412; width: 36px; text-decoration: none; line-height: 21px; font-weight: 400;font-style: normal;font-size: 14px;';
    // console.log(itemaElement);
});
// itema.style.cssText = '';

const title = document.querySelector('.title');
title.style.cssText = 'height: 572px; flex-shrink: 0; display: flex;    flex-direction: column; gap: 21px';

const titleh6 = title.querySelector('h6');
titleh6.style.cssText = 'color: #703412; font-size: 11px; font-weight: 400;line-height: 44px; letter-spacing: 1.6px; text-transform: uppercase;';

const titleh1 = title.querySelector('h1');
titleh1.style.cssText = 'width: 848px; color: #703412; font-size: 80px; font-weight: 400; line-height: 88px;';


//section
const section = document.querySelector('section');
const mainSech4 = section.querySelector('h4');
mainSech4.style.cssText = 'width: 571px; color: #703412; font-size: 32px; font-weight: 400; line-height: 41.6px; font-family: sans-serif;';



const images1 = section.querySelectorAll('.images1');
images1.forEach(images1Element => {
    images1Element.style.cssText = 'padding-top: 194px; display: flex; justify-content: space-between;';
})

const image1 = section.querySelectorAll('.image1');
image1.forEach(image1Element => {
    image1Element.style.cssText = 'transform: translateX(-20px);';
})

const image1Img = section.querySelectorAll('img');
image1Img.forEach(image1ImgElement => {
    image1ImgElement.style.cssText = 'width: 312px; height: 310px;';
})

const imagesRow = section.querySelectorAll('.images-row')

const imageTxth3 = section.querySelectorAll('h3');
imageTxth3.forEach(imageTxth3Element => {
    imageTxth3Element.style.cssText = 'width: 283px; color: #703412; font-size: 24px; font-weight: 400; line-height: 28.8px; font-family: sans-serif;';
})

const imageTxtSpan = section.querySelectorAll('span');
imageTxtSpan.forEach(imageTxtSpanElement => {
    imageTxtSpanElement.style.cssText = 'width: 88px; color: rgba(112, 52, 18, 0.72); font-size: 12px; font-weight: 400; line-height: 18px; letter-spacing: 1.6px; text-transform: uppercase;';
})

//footer

const footer = document.querySelector('footer');

footer.style.backgroundColor = '#084935';

const footerMain = footer.querySelector('.footer-main');
footerMain.style.padding = '4rem';

const footerTitleh4 = footer.querySelector('h4');
footerTitleh4.style.cssText = 'color: #FFF; font-size: 12px; letter-spacing: 1.6px; text-transform: uppercase;';

const footerTitleh2 = footer.querySelectorAll('h2');
footerTitleh2.forEach(footerTitleh2Element => {
    footerTitleh2Element.style.cssText = 'color: #FFF; font-family: sans-serif; font-size: 30px; font-weight: 400; line-height: 38.4px;';
})

const footerLink = footer.querySelector('.footer-link');
footerLink.style.cssText = 'padding-top: 40px; display: flex; justify-content: space-between; margin-bottom: 50px;';

const linksUl = footer.querySelectorAll('ul');
linksUl.forEach(linksUlElement => {
    linksUlElement.style.listStyle = 'none';
})

const linksLi = footer.querySelectorAll('li');
linksLi.forEach(linksLiElement => {
    linksLiElement.style.paddingTop = '8px';
})

const linksA = footer.querySelectorAll('a');
linksA.forEach(linksAElement => {
    linksAElement.style.cssText = 'text-decoration: none; color: rgba(255, 255, 255, 0.72); font-family: Roboto; font-weight: 400; font-size: 16px;';
})

const footerBottomh3 = footer.querySelector('h3');
footerBottomh3.style.cssText = 'padding-top: 20px;border-top: 1px solid;color: white; font-size: 16px; font-weight: 400; line-height: 24px';