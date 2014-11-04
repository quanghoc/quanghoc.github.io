/* --- EMC Common User Experience Application --- */
var ECUE = (function($) {
    var navType = ""; // left/top/accordion
    
    return {

        init : function(){
        	if(console.log){ console.log("ECUE App JS initiated"); }
		},
		
		collapseBreadcrumbs : function(){
			var crumbs = $("ol.breadcrumb");
	  		if(crumbs.length > 0){
	  			$(crumbs).addClass("collapsed");
	  		}
	  		$(".breadcrumb > .active").on("click",function(e){
	  			var oList = $(".breadcrumb");
	  			if( $(oList).hasClass("collapsed") ){
	  				$(oList).removeClass("collapsed");
	  				$(oList).addClass("expanded");
	  			} else {
	  				$(oList).addClass("collapsed");
	  				$(oList).removeClass("expanded");
	  			}
	  		});
		},
		
		setKnobPercents : function(){
			$('.knob.percent').each(function(){
				var knobVal = $(this).val();
				if(knobVal.indexOf("%")>-1){
					console.log("knob val is not a # but a %");
				} else {
					$(this).val(knobVal + '%');
					console.log("knob val IS now a #");
				}
			});
		},
		
		loadKnobs : function(){
			// set up promises for callbacks after knobs are drawn
			var dfrKnob = $.Deferred();
			dfrKnob.promise();
			
			// clear any % signs from input fields so that knobs can be drawn
			$('.knob.percent').each(function(){
				var kVal = $(this).val();
				if(kVal.indexOf("%") >= 0){
					kVal = kVal.replace("%","");
					$(this).val(kVal);
				}
			});
			
			// draw knobs
			var knobCount = 0;
			$(".knob").knob({
				draw : function () {
					knobCount++;
		            // "tron" case
		            if(this.$.data('skin') == 'tron') {
		
		                var a = this.angle(this.cv)  // Angle
		                    , sa = this.startAngle          // Previous start angle
		                    , sat = this.startAngle         // Start angle
		                    , ea                            // Previous end angle
		                    , eat = sat + a                 // End angle
		                    , r = 1;
		
		                this.g.lineWidth = this.lineWidth;
		
		                this.o.cursor
		                    && (sat = eat - 0.3)
		                    && (eat = eat + 0.3);
		
		                if (this.o.displayPrevious) {
		                    ea = this.startAngle + this.angle(this.v);
		                    this.o.cursor
		                        && (sa = ea - 0.3)
		                        && (ea = ea + 0.3);
		                    this.g.beginPath();
		                    this.g.strokeStyle = this.pColor;
		                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
		                    this.g.stroke();
		                }
		
		                this.g.beginPath();
		                this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
		                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
		                this.g.stroke();
		
		                this.g.lineWidth = 2;
		                this.g.beginPath();
		                this.g.strokeStyle = this.o.fgColor;
		                this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
		                this.g.stroke();
		                
		                return false;
		            }
		        }
			});
			
			// check after 300ms to see if all knobs have been drawn
			setTimeout(function(){
				console.log("knobs drawn = " + knobCount);
				if( knobCount === $(".knob").length ){
					dfrKnob.resolve();
				}
			},300);
			
			// if all knobs are drawn then add % signs
			$.when( dfrKnob ).done(function(){
				ECUE.setKnobPercents();
			});
			
			// on window resize, add %s back in as knobs get redrawn
			$(window).on("resize",function(){
				ECUE.setKnobPercents();
			});
			
		},
		
		setTopNav : function(){
			ECUE.navType = "top";
			
		  	$(".topRoot").on("click",function(e){
		  		var menuName = $(this).attr("data-subnav");
		  		if($(this).hasClass("open")){
		  			// toggle menu if clicked on and already open? yes
		  			if(menuName==""||menuName==undefined){
			  			// what if there is no sub nav?
			  		} else {
			  			var selMenu = document.getElementById(menuName);
			  			if($(selMenu).hasClass("open")){
			  				$(selMenu).removeClass("open");
			  				$("#ECUEtopMenuClose").hide();
			  				$(this).removeClass("open");
			  			} else {
			  				$(selMenu).addClass("open");
			  				$("#ECUEtopMenuClose").show();
			  				//$(this).addClass("open");
			  			}
			  		}
		  		} else {
		  			var currentSelection = $(".topRoot.selected");
			  		if(currentSelection.length > 0){
			  			$(currentSelection).removeClass("selected");
			  			$(currentSelection).addClass("dimSelect");
			  		}
			  		var currentTab = $(".topRoot.open");
			  		if(currentTab.length > 0){
			  			$(currentTab).removeClass("open");
			  		}
			  		var currentMenu = $(".ECUEtopMenu.open");
			  		if(currentMenu.length > 0){
			  			$(currentMenu).removeClass("open");
			  		}
			  		$(this).addClass("open");
		  			if(menuName==""||menuName==undefined){
			  			// what if there is no sub nav?
			  		} else {
			  			var newMenu = document.getElementById(menuName);
			  			$(newMenu).addClass("open");
			  			$("#ECUEtopMenuClose").show();
			  		}
		  		}
		  		e.stopImmediatePropagation();
		  		return false;
		  	});
		  	
		  	$("#ECUEtopMenuClose").on("click",function(e){
		  		var openMenu = $(".ECUEtopMenu.open");
		  		if(openMenu.length > 0){
		  			$(openMenu).removeClass("open");
		  		}
		  		var openMenuTab = $(".topRoot.open");
		  		if(openMenuTab.length > 0){
		  			$(openMenuTab).removeClass("open");
		  		}
		  		var dimmedTab = $(".topRoot.dimSelect");
		  		if(dimmedTab.length > 0){
		  			$(dimmedTab).removeClass("dimSelect");
		  			$(dimmedTab).addClass("selected");
		  		}
			  	$("#ECUEtopMenuClose").hide();
		  	});
		},
		
		setLeftNav : function(){
			ECUE.navType = "left";
			
			// $(".rootNav").tooltip();
		  	
		  	$(".rootNav").on("click",function(e){
		  		var menuName = $(this).attr("data-subnav");
		  		if($(this).hasClass("selected")){
		  			// toggle menu if clicked on and already open? yes
		  			if(menuName){ // does this have a child menu?
			  			var selMenu = document.getElementById(menuName);
			  			if($(selMenu).hasClass("open")){ // is menu open?
			  				if($('body').hasClass("wLeftNavPin")){
			  					// menu pinned, should be open, do nothing
			  				} else {
			  					// toggle close
			  					$(selMenu).removeClass("open");
			  					$(this).removeClass("selected");
			  					var dimmedTab = $(".rootNav.dimActive");
						  		if(dimmedTab.length > 0){
						  			$(dimmedTab).removeClass("dimActive");
						  			//$(dimmedTab).addClass("active");
						  		}
			  					$("#ECUEleftMenuClose").hide();
			  				}
			  			} else { //menu not open, show it
			  				$(selMenu).addClass("open");
			  				if($('body').hasClass("wLeftNavPin")){
			  					// do nothing
			  				} else {
			  					// show off-click closing div
			  					$("#ECUEleftMenuClose").show();
			  				}
			  			}
			  		}// else... should not have selected (open menu) class if no kids
		  		} else {
		  			var currentSelection = $(".rootNav.selected");
			  		if(currentSelection.length > 0){ $(currentSelection).removeClass("selected"); }
			  		var currentTab = $(".rootNav.active");
			  		//if(currentTab.length > 0){ $(currentTab).removeClass("active"); }
			  		var currentMenu = $(".ECUEleftMenu.open");
			  		if(currentMenu.length > 0){ $(currentMenu).removeClass("open"); }
			  		
		  			if(menuName){ // child menu name exists?
			  			var newMenu = document.getElementById(menuName);
			  			if(newMenu){ // actual child menu exists?
			  				$(this).addClass("selected");
			  				$(currentTab).addClass("dimActive");
			  				$(newMenu).addClass("open");
				  			if($("body").hasClass("wLeftNavPin")){
					  			// do nothing
					  		} else {
					  			$("#ECUEleftMenuClose").show();
					  		}
			  			} else { // no kids menu, going to navigate elsewhere...
			  				//$(this).addClass("active");
			  				if($('body').hasClass("wLeftNavPin")){
			  					// if in pinned mode and now going to area with no menu, then undo pinning
			  					$("body").removeClass("wLeftNavPin");
			  				} else {
			  					// hide off-click closing div
			  					$("#ECUEleftMenuClose").hide();
			  				}
			  				var dimmedTab = $(".rootNav.dimActive");
					  		if(dimmedTab.length > 0){
					  			$(dimmedTab).removeClass("dimActive");
					  			//$(dimmedTab).addClass("active");
					  		}
			  			}
			  		}
		  		}
		  		e.stopImmediatePropagation();
		  		return false;
		  	});
		  	
		  	$("#ECUEleftMenuClose").on("click",function(e){
		  		var openMenu = $(".ECUEleftMenu.open");
		  		if(openMenu.length > 0){
		  			$(openMenu).removeClass("open");
		  		}
		  		var openTab = $(".rootNav.selected");
		  		if(openTab.length > 0){
		  			$(openTab).removeClass("selected");
		  		}
		  		var dimmedTab = $(".rootNav.dimActive");
		  		if(dimmedTab.length > 0){
		  			$(dimmedTab).removeClass("dimActive");
		  			//$(dimmedTab).addClass("active");
		  		}
			  	$("#ECUEleftMenuClose").hide();
		  	});
		  	
		  	$(".menuPin").on("click",function(e){
		  		if($("body").hasClass("wLeftNavPin")){
		  			$("body").removeClass("wLeftNavPin");
		  			$("#ECUEleftMenuClose").show();
		  		} else {
		  			$("body").addClass("wLeftNavPin");
		  			$("#ECUEleftMenuClose").hide();
		  		}
		  	});
		  	
		  	$(".menuTree").on("click","a",function(e){
		  		if( $("body").hasClass("ember-application") ){
		  			/*
		  			var user = $("#currentUser").val();
		  			var area = $(this).closest(".ECUEleftMenu").attr("id");
			  		var page = $(this).attr("data-page");
			  		window.location = "index.html#/" + user + "/" + area + "/" + page;
			  		*/
			  		return false;
		  		}
		  		/* -- try to manage active state through UI router 
		  		var currentTab = $(".rootNav.active");
		  		if(currentTab.length > 0){
		  			$(currentTab).removeClass("active");
		  		}*/
		  		var dimmedTab = $(".rootNav.dimActive");
		  		if(dimmedTab.length > 0){
		  			$(dimmedTab).removeClass("dimActive");
		  		}
		  		var parentIconID = $(this).closest(".ECUEleftMenu").attr("id");
		  		var parentIcon = $(".rootNav[data-subnav='"+ parentIconID +"']");
		  		
		  		if($('body').hasClass("wLeftNavPin")){
  					// should be open, do nothing
  				} else {
  					// toggle close
  					$(this).closest(".ECUEleftMenu").removeClass("open");
  					$(parentIcon).removeClass("selected");
  					//$(parentIcon).addClass("active");
  					$("#ECUEleftMenuClose").hide();
  				}
  				
		  	});
		},
		
		allowExpandMenuItens : function(){
			$(".expandLi").on("click", "a", function(){
				var clickedBtn = $(this);
				var clickedLi = clickedBtn.closest("li");
				if(clickedLi.hasClass("expanding")) {
					//do nothing
				}
				else {
					clickedLi.addClass("expanding");
					clickedLi.toggleClass("expand").find(".expandableIten").animate({width: 'toggle'},function(){clickedLi.removeClass("expanding")});
				}
			});
		},
		
		tableSelection : function(){
			$(".table").on("click", "tr", function () {
				var clickedtTr = $(this);
				clickedtTr.closest(".table").find("tr").removeClass("selected");
				clickedtTr.addClass("selected");
			});
		// Unselect lines on sorting
			//$(".table-container").on("click", ".dataTables_scrollHead", function () {
				//$(this).closest(".table-container").find("tr").removeClass("selected");
			//});
		//Show and Hide Search
			$(".table-container").on("click", "#searchBt", function () {
				var searchBt = $(this);
				searchBt.closest(".table-container").find(".dataTables_filter:first").slideToggle();
				searchBt.toggleClass("selected");
			});			
		},
		
		dataTable : function(){
		//Options for Datatable pluggin
			$('#tableName').dataTable({
				"sDom": 'Rlfrtip',
				"bPaginate": false
				//"sPaginationType": "four_button",
				//"sScrollY": "1px", // any value, true height is defined on CSS
    			//"bScrollCollapse": true
			});
		}
		
    };

})(window.jQuery);
