/**
* Main JavaScript file for soccerDemo App
* 
* @package	SoccerDemo
* @author	Cristian Gómez Alvarez <cristianpark@gmail.com>
* @date		June 15/2013
*/

var settings;
var orientation;
var playerPosition;
var playerNumber;

//By default orientation is portrait
orientation='portrait';

/**
 * Function to get players by position
 */
function getPlayers(position){
	var playersPos=new Array();
	var inPosition=0;
	var positions="";

	//Iterate over players with the position
	for(p in players)
	{
		positions=players[p]["positions"];
		inPosition=positions.indexOf(position);
		
		//The food option is in the categoy
		if(inPosition>=0){
			playersPos.push(players[p]);
		}
	}//End for (iterate over players)
	
	return playersPos;
}
//----------------------------------

/**
 * Function to restart stored player variables
 */
function restorePlayers(){
	//Remove the variables for players
	for(var i=1; i<=11; i++){
		removeItem("player"+i);
	}
}
//-------------------------------------------

/************************************************************************
 *********************** jQuery Functions ******************************* 
 ************************************************************************/

//jQuery main events
$(document).on("ready", eventsFirstTime);

/**
 * Function for assign events first time the app is loaded
 */
function eventsFirstTime(){
	/******** Events ************/
	$(".language").on("click", changeLanguage);
	//Pages
	$("#PGterms").on("pagebeforeshow", showTerms);						//Terms page
	$("#PGformation").on("pagebeforeshow", formationButtons);			//Formation page
	$("#PGplayers").on("pagebeforeshow", showPositions);				//Players page
	$("#PGperformanceP").on("pagebeforeshow", showPerformanceP);		//Player performance page
	//Restore
	$("#HRrestore").on("click", restoreValues);							//Restore default values
	//Referee
	$(".IMlike").on("click", showPerformanceR);							//Referee performance page
	$("#SPclosePopupR").on("click", closeRefereePopup);					//Closes referee popup
	$(window).on( "orientationchange", orientationChange);			//Catch orient change event
	//-----------------------

	/******** Components ********/
	settings=getItem("settings");
	
	setDefaults();	//Determine wether default items must be set or not
	translate();	//Translate menus and pages
	//-----------------------------------
}
//---------------------------------------

/**
 * Function to save defaults values if there aren't values set
 */
function setDefaults(){
	var set=getItem("settings");	//We use settings to determine if we must save defaults values
	
	if(set==null){	//There aren't values setted
		var sets={"language":"es"};
		setItem("settings", sets);
		settings=sets;
	}//End if (set default values)
}
//--------------------------

/**
 * Restore values to its defaults
 */
function restoreValues(){
	//Unset formation
	removeItem("formation");
	
	//Restart players
	restorePlayers();
	
	//Backgrounds and styles
	$("#STformations").css("background-image", "url('lib/img/misc/soccerField.png");
}
//-------------------------------------

/**
 * Function to change language
 */
function changeLanguage(){
	var lang=$(this).attr("id")=="DVesp"?"es":"en";
	
	if(lang!=settings["language"]){
		settings["language"]=lang;
		translate();
		
		//Update settings
		removeItem("settings");
		setItem("settings", settings);
	}
}
//----------------------------------

/**
 * Function to manage orientation change
 */
function orientationChange(event){
	var pageId=$.mobile.activePage.attr('id');
	
	//If we're seeing players page, we reload it
	if(pageId=='PGplayers'){
		orientation=event.orientation;
		
		$.mobile.changePage("#PGplayers", { 
		      allowSamePageTransition : true,
		      transition              : 'none',
		      showLoadMsg             : false,
		      reloadPage              : false
		    }
  		);
	}
}
//-----------------------------------------------------

/**
 * Function to show page terms and conditions
 */
function showTerms(){
	$("#DVterms").html(terms);
	$("#DVterms").niceScroll();
	$("#HRacceptTerms").on("click", acceptTerms);
	$("#CBacceptTerms").on("change", acceptTerms);
	
	translate();	//Translate the UI
}
//----------------------------------

/**
 * Function to validate terms acceptation
 */
