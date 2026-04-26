$(document).ready(function() {
					
	// VARIABLES
	var isMenuVis=false;
	var journalCost=0;
	var newEntryCount=0;
	var isTextReady=false;
	var isImgReady=false;
	var isDateReady=false;
	var journalDone=false;

	var paperCost=0;
	var coverCost=0;
	var bookmarkCost=0;
	var dupeCost=0;
	var dupeCount=0;



	
	// EVENT HANDLERS
	jQuery(".mobileExpander").on("click", function(event){
		event.preventDefault()

		if (isMenuVis == false){
			jQuery(".mainMenu").css("top", "0")
			jQuery(".mobileHover").fadeIn(250)
			isMenuVis=true
		} else{
			jQuery(".mainMenu").css("top", "-70vw")
			jQuery(".mobileHover").fadeOut(500)
			isMenuVis=false
		}
	})

	jQuery(".deskMenuToggle").on("click", function(event){
		event.preventDefault()

		if (isMenuVis == false){
			jQuery(".mainMenu").css("top", "0")
			isMenuVis=true
		} else{
			jQuery(".mainMenu").css("top", "-30vw")
			isMenuVis=false
		}
	})

	jQuery(".orderButton").on("click", function(event){
		event.preventDefault()

		jQuery(".paymentSec").addClass("hidden")
		jQuery(".prePaymentSec").addClass("hidden")
		
		jQuery(".burstParent").fadeIn(250)

		jQuery([document.documentElement, document.body]).animate({
	         scrollTop: jQuery("#thanks").offset().top
	     }, 250);
	});


	jQuery(".toAdvice").on("click", function(event){
		event.preventDefault()

	    jQuery([document.documentElement, document.body]).animate({
	        scrollTop: jQuery("#adviceSec").offset().top
	    }, 2500);
	});

	jQuery(".toNew").on("click", function(event){
		event.preventDefault()

	    jQuery([document.documentElement, document.body]).animate({
	        scrollTop: jQuery("#newEntry").offset().top
	    }, 500);
	});

	jQuery(".toNew").on("click", function(event){
		event.preventDefault()

	    jQuery([document.documentElement, document.body]).animate({
	        scrollTop: jQuery("#newEntry").offset().top
	    }, 500);
	});







	jQuery(".fauxTextInput").on("click", function(event){
		event.preventDefault()

	    isTextReady=true

	    if (newEntryCount == 0){

			document.getElementById("journalling").innerHTML="Gabe and the boys hanging out before he got married. Not exactly the biggest and most expensive bachelor party ever, but we had fun. I wish he was still here so that we could do something like this again. I miss him.";	    	

	    } else if (newEntryCount == 1){
	    	
	    	document.getElementById("journalling").innerHTML="Gabe and Arianna got married in the summer. We all got to go to this cute little nature reserve on the edge of town and watch them give their vows over the course of the most wonderful few hours.";

	    } else if (newEntryCount == 2){
	    	
	    	document.getElementById("journalling").innerHTML="Gabe (behind the camera) at a picnic with his friends. This was the last time we all got to hang out as a group before we started having to be more careful as the chemo attacked his immune system.";

	    }
	});

	jQuery(".dating").on("click", function(event){
		event.preventDefault()

	    isDateReady=true

	    if (newEntryCount == 0){

			document.getElementById("calDater").innerHTML="5/31/2022";	    	

	    } else if (newEntryCount == 1){
	    	
	    	document.getElementById("calDater").innerHTML="6/24/2022";

	    } else if (newEntryCount == 2){
	    	
	    	document.getElementById("calDater").innerHTML="7/15/2023";

	    }
	});

	jQuery("#imgCreator").on("click", function(event){
		event.preventDefault()

		isImgReady=true

	    if (newEntryCount == 0){

	    	if (window.innerWidth < 768){

				jQuery(".fauxImgPreview").addClass("tenPrevImgM")
			} else {
				jQuery(".fauxImgPreview").addClass("tenPrevImgD")
	    	}

	    } else if (newEntryCount == 1){
	    	if (window.innerWidth < 768){

				jQuery(".fauxImgPreview").addClass("elevenPrevImgM")
			} else {
				jQuery(".fauxImgPreview").addClass("elevenPrevImgD")
	    	}
	    } else if (newEntryCount == 2){
	    	if (window.innerWidth < 768){

				jQuery(".fauxImgPreview").addClass("twelvePrevImgM")
			} else {
				jQuery(".fauxImgPreview").addClass("twelvePrevImgD")
	    	}
	    }
	});



	jQuery(".creator").on("click", function(event){
		event.preventDefault()

		if (journalDone==true){
				jQuery([document.documentElement, document.body]).animate({
		        scrollTop: jQuery("#toStore").offset().top
		    }, 1000);
		}

		if ((isDateReady==true) && (isImgReady==true) && (isTextReady==true) && (journalDone==false)) {

			newEntryCount++

			jQuery(".failWarning").addClass("hidden")



			if (newEntryCount == 1){

				jQuery(".story10").removeClass("hidden")

				isTextReady=false;
				isImgReady=false;
				isDateReady=false;

				jQuery(".fauxImgPreview").removeClass("tenPrevImgM")
				jQuery(".fauxImgPreview").removeClass("tenPrevImgD")

				document.getElementById("calDater").innerHTML="XX/XX/XXXX";
				document.getElementById("journalling").innerHTML="enter your memory of this day here...";

				if (window.innerWidth < 768){

					jQuery([document.documentElement, document.body]).animate({
			        scrollTop: jQuery("#story10").offset().top
			    }, 500);
				} else {
					jQuery([document.documentElement, document.body]).animate({
			        scrollTop: jQuery("#story12").offset().top
			    	}, 500);
				}

			} else if (newEntryCount == 2){

				jQuery(".story11").removeClass("hidden")

				isTextReady=false;
				isImgReady=false;
				isDateReady=false;

				jQuery(".fauxImgPreview").removeClass("elevenPrevImgM")
				jQuery(".fauxImgPreview").removeClass("elevenPrevImgD")

				document.getElementById("calDater").innerHTML="XX/XX/XXXX";
				document.getElementById("journalling").innerHTML="enter your memory of this day here...";

				jQuery([document.documentElement, document.body]).animate({
		        scrollTop: jQuery("#story11").offset().top
		    }, 500);

			} else if (newEntryCount == 3){

				jQuery(".story12").removeClass("hidden")

				isTextReady=false;
				isImgReady=false;
				isDateReady=false;
				journalDone=true

				jQuery(".fauxImgPreview").removeClass("twelvePrevImgM")
				jQuery(".fauxImgPreview").removeClass("twelvePrevImgD")

				document.getElementById("calDater").innerHTML="XX/XX/XXXX";
				document.getElementById("journalling").innerHTML="enter your memory of this day here...";

				if (window.innerWidth < 768){

					jQuery([document.documentElement, document.body]).animate({
			        scrollTop: jQuery("#story12").offset().top
			    }, 500);
				} else {
					jQuery([document.documentElement, document.body]).animate({
			        scrollTop: jQuery("#story10").offset().top
			    	}, 500);
				}

			}

			} else {
				jQuery(".failWarning").removeClass("hidden")

				
			}

	    
	});





	jQuery(".toCustom").on("click", function(event){
		event.preventDefault()

	    jQuery([document.documentElement, document.body]).animate({
	        scrollTop: jQuery("#customizer").offset().top
	    }, 250);
	});

	jQuery(".footerButton").on("click", function(event){
		event.preventDefault()


		jQuery([document.documentElement, document.body]).animate({
	         scrollTop: jQuery("#hero").offset().top
	     }, 4000);
	})

	jQuery(".toCredit").on("click", function(event){
		event.preventDefault()

	    jQuery([document.documentElement, document.body]).animate({
	        scrollTop: jQuery("#paymentSec").offset().top
	    }, 250);
	});








	jQuery(".switchButt1").on("click", function(event){
		event.preventDefault()

		jQuery(".denialSel").addClass("helpSelection")

		if (jQuery(".denialSel").css("opacity") == "1"){
			jQuery(".denialSel").css("opacity", "0")
			jQuery(".denialSel").removeClass("selectionPos");
			jQuery(".denialSel").removeClass("selectorTwo")
			jQuery(".denialSel").removeClass("selectorOne")
			jQuery(".denialSel").removeClass("helpSelection")
			textChanger()
		} else {
			complicatedSelector()
			textChanger()
		}


	});

	jQuery(".switchButt2").on("click", function(event){
		event.preventDefault()

		jQuery(".bargainingSel").addClass("helpSelection")

		if (jQuery(".bargainingSel").css("opacity") == "1") {
			jQuery(".bargainingSel").css("opacity", "0")
			jQuery(".bargainingSel").removeClass("selectionPos");
			jQuery(".bargainingSel").removeClass("selectorTwo")
			jQuery(".bargainingSel").removeClass("selectorOne")
			jQuery(".bargainingSel").removeClass("helpSelection")
			textChanger()
		} else {
			complicatedSelector()
			textChanger()
		}


		
	});

	jQuery(".switchButt3").on("click", function(event){
		event.preventDefault()

		jQuery(".angerSel").addClass("helpSelection")

		if (jQuery(".angerSel").css("opacity") == "1") {
			jQuery(".angerSel").css("opacity", "0")
			jQuery(".angerSel").removeClass("selectionPos");
			jQuery(".angerSel").removeClass("selectorTwo")
			jQuery(".angerSel").removeClass("selectorOne")
			jQuery(".angerSel").removeClass("helpSelection")
			textChanger()
		} else {
			complicatedSelector()
			textChanger()
		}
	});

	jQuery(".switchButt4").on("click", function(event){
		event.preventDefault()

		jQuery(".depressionSel").addClass("helpSelection")

		if (jQuery(".depressionSel").css("opacity") == "1"){
			jQuery(".depressionSel").css("opacity", "0")
			jQuery(".depressionSel").removeClass("selectionPos");
			jQuery(".depressionSel").removeClass("selectorTwo")
			jQuery(".depressionSel").removeClass("selectorOne")
			jQuery(".depressionSel").removeClass("helpSelection")
			textChanger()
		} else {
			complicatedSelector()
			textChanger()
		}
		
	});





	jQuery(".fauxSubmitter").on("click", function(event){
		event.preventDefault()

	    $('input[name="firstN"]').val("first name");
	    $('input[name="lastN"]').val("last name");
	    $('input[name="emailCollab"]').val("email");

	    jQuery(".emailNotif").removeClass("hidden")
	});











	jQuery(".paper1").on("click", function(event){
		event.preventDefault()

		coverCost=7

		costUpdate()

	    jQuery(".paper1Indicator").removeClass("darkBrownBG");
	    jQuery(".paper1Indicator").addClass("darkOrangeBG");


	    jQuery(".paper2Indicator").addClass("darkBrownBG");
	    jQuery(".paper2Indicator").removeClass("darkOrangeBG");

	});

	jQuery(".paper2").on("click", function(event){
		event.preventDefault()

		coverCost=5

		costUpdate()

	    jQuery(".paper2Indicator").removeClass("darkBrownBG");
	    jQuery(".paper2Indicator").addClass("darkOrangeBG");


	    jQuery(".paper1Indicator").addClass("darkBrownBG");
	    jQuery(".paper1Indicator").removeClass("darkOrangeBG");

	});




	jQuery(".paperInt1").on("click", function(event){
		event.preventDefault()

		paperCost=5

		costUpdate()

	    jQuery(".paperInt1Indicator").removeClass("darkBrownBG");
	    jQuery(".paperInt1Indicator").addClass("darkOrangeBG");

	    jQuery(".paperInt2Indicator").addClass("darkBrownBG");
	    jQuery(".paperInt2Indicator").removeClass("darkOrangeBG");
	    jQuery(".paperInt3Indicator").addClass("darkBrownBG");
	    jQuery(".paperInt3Indicator").removeClass("darkOrangeBG");

	});

	jQuery(".paperInt2").on("click", function(event){
		event.preventDefault()

		paperCost=8

		costUpdate()

	    jQuery(".paperInt2Indicator").removeClass("darkBrownBG");
	    jQuery(".paperInt2Indicator").addClass("darkOrangeBG");

	    jQuery(".paperInt1Indicator").addClass("darkBrownBG");
	    jQuery(".paperInt1Indicator").removeClass("darkOrangeBG");
	    jQuery(".paperInt3Indicator").addClass("darkBrownBG");
	    jQuery(".paperInt3Indicator").removeClass("darkOrangeBG");

	});

	jQuery(".paperInt3").on("click", function(event){
		event.preventDefault()

		paperCost=10

		costUpdate()

	    jQuery(".paperInt3Indicator").removeClass("darkBrownBG");
	    jQuery(".paperInt3Indicator").addClass("darkOrangeBG");

	    jQuery(".paperInt1Indicator").addClass("darkBrownBG");
	    jQuery(".paperInt1Indicator").removeClass("darkOrangeBG");
	    jQuery(".paperInt2Indicator").addClass("darkBrownBG");
	    jQuery(".paperInt2Indicator").removeClass("darkOrangeBG");

	});


	jQuery(".bookmark1").on("click", function(event){
		event.preventDefault()

		bookmarkCost=2

		costUpdate()

	    jQuery(".bookmark1Indicator").removeClass("darkBrownBG");
	    jQuery(".bookmark1Indicator").addClass("darkOrangeBG");


	    jQuery(".bookmark2Indicator").addClass("darkBrownBG");
	    jQuery(".bookmark2Indicator").removeClass("darkOrangeBG");

	});

	jQuery(".bookmark2").on("click", function(event){
		event.preventDefault()

		bookmarkCost=3

		costUpdate()

	    jQuery(".bookmark2Indicator").removeClass("darkBrownBG");
	    jQuery(".bookmark2Indicator").addClass("darkOrangeBG");


	    jQuery(".bookmark1Indicator").addClass("darkBrownBG");
	    jQuery(".bookmark1Indicator").removeClass("darkOrangeBG");

	});




	jQuery(".minuser").on("click", function(event){
		event.preventDefault()

		if (dupeCount > 0){

			dupeCount = dupeCount - 1;

			dupeCost = dupeCost - 9;

			document.getElementById("counter").innerHTML="" + dupeCount + "";

			document.getElementById("fauxNum").innerHTML="number: " + dupeCount;

			costUpdate()

		}

	});


	jQuery(".plusser").on("click", function(event){
		event.preventDefault()

		dupeCount = dupeCount + 1;

		dupeCost = dupeCost + 9;

		document.getElementById("counter").innerHTML="" + dupeCount + "";

		document.getElementById("fauxNum").innerHTML="number: " + dupeCount;

		costUpdate()

	});


	jQuery(".ynShipping").on("click", function(event){
		event.preventDefault()

	    if (jQuery(".shippingIndic").hasClass("creamBG")){
	    	jQuery(".shippingIndic").addClass("medOrangeBG")
	    	jQuery(".shippingIndic").removeClass("creamBG")

	    	jQuery(".shipHide").fadeOut(250)
	    } else {
	    	jQuery(".shipHide").fadeIn(750)

	    	jQuery(".shippingIndic").addClass("creamBG")
	    	jQuery(".shippingIndic").removeClass("medOrangeBG")
	    }


	});





















	window.onload = closeMenu;
	window.onresize = closeMenu;


	





















	// FUNCTIONS

	function costUpdate(){
		journalCost= (paperCost + coverCost + bookmarkCost + dupeCost);
		document.getElementById("fauxMoney").innerHTML="price: $" + journalCost;
	}




	function closeMenu() {
  		if (window.innerWidth < 768){
  			jQuery(".mainMenu").css("top", "-70vw")
			jQuery(".mobileHover").fadeOut(500)
  			isMenuVis=false

  			if(document.getElementById("heroTitle").innerHTML=="welcome, John Doe!"){
  				jQuery("#story4").addClass("story4")
	  			jQuery("#story4").removeClass("story6")

	  			jQuery("#story6").addClass("story6")
	  			jQuery("#story6").removeClass("story4")

	  			jQuery("#story10").addClass("story10")
	  			jQuery("#story10").removeClass("story12")

	  			jQuery("#story12").addClass("story12")
	  			jQuery("#story12").removeClass("story10")

	  			document.getElementById("dateDateM").innerHTML="5/18/2017";
	  			document.getElementById("dateTextM").innerHTML="My and Gabriel's first date. The weather was perfect and it...";

	  			document.getElementById("dateDateD").innerHTML="7/20/2015";
	  			document.getElementById("dateTextD").innerHTML="Not sure of the exact date, but we found this cute pic of...";


	  			document.getElementById("bachPartyDateM").innerHTML="5/31/2022";
	  			document.getElementById("bachPartyDescripM").innerHTML="Gabe and the boys hanging out before...";

	  			document.getElementById("bachPartyDateD").innerHTML="7/15/2023";
	  			document.getElementById("bachPartyDescripD").innerHTML="Gabe (behind the camera) at a picnic with his friends...";

	  			if (newEntryCount==0){
					
				} else if(newEntryCount<=2){
					jQuery("#story10").removeClass("hidden")
	  				jQuery("#story12").addClass("hidden")
				}
  			}
  			
  		} else{
  			jQuery(".mainMenu").css("top", "-30vw")
			isMenuVis=false

			if(document.getElementById("heroTitle").innerHTML=="welcome, John Doe!"){
				jQuery("#story4").addClass("story6")
	  			jQuery("#story6").removeClass("story4")

	  			jQuery("#story6").addClass("story4")
	  			jQuery("#story6").removeClass("story6")

	  			jQuery("#story10").addClass("story12")
	  			jQuery("#story10").removeClass("story10")

	  			jQuery("#story12").addClass("story10")
	  			jQuery("#story12").removeClass("story12")

	  			document.getElementById("dateDateD").innerHTML="5/18/2017";
	  			document.getElementById("dateTextD").innerHTML="My and Gabriel's first date. The weather was perfect and it...";

	  			document.getElementById("dateDateM").innerHTML="7/20/2015";
	  			document.getElementById("dateTextM").innerHTML="Not sure of the exact date, but we found this cute pic of...";

	  			document.getElementById("bachPartyDateM").innerHTML="7/15/2023";
	  			document.getElementById("bachPartyDescripM").innerHTML="Gabe (behind the camera) at a picnic with his friends...";

	  			document.getElementById("bachPartyDateD").innerHTML="5/31/2022";
	  			document.getElementById("bachPartyDescripD").innerHTML="Gabe and the boys hanging out before the wedding...";

	  			if (newEntryCount==0){
					
				} else if (newEntryCount<=2){
					jQuery("#story12").removeClass("hidden")
	  				jQuery("#story10").addClass("hidden")
				}
	  		}
  	}
	}

	function complicatedSelector(){

		if (jQuery(".selected").hasClass("selectorTwo")){

			jQuery(".selectorTwo").css("opacity", "0");

			jQuery(".selectorTwo").removeClass("selectionPos");

			jQuery(".selected").removeClass("selectorTwo");

			jQuery(".selectorOne").addClass("selectorTwo");

			jQuery(".selectorTwo").removeClass("selectorOne");

			jQuery(".helpSelection").addClass("selectorOne");

			jQuery(".helpSelection").addClass("selectionPos");

			jQuery(".selectorOne").removeClass("helpSelection");

			jQuery(".selectorOne").css("opacity", "1");


		} else if (jQuery(".selected").hasClass("selectorOne")){
			
			jQuery(".selectorOne").addClass("selectorTwo");

			jQuery(".selectorTwo").removeClass("selectorOne");

			jQuery(".helpSelection").addClass("selectorOne");

			jQuery(".helpSelection").addClass("selectionPos");

			jQuery(".selectorOne").removeClass("helpSelection");

			jQuery(".selectorOne").css("opacity", "1");
		} else {

			jQuery(".helpSelection").addClass("selectorOne");

			jQuery(".helpSelection").addClass("selectionPos");

			jQuery(".selectorOne").removeClass("helpSelection");

			jQuery(".selectorOne").css("opacity", "1");
		}

	}

	function textChanger(){
		jQuery(".switchingHeader").fadeOut(250, function(){
			if (jQuery(".depressionSel").hasClass("selectionPos")){
				if (jQuery(".angerSel").hasClass("selectionPos")){
					document.getElementById("switchingHeader").innerHTML="anger and depression";
				} else if (jQuery(".bargainingSel").hasClass("selectionPos")){
					document.getElementById("switchingHeader").innerHTML="bargaining and depression";
				} else if (jQuery(".denialSel").hasClass("selectionPos")){
					document.getElementById("switchingHeader").innerHTML="denial and depression";
				} else{
					document.getElementById("switchingHeader").innerHTML="depression";
				}
			} else if (jQuery(".angerSel").hasClass("selectionPos")){
				if (jQuery(".bargainingSel").hasClass("selectionPos")){
					document.getElementById("switchingHeader").innerHTML="bargaining and anger";
				} else if (jQuery(".denialSel").hasClass("selectionPos")){
					document.getElementById("switchingHeader").innerHTML="denial and anger";
				} else{
					document.getElementById("switchingHeader").innerHTML="anger";
				}
			} else if (jQuery(".bargainingSel").hasClass("selectionPos")) {
				if (jQuery(".denialSel").hasClass("selectionPos")){
					document.getElementById("switchingHeader").innerHTML="denial and bargaining";
				} else{
					document.getElementById("switchingHeader").innerHTML="bargaining";
				}
			} else if (jQuery(".denialSel").hasClass("selectionPos")){
				document.getElementById("switchingHeader").innerHTML="denial";
			} else{
				document.getElementById("switchingHeader").innerHTML="get help with grief";
			}
		})

		jQuery(".switchingSub").fadeOut(250, function(){

			if ((jQuery(".selected").hasClass("selectorOne")) || (jQuery(".selected").hasClass("selectorTwo"))){
				document.getElementById("switchingSub").innerHTML="control your experiences";
			} else {
				document.getElementById("switchingSub").innerHTML="select your experiences";
			}
		})

		jQuery(".switchAdvice").fadeOut(250, function(){
			if (jQuery(".depressionSel").hasClass("selectionPos")){
				if (jQuery(".angerSel").hasClass("selectionPos")){
					document.getElementById("switchAdvice").innerHTML="The combination of the anger and depression phases tends to be extremely emotional and messy. However, that does not mean you should suppress any of those feelings, as they will need to be felt in order to start healing in a healthy manner.<br> <br> Allow yourself to feel the loss, but if you tend to lash out, it may be best to do so in private. Give yourself some time to process, but avoid wallowing in the feeling for too long. Generally, try to avoid staying on one train of thought for more than half an hour.<br><br> If you feel yourself starting to spiral, it might be helpful to play a relaxing game or watch something you know brings you joy.";
				} else if (jQuery(".bargainingSel").hasClass("selectionPos")){
					document.getElementById("switchAdvice").innerHTML="When dealing with bargaining and depression at the same time, it may feel like trying to hold on to your last strand of hope. You are likely quite a ways into the grieving process and are starting to come to terms with the truth of what happened. <br> <br> You probably are not fully ready to deal with the full impact of what has happened, though you may be getting close. Be gentle to yourself and take some time to rest. Holding on to that strand of hope for just a bit longer won't hurt.<br><br> Try to engage with a hobby. Activities such as knitting or baking can take your mind off things while not being emotionally taxing.";
				} else if (jQuery(".denialSel").hasClass("selectionPos")){
					document.getElementById("switchAdvice").innerHTML="If you are dealing with both denial and depression, you are likely in the early stages of starting to accept what has happened. You may either be rapidly switching between these phases, actively trying to pretend your loss has not happened, or something else. <br> <br> This is a very mentally strenuous combination, so make sure you are getting support from friends and family. It might also be advisable to take a few days off while you are dealing with this. <br> <br> Though eating some comfort food and watching television may be a stereotype, it does work. Now may be the time to try it.";
				} else{
					document.getElementById("switchAdvice").innerHTML="Depression is usually one of the longest stages of grief. Typically, it comes once you are processing that the loss has happened, but struggle to move forward from it. <br> <br> During this phase, the loss often feels crushing and like nothing you do will ever make it better. Fortunately, this is not the case, but growing around that grief usually takes a very long time. The feeling will never fully dissipate, but as your life continues to expand, it will become less frequent over time. <br><br>Talk to someone you know to help get it off your chest. If telling another person is too much, try talking to a pet or writing it down somewhere.";
				}
			} else if (jQuery(".angerSel").hasClass("selectionPos")){
				if (jQuery(".bargainingSel").hasClass("selectionPos")){
					document.getElementById("switchAdvice").innerHTML="The combination of anger and bargaining is likely rooted in a feeling of helplessness and regret that things did not go the best way they could have gone. This combination is highly emotional and is going to require work to get through.<br><br> At this stage, it is important to remember that it is no one's fault that this loss happened. Everyone will have to go eventually, and no amount of trying to change how the world works will fix that. <br><br> Take a moment to breathe. Allow your emotions to wash through you without sweeping you away. Try switching rooms or going outside for a few minutes.";
				} else if (jQuery(".denialSel").hasClass("selectionPos")){
					document.getElementById("switchAdvice").innerHTML="The combination of anger and denial means that you are lashing out and need to confront reality. Stewing in this particular combination of stages for an extended period of time might cause friends and family to withdraw. <br><br> Though it may feel productive to ignore your situation and lash out at yourself and others, it is only ever going to do you harm. This may be a good time to take some personal time to think and confront your feelings. <br> <br>Avoid letting your feelings get pent up. Doing something active, such as going to the gym or just taking walks near where you live, can give you a healthy outlet.";
				} else{
					document.getElementById("switchAdvice").innerHTML="Anger is the stage in which you are likely to be angry at the world for what has happened, and it is very often a stage experienced alongside one of the others. This stage tends to be experienced the most strongly if you have experienced a sudden loss or if anger is the way in which you process difficult emotions.<br><br> This is one of the least discussed parts of the grieving process, though it is an extremely normal experience when grieving. Be aware that other people might not be very supportive of you during this phase, so professional help might be needed to get through this. <br><br> Do your best to make sure you are handling your grief in a healthy manner. Breaking objects that you are not particularly attached to or engaging in a sport can be helpful. Just make sure no one gets hurt in the process.";
				}
			} else if (jQuery(".bargainingSel").hasClass("selectionPos")) {
				if (jQuery(".denialSel").hasClass("selectionPos")){
					document.getElementById("switchAdvice").innerHTML="When the inability to fully process a loss and trying to fix what has happened combine, it means you are stuck in the past. No matter what your subconscious might be telling you, beating yourself up about what could have been will not change what has happened. <br><br> If you are currently dealing with both denial and bargaining, try breaking your routine and visiting new places to make new memories and shake off old habits. Engaging with your community in some way will also help you introduce some randomness and joy to your life. <br><br> If you get stuck here for an extended period of time, therapy is likely to be very helpful in processing everything that has happened.";
				} else{
					document.getElementById("switchAdvice").innerHTML="The stage in which you start to wonder if anything could have been done to prevent their death or wonder if there is some way to bring them back. <br> <br> During this stage, it is important to understand that punishing yourself in the present will not do anything to bring them back. Allow yourself to feel this stage, but do not let it consume you. Bargaining will fade only with time and acceptance.<br><br>Allow yourself to think of a future grounded in reality. What are you looking forward to? If not, try making plans so you consistently do.";
				}
			} else if (jQuery(".denialSel").hasClass("selectionPos")){
				document.getElementById("switchAdvice").innerHTML="At this stage, the loss probably still doesn't feel quite real. Most likely, your loss has occurred recently, but this stage can linger for longer than people would expect. <br><br> Right now, your brain is trying to protect you from the full impact of the loss. Be aware that this stage of grief will not last forever, and you may be overcome suddenly by it as your brain confronts reality. <br><br> Try making plans and gathering comfort items for when you need them in the future. Even if you never end up needing them, it never hurts to do something fun in celebration of the life your loved one lived.";
			} else{
				document.getElementById("switchAdvice").innerHTML="Every grieving process is different, but there does tend to be common experiences and issues that we may be able to help you with. The stages of grief, though not fully accurate to the complicated and nonlinear process of dealing with grief, may allow us to give you that help. <br> <br> Clicking on the respective buttons for each stage will show you relevant advice if you are primarily dealing with any given stage. Since these stages rarely ever happen in order and often overlap, we have prepared for any combination of two of these stages to be combined. <br> <br> Feel free to come back and consult this page again later if your situation happens to change.";
			}
		})

		$(".switchingHeader").fadeIn(1000)
		$(".switchingSub").fadeIn(1000)
		$(".switchAdvice").fadeIn(1000)
	}
	
	
	// INITIALIZATION
	
	closeMenu();
});