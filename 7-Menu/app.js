const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 300,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 250,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 150,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 150,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 180,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 200,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 300,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 200,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 220,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 3500,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const show =document.querySelector("section")
const filters_load =document.querySelector(".buttons")
const filters_function=document.querySelectorAll(".buttons")

window.addEventListener("DOMContentLoaded",function(){
    contentLoader(menu);
    buttonloader();
}) 


function contentLoader(item){
    let display=item.map(function(array){
    return `<article class="menu-item">
                <img src="${array.img}"class="item-image" alt="" srcset="">
                <div class="item-info">
                    <header>
                        <div class="item-name"><h2>${array.title}</h2></div>
                        <div class="item-price">${array.price} Rs/-</div>
                    </header>
                    ${array.desc}
                </div>
            </article>`
    });
    display=display.join("");
    show.innerHTML=display;
}

function buttonloader(){
    // getting Number of different catagories
    // applying reduce on the array ;
    // if particular catagory alread included then ignore
    // else include
    let button= menu.reduce(function(value,item){
        if(!value.includes(item.category)){
            value.push(item.category)
        }
        return value;
        },
        ["all"]
    );

    // now we have all the unique catagories possible in button
    // using map && join get the HTML code for creating these buttons 
    const abc=button.map(function(btn){
      return `<button class="btn" data-catagory=${btn}>${btn}</button>`
    }).join("")
    // abc contains code which is added using innerHTML method
    filters_load.innerHTML=abc;
    
    // creating buttons functionality over

    // creating filter functionality
    // btn is the class for all buttons , added in queryselectorall
    // read through foreach method
    const filter=document.querySelectorAll(".btn")
    filter.forEach(function(item){
      item.addEventListener("click",function(e){
        // adding call to the selected button so it is highlighted
        item.classList.add("selected")
        filter.forEach(function(A){
            if(A!=item){
              A.classList.remove("selected")
            }
        })
        // found now contains the catagory name of selected button ; hence we have to filter according to the value of found
        const found =e.currentTarget.dataset.catagory;
        // going through all items in menu , comparing its catagory with found , if both match , add in from_menu
        const from_menu=menu.filter(function(i){
          if(i.category == found){
            return i
          }
        });
        // so from_menu contains filtered list 
        // if catagory is all , load everything
        if(found=="all"){
          contentLoader(menu);
        }
        // else load items from found_menu only
        else{
          contentLoader(from_menu)
        }
      })
    })
}