function acceptTerms(){
	if(!$("#CBacceptTerms").is(":checked")){
		$(document).simpledialog2({mode: 'blank',
				headerText: '',
				headerClose: true,
				blankContent: 
					"<p>"+ucfirst(settings["language"]=="es"?sentences["termsw"][0]:sentences["termsw"][1])+"</p>"+
					// NOTE: the use of rel="close" causes this button to close the dialog.
					"<a rel='close' class='BTback' data-role='button' href='#'>OK</a>"
				});
      
		$(".BTback").on("click", function(){
			$.mobile.navigate("#PGterms");
		});
		
		return false;
	}
	else{
		$.mobile.navigate("#PGmenu");
	}
}
//---------------------------------------------------

/**
 * Function to show formations buttons
 */
function formationButtons(){
	var formationsString='<table>'+
							'<tr><td>&nbsp;&nbsp;&nbsp;</td></tr>'+
							'<tr><td>&nbsp;&nbsp;&nbsp;</td></tr>';
	//Determine if there's a formation selected
	var formation=getItem("formation");
	
	for(f in formations1){
		var transform="scale(1) rotate(0deg)";
		
		if(f==formation){	//The formation is the selected
			transform="scale(1.2) rotate(365deg)";
			
			//Show formation image
			$("#STformations").css("background-image", "url('lib/img/formation/"+formations1[f]["image"]+"')");
		}
	
		formationsString+='<tr>'+
							'<td>'+
								'<div id="DVformation_'+f+'" class="ui-block-a DVbutton BTformation" style="width: 5em; transform:'+transform+';">'+formations1[f]["name"]+'</div>'+
							'</td>'+
						'</tr>';
	}
	
	formationsString+='<tr><td>&nbsp;&nbsp;&nbsp;</td>'+
					'<tr><td>&nbsp;&nbsp;&nbsp;</td></tr>';
	formationsString+='</table>';
	
	$("#DVformations").html(formationsString);
	
	//Assign click event for buttons
	$(".BTformation").on("click", showFormation);
}
//----------------------------------------

/**
 * Function to show the formation selected
 */
function showFormation(){
	var elementId=$(this).attr("id");
	var arrayId=elementId.split("_");
	var id=arrayId[1];
	
	$(".BTformation").css("transform", "scale(1) rotate(0deg)");
	$(this).css("transform", "scale(1.2) rotate(365deg)");
	
	//Show formation image
	$("#STformations").css("background-image", "url('lib/img/formation/"+formations1[id]["image"]+"')");
	
	//Save formation selected on local storage
	setItem("formation", id);
}
//----------------------------------------

/**
 * Function to show points of the position of the players
 */
