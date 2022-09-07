const btn = document.querySelector('#btn');  
const title = document.getElementById("title");    
const info = document.getElementById("output");
        const radioButtons = document.querySelectorAll('input[name="types"]');
        btn.addEventListener("click", () => {
            let selectedRadio;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedRadio = radioButton.value;
                    break;
                }
            }
            let ran = Math.floor(Math.random() * 6);
////////////////////////DRINKS
            if(selectedRadio == "Drinks"){
                
                title.innerHTML = `Drinks in Seattle`;
                switch (ran){
                    case 1:
                        info.innerHTML = `<image src="images/metier.webp">
                        <br>
                        <a href="https://metierbrewing.com"> Métier Brewing Company Cherry Street Tap Room </a>
                        <br>
                        Address: 2616 E Cherry St, Seattle, WA 98122
                        <br>
                        Hours: Tues-Thurs(3-9PM), Fri-Sat(1-9PM), Sun(1-7PM), Mon(closed)
                        `;
                    break;
                    case 2:
                        info.innerHTML = `<image src="images/carnelianbay.webp">
                        <br>
                        <a href="https://www.dreamlandfremont.com/"> Carnelian Bay </a>
                        <br>
                        Address: 3401 Evanston Ave N, Seattle, WA 98103
                        <br>
                        Hours: Tues-Thurs(11AM-11PM), Fri(11AM-1AM), Sat(10AM-1AM), Sun(10AM-9PM), Mon(closed)
                        `;
                    break;
                    case 3:
                        info.innerHTML = `<image src="images/botanicale.webp">
                        <br>
                        <a href="https://keap.page/yvg335/thebotanicale.html/"> The Botanicale </a>
                        <br>
                        Address: 465 N 36th St Suite C, Seattle, WA 98103
                        <br>
                        Hours: Thurs-Fri(5-9PM), Sat(1-8PM), Sun(1-5PM), Mon-Wed(closed)
                        `;
                    break;
                    case 4:
                        info.innerHTML = `<image src="images/cozynut.webp">
                        <br>
                        <a href="https://www.thecozynuttavern.com/"> The Cozy Nut Tavern </a>
                        <br>
                        Address: 123 N 85th St, Seattle, WA 98103
                        <br>
                        Hours: Mon-Thurs(4PM-12AM), Sat(2PM-2AM), Sun(2PM-12AM)
                        `;
                    break;
                    case 5:
                        info.innerHTML = `<image src="images/canon.webp">
                        <br>
                        <a href="https://www.canonseattle.com/"> Canon </a>
                        <br>
                        Address: 928 12th Ave, Seattle, WA 98122
                        <br>
                        Hours: Sun-Sat(5PM-1AM)
                        `;
                    break;
                }
                
            }
/////////////////////////EATS            
            else if(selectedRadio == "Eats"){
                title.innerHTML = `Eats in Seattle`;
                switch (ran){
                    case 1:
                        info.innerHTML = `<image src="images/orientalmart.jpeg">
                        <br>
                        <a href="https://www.pikeplacemarket.org/vendor/oriental-mart/"> Oriental Mart </a>
                        <br>
                        Address: 1506 Pike Pl #509, Seattle, WA 98101
                        <br>
                        Hours: Mon-Sat(10-4PM), Sun(10AM-3PM)
                        `;
                    break;
                    case 2:
                        info.innerHTML = `<image src="images/blotto.jpeg">
                        <br>
                        <a href="https://blottoseattle.com/"> Blotto </a>
                        <br>
                        Address: 1830 12th Ave, Seattle, WA 98122
                        <br>
                        Hours: Wed-Sat(5-9PM), Sun-Tues(closed)
                        `;
                    break;
                    case 3:
                        info.innerHTML = `<image src="images/phobac.webp">
                        <br>
                        <a href="https://www.thephobac.com/"> Pho Bac Súp Shop </a>
                        <br>
                        Address: 1240 S Jackson St, Seattle, WA 98144
                        <br>
                        Hours: Sun-Sat(10-9PM)
                        `;
                    break;
                    case 4:
                        info.innerHTML = `<image src="images/marination.jpeg">
                        <br>
                        <a href="http://marinationmobile.com/"> Marination Ma Kai  </a>
                        <br>
                        Address: 1660 Harbor Ave SW, Seattle, WA 98126
                        <br>
                        Hours: Sun(9-9PM), Mon-Thurs(11AM-9PM), Fri-Sat(9AM-10PM)
                        `;
                    break;
                    case 5:
                        info.innerHTML = `<image src="images/tonys.png">
                        <br>
                        <a href="https://www.yelp.com/biz/tonys-bakery-and-deli-seattle-2"> Tony's Bakery </a>
                        <br>
                        Address: 6020 Martin Luther King Jr Way S, Seattle, WA 98118
                        <br>
                        Hours: Sun-Mon(7AM-5:30PM)
                        `;
                    break;
                }   
            }
