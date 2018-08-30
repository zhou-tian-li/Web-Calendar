

$(document).ready(function() {

			$('#calendar').fullCalendar({
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,agendaWeek'
				}
				,
				defaultView:'agendaWeek'
				,
				dayClick: function(date, jsEvent, view) {
						$('#calendar').fullCalendar('changeView', 'agendaWeek');
						$('#calendar').fullCalendar( 'gotoDate', date );			
				}
				,
				minTime: "08:00:00"
				,
				maxTime: "24:00:00"
				,
				height: 880
				,
				selectOverlap:false
				,
				allDaySlot:false
				,
				eventOverlap:false
				,
				selectable: {
					month:false,
					agenda:true
				}
				,
				selectHelper: true
				,
				editable: {
					month:false,
					agenda:true
				}
				,
				eventLimit: true// allow "more" link when too many events 
				,
				events: 'php/events.php'
				,
				select: function(start, end) {/*------------------------------------------------Create------------------------------------------*/
					
						var dateHolding = moment(start).format("YYYY-MM-DD")
						var startHolding = moment(start).format("HH:mm");
						var endHolding = moment(end).format("HH:mm");
						
						document.getElementById('date_holder1').innerHTML = dateHolding;
						document.getElementById('start_holder1').innerHTML = startHolding;
						document.getElementById('end_holder1').innerHTML = endHolding;
					
						$('#event_create_container').data('start', start);
						$('#event_create_container').data('end', end);
						$("#event_create_container" ).dialog( "open" );
						
						$( ".darkBackground" ).css( "display","block" );
					
				}
				,
			    eventDrop: function(event,delta, revertFunc) {/*------------------------------------------------Change Date------------------------------------------*/
					
						var dateHolding = moment(event.start).format("YYYY-MM-DD")
						var startHolding = moment(event.start).format("HH:mm");
						var endHolding = moment(event.end).format("HH:mm");
						
						document.getElementById('name_holder2').innerHTML = event.title;
						document.getElementById('date_holder2').innerHTML = dateHolding;
						document.getElementById('start_holder2').innerHTML = startHolding;
						document.getElementById('end_holder2').innerHTML = endHolding;
					
						$('#event_changeDate_container').data('theEvent', event);
						$( "#event_changeDate_container" ).dialog( "open" );
						
						$( ".darkBackground" ).css( "display","block" );

			    }
			    ,
			    eventResize: function(event) {/*------------------------------------------------Resize Date------------------------------------------*/
						
						var dateHolding = moment(event.start).format("YYYY-MM-DD")
						var startHolding = moment(event.start).format("HH:mm");
						var endHolding = moment(event.end).format("HH:mm");
						
						document.getElementById('name_holder3').innerHTML = event.title;
						document.getElementById('date_holder3').innerHTML = dateHolding;
						document.getElementById('start_holder3').innerHTML = startHolding;
						document.getElementById('end_holder3').innerHTML = endHolding;
					
						$('#event_resize_container').data('theEvent', event);
						$( "#event_resize_container" ).dialog( "open" );
						
						$( ".darkBackground" ).css( "display","block" );
					
				}
				,
				eventClick: function(event) {/*-----------------------------------------Info/Delete--------------------------------------*/
						
						var dateHolding = moment(event.start).format("YYYY-MM-DD")
						var startHolding = moment(event.start).format("HH:mm");
						var endHolding = moment(event.end).format("HH:mm");
						
						document.getElementById('name_holder4').innerHTML = event.title;
						document.getElementById('date_holder4').innerHTML = dateHolding;
						document.getElementById('start_holder4').innerHTML = startHolding;
						document.getElementById('end_holder4').innerHTML = endHolding;
						
						$('#event_info_container').data('theEvent', event);
						$( "#event_info_container" ).dialog( "open" );
						
						$( ".darkBackground" ).css( "display","block" );

				}

	
			});		
});














/*------------------------------------------------Create------------------------------------------*/