function showPositions(){
	var formation=getItem("formation");
	
	//No formation selected
	if(formation==null){
		$(document).simpledialog2({mode: 'blank',
    						headerText: '',
    						headerClose: true,
    						blankContent: 
      							"<p>"+ucfirst(settings["language"]=="es"?sentences["formationw"][0]:sentences["formationw"][1])+"</p>"+
      							// NOTE: the use of rel="close" causes this button to close the dialog.
      							"<a rel='close' class='BTback' data-role='button' href='#'>OK</a>"
      						});
      
		$(".BTback").on("click", function(){
			$.mobile.navigate("#PGformation");
		});
	}
	else{	//Draw position circles
		$("#FGplayersField").css("height", ($(window).width()+20)+'px');
		$("#SPformation").html("&nbsp;&nbsp;&nbsp;"+formations1[formation]["name"]+"&nbsp;&nbsp;&nbsp;");	//Formation name
		
		//Determine device width to show the dots upper or lower
		var wwidth=$(window).width();	//Window width
		var dwidth=window.screen.width;	//Device width
		
		var topGain=0;
		var rightGain=0;
		
		//alert("wwidth: "+wwidth+"\ndwidth: "+dwidth+"\norientation: "+orientation);
		
		var formations=formations1;
		
		/**
		 * With HTC Rezound, device width is 720 and window width is 360 (half value),
		 * when landscape, dwidth is 1280 and wwidth is 640, so we'll asume that wwidth must be half or so of dwidth
		 * On some browsers, orientation is 0 (portrait) or 90 (landscape)
		 */
		//if((parseInt(wwidth)>=500 && dwidth%wwidth==0) || orientation=='landscape' || parseInt(orientation)==90){
		if(parseInt(dwidth)>=500 || orientation=='landscape' || parseInt(orientation)==90){
			//The multiplier is 1 unity for every 400 pixels
			var multiplier=dwidth/400;
			multiplier=parseInt(multiplier);
			/*
			topGain=5*multiplier;
			rightGain=3*multiplier;
			*/
			
			eval('formations=formations'+(multiplier>3?3:multiplier));
		}
		
		//Change the viewport property
        var viewport=$("head").children('meta[name="viewport"]');
		
		if(orientation=='landscape' || parseInt(orientation)==90 || parseInt(orientation)==-90 || parseInt(orientation)==270){
        	//landscape
            viewport.attr('content', 'height=device-width; width=device-height; initial-scale=0.9; maximum-scale=0.9');
        }else {
			//portrait
			viewport.attr('content', 'height=device-height; width=device-width; initial-scale=0.9; maximum-scale=0.9');
        }
        
        //Set maxHeight for soccerField image
        if($("#FGplayersField").children().css("height")!='100%'){
	        var maxHeight=$(window).height();
	        $("#FGplayersField").children().css("height", (maxHeight<300?350:maxHeight)+"px");
	    }
		
    	var positionsString='';
    	var formation=getItem("formation");
    	var goalkeeper=formations[formation]["goalkeeper"];
    	var defenders=formations[formation]["defenders"];
    	var midfielders=formations[formation]["midfielders"];
    	var forwarders=formations[formation]["forwarders"];
    	var playerPhoto='';
    	
    	//Goalkeeper
    	var player=getItem("player"+1);
    	pos=goalkeeper.split("_");
    	top=parseInt(pos[0]);
    	right=parseInt(pos[1]);
    	playerPhoto=player!=null?'<img src="lib/img/players/'+players[player]["photo"]+'" />':'';
    	positionsString+='<a href="#DVselectPlayer" style="position: absolute; top: '+top+'em; right: '+right+'em" data-rel="popup" class="HRplayer" id="gk_1">'+playerPhoto+'</a>';
    	
    	//Variables for positioning the players
    	var playerNum=2;
    	var pos=new Array();
    	var top=0;
    	var right=0;
    	
    	//Defenders
    	for(d in defenders){
    		pos=defenders[d].split("_");
    		top=parseInt(pos[0])+topGain;
    		right=parseInt(pos[1])+(rightGain>0?rightGain+2:0);
    		//Get player photo (if a player is selected on this position)
    		player=getItem("player"+playerNum);
    		playerPhoto=player!=null?'<img src="lib/img/players/'+players[player]["photo"]+'" />':'';
    		
			positionsString+='<a href="#DVselectPlayer" style="position: absolute; top:'+top+'em; right:'+right+'em;" data-rel="popup" class="HRplayer" id="df_'+playerNum+'">'+
							playerPhoto+
						'</a>';
			
			playerNum++;
		}//End for (defenders)
		
		//Midfielders
    	for(m in midfielders){
    		pos=midfielders[m].split("_");
    		top=parseInt(pos[0])+topGain;
    		right=parseInt(pos[1])+(rightGain>0?rightGain+5:0);
    		//Get player photo (if a player is selected on this position)
    		player=getItem("player"+playerNum);
    		playerPhoto=player!=null?'<img src="lib/img/players/'+players[player]["photo"]+'" />':'';
    		
			positionsString+='<a href="#DVselectPlayer" style="position: absolute; top:'+top+'em; right:'+right+'em;" data-rel="popup" class="HRplayer" id="mf_'+playerNum+'">'+
								playerPhoto+
							'</a>';
			playerNum++;
		}//End for (midfielders)
		
		//Forwarders
    	for(f in forwarders){
    		pos=forwarders[f].split("_");
    		top=parseInt(pos[0])+topGain;
    		right=parseInt(pos[1])+(rightGain>0?rightGain+8:0);
    		//Get player photo (if a player is selected on this position)
    		player=getItem("player"+playerNum);
    		playerPhoto=player!=null?'<img src="lib/img/players/'+players[player]["photo"]+'" />':'';
    		
			positionsString+='<a href="#DVselectPlayer" style="position: absolute; top:'+top+'em; right:'+right+'em;" data-rel="popup" class="HRplayer" id="fw_'+playerNum+'">'+
							playerPhoto+
						'</a>';
			playerNum++;
		}//End for (forwarders)
		
		$("#DVpositions").html(positionsString);
		$(".HRplayer").on("click", showPlayers);
	}
}
//----------------------------------------

