const mockData= [
  {
    id : 1,
    name: 'Shirt that never broken.',
    rate: 4.5,
    totalRates: 155,
    image: './images/Shirt.png'
  },
  {
    id : 2,
    name: 'Diaper that never dirty, 24 x 24 in.',
    rate: 3,
    totalRates: 1,
    image: './images/diaper.png'
  },
  {
    id : 3,
    name: 'Superpower medicine.',
    rate: 4,
    totalRates: 25,
    image: './images/medicine.png'
  },
  {
    id : 5,
    name: 'Shirt that never broken.',
    rate: 4.5,
    totalRates: 155,
    image: './images/Shirt.png'
  },
  {
    id : 6,
    name: 'Diaper that never dirty, 24 x 24 in.',
    rate: 3,
    totalRates: 1,
    image: './images/diaper.png'
  }
];

const listProductEle = document.querySelector(".testpage-content-product-list");


const createElementDynamic = (tagName, properties = {} , textContent ) => {
  const element = document.createElement(tagName);
  for (const key in properties) {
    if (Object.hasOwnProperty.call(properties, key)) {
      element.setAttribute(key, properties[key] );
    }
  }
  if(textContent){
    element.textContent = textContent;
  }
  return element;
}

const createRates = (id,rate, totalRates) => {
  const divRateWrapper = createElementDynamic('div',{'class': 'rate-wrapper'});
  const divRate = createElementDynamic('div',{'class': 'rate'});

  for( let i = 10; i>1 ; i--){
    const input = createElementDynamic("input", {"type": "radio", "id":`rating${i}-${id}` , "name":`rating-${id}`, "value": `${i/2}`});
    const label = createElementDynamic("label", { "for":`rating${i}-${id}`});
    if(i % 2 != 0){
      label.setAttribute('class', 'half');
    }
    if(rate == i/2){
      input.setAttribute('checked', true);
    }
    divRate.appendChild(input);
    divRate.appendChild(label);
  }
  const rateNumber= createElementDynamic("span", {'class': 'rate-number'}, `${rate} (${totalRates})`);
  divRateWrapper.appendChild(divRate);
  divRateWrapper.appendChild(rateNumber);
  return divRateWrapper;
}

const createDOMItem = ({id,name , rate , totalRates, image}) => {
  const item = document.createElement("li");
  item.classList.add('testpage-content-product-item');

  const divItemContent = createElementDynamic("div", { 'class': 'testpage-content-product-item__content' });
  
  const divItemContentUpper = createElementDynamic("div", {
    'class':'testpage-content-product-item__content__upper'
  });
  
  const imageProduct = createElementDynamic("img", {"src": image, "alt": "product image"});
  
  const hr = createElementDynamic("hr");

  const divItemContentLower = createElementDynamic("div",{
    "class" : "testpage-content-product-item__content__lower"
  });

  const button = createElementDynamic("button" , null , 'quick view');
  
  const star = createRates(id,rate , totalRates);

  const h3 = createElementDynamic("h3", {'class': "testpage-content-product-item__content__label"}, name);


  // footer
  const divItemFooter = createElementDynamic('div',{'class':'testpage-content-product-item__footer'});
  const divCheckBoxStyled = createElementDynamic('div',{'class':'checkbox-styled'});
  const inputCheckboxCompare = createElementDynamic('input', {'type': 'checkbox', 'id': `compare${id}`});
  const labelCheckboxCompare = createElementDynamic('label', {'class': 'checkbox', 'for': `compare${id}`});
  const checkMark = createElementDynamic('div',{'class': 'checkmark'});

  const labelCheckboxSave = createElementDynamic('label', {'class': 'checkbox', 'for': `save${id}`});
  const inputCheckboxSave = createElementDynamic('input', {'type': 'checkbox', 'id': `save${id}`});

  const divCheckBoxStyled2 = divCheckBoxStyled.cloneNode(true);
  divItemFooter.appendChild(divCheckBoxStyled);
  divCheckBoxStyled.appendChild(inputCheckboxCompare);
  divCheckBoxStyled.appendChild(labelCheckboxCompare);
  labelCheckboxCompare.appendChild(checkMark);
 
  const strongEleCompare = createElementDynamic('strong',null, 'Compare');
  divCheckBoxStyled.appendChild(strongEleCompare);

  divCheckBoxStyled2.appendChild(inputCheckboxSave);
  divCheckBoxStyled2.appendChild(labelCheckboxSave);
  labelCheckboxSave.appendChild(checkMark.cloneNode());
  const strongEleSave =createElementDynamic('strong',null, 'Save');
   divCheckBoxStyled2.appendChild(strongEleSave);
divItemFooter.appendChild(divCheckBoxStyled2);

  // sale
  const divSale = createElementDynamic('div' , {'class': 'testpage-content-product-item__tag'}, 'Sale') ;

  item.appendChild(divItemContent);
  item.appendChild(hr);
  divItemContent.appendChild(divItemContentUpper);
  divItemContentUpper.appendChild(imageProduct);
  divItemContent.appendChild(divItemContentLower);
  divItemContentLower.appendChild(button);
  divItemContentLower.appendChild(star)
  divItemContentLower.appendChild(h3);
  item.appendChild(divItemFooter);
  item.appendChild(divSale);
  console.log(item);


  return item;
}


mockData.forEach(product => {
  const item = createDOMItem(product);
  listProductEle.appendChild(item);
})

document.querySelector(".testpage-sidenav__close").addEventListener("click",() => {
  document.getElementById('sideNav').classList.remove("open");
});

document.querySelector(".testpage-header-bars").addEventListener("click",() => {
  document.getElementById('sideNav').classList.add("open");
});