$(document).ready(function() {
			
	$(function() {
		$( "#event_create_container" ).dialog({
			autoOpen: false
			,
			dialogClass: "noclose"
			,
			buttons: {
				Save: function() 
				{
						var start = $("#event_create_container").data('start');
						var end = $("#event_create_container").data('end');
						var title = document.getElementById("name_id").value;
													   
						var eventData;
						
						var startDB = moment(start).format("YYYY-MM-DD HH:mm:ss");
						var endDB = moment(end).format("YYYY-MM-DD HH:mm:ss");
							
						$.post("php/instructions.php",
						{
							title: title,
							startDB: startDB,
							endDB: endDB,
							instruction: "adding"
						});

						eventData = {
									title: title,
									start: start,
									end: end
									};
										
						$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
						
						location.reload();
					
						$( this ).dialog( "close" );
						
						$( ".darkBackground" ).css( "display","none" );
				}
				,
				Cancel: function() 
				{
					$( this ).dialog( "close" );
					
					$( ".darkBackground" ).css( "display","none" );
				}
			}
		});

	});
});


/*------------------------------------------------Change Date------------------------------------------*/

$(document).ready(function() {
			
	$(function() {
		$( "#event_changeDate_container" ).dialog({
			autoOpen: false
			,
			dialogClass: "noclose"
			,
			buttons: {
				Yes: function() 
				{	
					var theEvent = $("#event_changeDate_container").data('theEvent');
					var userName = document.getElementById("name_id").value;
					
					if(userName == theEvent.title )
					{
						var startDB = moment(theEvent.start).format("YYYY-MM-DD HH:mm:ss");
						var endDB = moment(theEvent.end).format("YYYY-MM-DD HH:mm:ss");
						
						  $.post("php/instructions.php",
							{
								id: theEvent.id,
								title: theEvent.title,
								startDB: startDB,
								endDB: endDB,
								instruction: "updating"
							});		
					
						$( this ).dialog( "close" );
						
						$( ".darkBackground" ).css( "display","none" );
					}
					else
					{
						alert("Sorry, you cannot do this action since you are not " + theEvent.title);
						location.reload();
				
						$( this ).dialog( "close" );
					
						$( ".darkBackground" ).css( "display","none" );
					}
						

				}
				,
				Cancel: function() 
				{		
					location.reload();
				
					$( this ).dialog( "close" );
					
					$( ".darkBackground" ).css( "display","none" );
				}
			}
		});

	});
});



/*------------------------------------------------Resize Date------------------------------------------*/

$(document).ready(function() {
			
	$(function() {
		$( "#event_resize_container" ).dialog({
			autoOpen: false
			,
			dialogClass: "noclose"
			,
			buttons: {
				Yes: function() 
				{
					var theEvent = $("#event_resize_container").data('theEvent');
					var userName = document.getElementById("name_id").value;
					
					if(userName == theEvent.title )
					{
						var startDB = moment(theEvent.start).format("YYYY-MM-DD HH:mm:ss");
						var endDB = moment(theEvent.end).format("YYYY-MM-DD HH:mm:ss");
						
						  $.post("php/instructions.php",
							{
								id: theEvent.id,
								title: theEvent.title,
								startDB: startDB,
								endDB: endDB,
								instruction: "updating"
							});		
					
						$( this ).dialog( "close" );
						
						$( ".darkBackground" ).css( "display","none" );
					}	
					else
					{
						alert("Sorry, you cannot do this action since you are not " + theEvent.title);
						location.reload();
				
						$( this ).dialog( "close" );
					
						$( ".darkBackground" ).css( "display","none" );
					}	
						
						
				}
				,
				Cancel: function() 
				{		
					location.reload();
					
					$( this ).dialog( "close" );
					
					$( ".darkBackground" ).css( "display","none" );
				}
			}
		});

	});
});



/*-----------------------------------------Info/Delete--------------------------------------*/

$(document).ready(function() {
			
	$(function() {
		$( "#event_info_container" ).dialog({
			autoOpen: false
			,
			dialogClass: "noclose"
			,
			buttons: {
				
				"Delete reservation": function() 
				{
					var theEvent = $("#event_info_container").data('theEvent');
					var userName = document.getElementById("name_id").value;
					
					if(userName == theEvent.title )
					{
						$.post("php/instructions.php",
						{
							id: theEvent.id,
							instruction: "deleting"
						});	
								
						$('#calendar').fullCalendar('removeEvents', theEvent.id );
						
						$( this ).dialog( "close" );
						
						$( ".darkBackground" ).css( "display","none" );
					}
					else
					{
						alert("Sorry, you cannot do this action since you are not " + theEvent.title);
				
						$( this ).dialog( "close" );
					
						$( ".darkBackground" ).css( "display","none" );
					}
					
				}
				,
				Close: function() 
				{
					$( this ).dialog( "close" );
					
					$( ".darkBackground" ).css( "display","none" );
				}
			}
			
		});

	});
});
