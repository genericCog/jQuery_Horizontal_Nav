
    //Global vars
    var data_nav='';
  var room_id_js='';
    /*<cfoutput>var #toScript(room_id_cf, "room_id_js")#;</cfoutput> */    
    if(!room_id_js == ""){$('[data-nav="nav_add_room"]').addClass('custom_border');}/*if edit details is diplayed, add custom_border class from nav_add_room*/
    
    /*::: ::: Hyperlink Navigation ::: :::*/ 
    $('[data-nav="nav_calendar"], [data-nav="nav_room_details"], [data-nav="nav_room_search"], [data-nav="nav_help"], [data-nav="nav_add_room"], [data-nav="nav_requests"], [data-nav="nav_room_details_edit"]').each(function(index){        
        $(this).on({
            'mouseenter':function(e){try{data_nav=$(this).data('nav');Nav_Hover_CSS(data_nav);} catch(error_info){console.log('ERROR mouseenter\n'+e+'\n'+error_info);}},
            'mouseleave':function(e){try{data_nav=$(this).data('nav');Nav_Normal_CSS(data_nav);}catch(error_info){console.log('ERROR mouseleave\n'+e+'\n'+error_info);}},
            'click':     function(e){
                try{
                    data_nav = $(this).data('nav');
                    Nav_Normal_CSS(data_nav);
                    console.log(data_nav);   
                    switch(data_nav) {
                        case 'nav_calendar':
							$('[data-nav="label_status"]').html('Calendar was clicked.');
                            ///*window.location.href = 'calendar.cfm';*/
                            break;
                        case 'nav_room_details':
							$('[data-nav="label_status"]').html('Detail was clicked.');
                            ///*window.location.href = 'room_details.cfm';*/
                            break;
                        case 'nav_room_search':
							$('[data-nav="label_status"]').html('Search was clicked.');
                            ///*window.location.href = 'room_search.cfm';*/
                            break;
                        case 'nav_help':
							$('[data-nav="label_status"]').html('Help was clicked.');
                            ///*window.location.href = 'help.cfm';*/
                            break;
                        case 'nav_add_room':
							$('[data-nav="label_status"]').html('Add was clicked.');
                            ///*window.location='room_details_edit.cfm?room_id=addroom';*/
                            break;
                        case 'nav_requests':
							$('[data-nav="label_status"]').html('View was clicked.');
                            ///*window.location.href = 'requests.cfm';*/
                            break;
                        case 'nav_room_details_edit':
							$('[data-nav="label_status"]').html('Edit was clicked.');
                            ///*window.location.href = 'room_details_edit.cfm?room_id='+room_id_js;*/
                            break;
                        default:
							$('[data-nav="label_status"]').html('Home was clicked.');
                            ///*window.location.href = 'calendar.cfm';*/
                    }//END switch                 
                }catch(error_info){console.log('ERROR click\n'+e+'\n'+error_info);}
            }//END try
        });//END on events
    });//END .each loop

    function Nav_Hover_CSS(data_nav){
        $('[data-nav='+data_nav+']').css('cursor','pointer');
        $('[data-nav='+data_nav+']').removeClass('dz_container_normal');
        $('[data-nav='+data_nav+']').addClass('dz_over');
    }//END Nav_Hover_CSS
    function Nav_Normal_CSS(data_nav){
        $('[data-nav='+data_nav+']').css('cursor','auto');
        $('[data-nav='+data_nav+']').addClass('dz_container_normal');
        $('[data-nav='+data_nav+']').removeClass('dz_over');
    }//END Nav_Normal_CSS
    /*::: ::: END Hyperlink Navigation ::: :::*/