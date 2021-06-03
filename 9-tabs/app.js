const history =`<h4>history</h4>
              <p>
                I'm baby wolf pickled schlitz try-hard normcore marfa man bun
                mumblecore vice pop-up XOXO lomo kombucha glossier bicycle
                rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard
                tilde try-hard, woke fixie banjo man bun. Small batch tumeric
                mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral
                direct trade hoodie ugh chambray, craft beer pork belly flannel
                tacos single-origin coffee art party migas plaid pop-up.
              </p>`
const vision =`<div class="vision-height">
                <h4>vision</h4>
                <p>
                    Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth
                    crucifix offal deep v hella biodiesel. Church-key listicle
                    polaroid put a bird on it chillwave palo santo enamel pin,
                    tattooed meggings franzen la croix cray. Retro yr aesthetic four
                    loko tbh helvetica air plant, neutra palo santo tofu mumblecore.
                    Hoodie bushwick pour-over jean shorts chartreuse shabby chic.
                    Roof party hammock master cleanse pop-up truffaut, bicycle
                    rights skateboard affogato readymade sustainable deep v
                    live-edge schlitz narwhal.
                </p>
                <ul>
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                </ul>
                </div>`
const goals=`<h4>goals</h4>
              <p>
                Chambray authentic truffaut, kickstarter brunch taxidermy vape
                heirloom four dollar toast raclette shoreditch church-key.
                Poutine etsy tote bag, cred fingerstache leggings cornhole
                everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk
                swag, mixtape hashtag marfa readymade direct trade man braid
                cold-pressed roof party. Small batch adaptogen coloring book
                heirloom. Letterpress food truck hammock literally hell of wolf
                beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie,
                banh mi salvia venmo photo booth quinoa chicharrones.
              </p>`


const content=document.querySelector(".section-content")
const btns=document.querySelectorAll(".buttons")
window.addEventListener("DOMContentLoaded",function(){
    content.innerHTML=history;
    document.getElementById("history").classList.toggle("selected")
})
btns.forEach(function(btn){
    btn.addEventListener("click",function(){
        if(btn.textContent == "history"){
            content.innerHTML=``;
            document.getElementById("history").classList.add("selected")
            document.getElementById("view").style.height="300px"
            document.getElementById("view").addEventListener("transitionend",function(){
                content.innerHTML=history
            })
            if(document.getElementById("vision").classList.contains("selected")){
                document.getElementById("vision").classList.remove("selected")
            }
            else if(document.getElementById("goals").classList.contains("selected")){
                document.getElementById("goals").classList.remove("selected")
            }
        }
        else if(btn.textContent == "vision"){
            content.innerHTML=``;
            document.getElementById("view").style.height="400px"
            document.getElementById("view").addEventListener("transitionend",function(){
                content.innerHTML=vision;
            })
            document.getElementById("vision").classList.add("selected")
            if(document.getElementById("history").classList.contains("selected")){
                document.getElementById("history").classList.remove("selected")
            }
            else if(document.getElementById("goals").classList.contains("selected")){
                document.getElementById("goals").classList.remove("selected")
            }
        }
        else if(btn.textContent == "goals"){
            content.innerHTML=``;
            document.getElementById("goals").classList.add("selected")
            document.getElementById("view").style.height="350px"
            document.getElementById("view").addEventListener("transitionend",function(){
                content.innerHTML=goals;
            })
            if(document.getElementById("vision").classList.contains("selected")){
                document.getElementById("vision").classList.remove("selected")
            }
            else if(document.getElementById("history").classList.contains("selected")){
                document.getElementById("history").classList.remove("selected")
            }
        }
    })
})