/////////////////////////// OUT&AROUND           
            else if(selectedRadio == "Out & Around"){
                title.innerHTML = `Out & Around Seattle`;
                switch (ran){
                    case 1:
                        info.innerHTML = `<image src="images/spaceneedle.jpeg">
                        <br>
                        <a href="https://www.spaceneedle.com/"> Space Needle </a>
                        <br>
                        Address: 400 Broad St, Seattle, WA 98109
                        <br>
                        Hours: Sun-Sat(9AM-11PM)
                        `;
                    break;
                    case 2:
                        info.innerHTML = `<image src="images/museumofpop.jpeg">
                        <br>
                        <a href="https://www.mopop.org/"> Museum of Pop Culture </a>
                        <br>
                        Address: 325 5th Ave N, Seattle, WA 98109
                        <br>
                        Hours: Thurs-Tues(10AM-5PM), Wed(closed)
                        `;
                    break;
                    case 3:
                        info.innerHTML = `<image src="images/glassgarden.jpeg">
                        <br>
                        <a href="https://www.chihulygardenandglass.com/"> Chihuly Garden and Glass </a>
                        <br>
                        Address: 305 Harrison St, Seattle, WA 98109
                        <br>
                        Hours: Sun-Sat(9AM-8PM)
                        `;
                    break;
                    case 4:
                        info.innerHTML = `<image src="images/gumwall.jpeg">
                        <br>
                        <a href="https://unexpectedproductions.org/gumwall/"> The Gum Wall  </a>
                        <br>
                        Address: 1428 Post Alley, Seattle, WA 98101
                        <br>
                        Hours: Open 24 hours
                        `;
                    break;
                    case 5:
                        info.innerHTML = `<image src="images/artmuseum.jpeg">
                        <br>
                        <a href="https://www.seattleartmuseum.org/"> Seattle Art Museum </a>
                        <br>
                        Address: 1300 1st Ave, Seattle, WA 98101
                        <br>
                        Hours: Wed-Sun(10AM-5PM), Mon-Tues(closed)
                        `;
                    break;
                }   
            }
//////////////////////////// STAYING IN            
            else if(selectedRadio == "Staying In"){
                title.innerHTML = `Staying In Tonight`;
                switch (ran){
                    case 1:
                        info.innerHTML = `<image src="images/bake.webp">
                        <br>
                        <a>Bake Something!</a>
                        <br>
                        Cookies, pies, and more! 
                        `;
                    break;
                    case 2:
                        info.innerHTML = `<image src="images/tvshowws.png">
                        <br>
                        <a>Binge Watch a TV Series!</a>
                        <br>
                        `;
                    break;
                    case 3:
                        info.innerHTML = `<image src="images/camp.webp">
                        <br>
                        <a>Indoor Camping!</a>
                        `;
                    break;
                    case 4:
                        info.innerHTML = `<image src="images/clean.webp">
                        <br>
                        <a>Clean Up!</a>
                        `;
                    break;
                    case 5:
                        info.innerHTML = `<image src="images/puzzle.jpeg">
                        <br>
                        <a>Complete a Jigsaw Puzzle!</a>
                        `;
                    break;
                }  
            }
///////////////////////////// ELSE            
            else{
                alert("Please Pick a Category");
            }
        });