/**
 * Function for show players for position
 */
function showPlayers(){
	var elementId=$(this).attr("id");
	var arrayId=elementId.split("_");
	var position=arrayId[0];
	var id=arrayId[1];
	
	var playersPos=getPlayers(position);
	var playersString='';
	
	if(playersPos.length>0){
		for(p in playersPos){
			playersString+='<div><img data-rel="back" data-role="button" class="IMplayer" id="IM'+playersPos[p]["id"]+'|'+elementId+'" src="lib/img/players/'+playersPos[p]["photo"]+'" /></div>';
		}
	}
	
	$("#DVselectPlayer").html(playersString);
	
	//Add click event on the image
	$(".IMplayer").on("click", selectPlayer);
}
//------------------------------

/**
 * Function to select a player
 */
function selectPlayer(){
	var arrayId=$(this).attr("id").split("|");
	var player=arrayId[0].replace("IM", "");
	var pointId=arrayId[1];
	var pointIdArray=pointId.split("_");
	var position=pointIdArray[0];
	var playerNum=pointIdArray[1];
	
	//Save player selection
	removeItem("player"+playerNum);
	setItem("player"+playerNum, player);
	
	//Show the photo on the formation
	$("#"+pointId).html('<img src="lib/img/players/'+players[player]["photo"]+'" />');
	
	//Close the popup
	$("#DVselectPlayer").popup("close");
}
//------------------------------------------

/**
 * Function to show players performance
 */
function showPerformanceP(){
	var noPlayers=false;

	var table='<table class="TBperformance">'+
				'<tr>'+
					'<th colspan="2"><span class="TW ucfirst">Player</span></th>'+
					'<th><span class="TW ucfirst">Performance</span></th>'+
				'</tr>';

	for(var i=1; i<=11; i++){
		var player=getItem("player"+i);
		
		if(player!=null){
			table+='<tr>'+
						'<td align="center" style="font-weight: bold">'+players[player]["positions"]+'</td>'+
						'<td>'+players[player]["name"]+'</td>'+
						'<td align="center">'+Math.floor((Math.random()*100)+1)+'%</td>'+
					'</tr>';
		}
		else{
			noPlayers=true;
		}
	}
	
	table+='</table>';
	
	var warning='<span style="font-weight:bold; right: auto; left: auto" class="TS noplayers ucfirst">text</span>';
	
	$("#STperformance").html(noPlayers?warning:table);
	
	translate();
}
//------------------------------------------

/**
 * Function to show referees performance
 */
function showPerformanceR(){
	var like=Math.floor((Math.random()*100)+1);
	var dislike=100-like;

	$("#SPrefereeLike").html(like+'%');
	$("#SPrefereeDislike").html(dislike+'%');	
}
//-----------------------------

/**
 * Function to close referee popup
 */
function closeRefereePopup(){
	//Close the popup
	$("#DVshowReferee").popup("close");
	
	$("#SPrefereeLike").html("?");
	$("#SPrefereeDislike").html("?");
}
//-----------------------------------------

/**
 * Function to translate from english to spanish and backwards
 */
function translate(){
	//Translate sentences
	$(".TS").each(function(){
		var elementClass=$(this).attr('class');
		var classes=elementClass.split(' ');
		
		//Determines the upper of the string (if applies)
		var upper='';
		if($(this).hasClass('ucfirst')){	//First letter upper
			upper='ucfirst';
		}
		else if($(this).hasClass('upper')){	//All the sentence upper
			upper='upper';
		}
		
		if($(this).html()!=''){
			$(this).html(translateSentence(classes[1], upper, settings["language"]));
		}
		else if($(this).val()!=''){
			$(this).val(translateSentence(classes[1], upper, settings["language"]));	
		}
	});
	
	//Translate words
	$(".TW").each(function(){
		//Determines the upper of the string (if applies)
		var upper='';
		if($(this).hasClass('ucfirst')){	//First letter upper
			upper='ucfirst';
		}
		else if($(this).hasClass('upper')){	//All the sentence upper
			upper='upper';
		}
		
		if($(this).html()!=''){
			$(this).html(translateWord($(this).html(), upper, settings["language"]));
		}
		else if($(this).val()!=''){
			$(this).val(translateWord($(this).val(), upper, settings["language"]));	
		}
	});
}
//---------------------------------------