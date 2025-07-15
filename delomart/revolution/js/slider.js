  
    var revapi1,
    tpj;
  function revinit_revslider11() {
  jQuery(function() {
    tpj = jQuery;
    revapi1 = tpj("#rev_slider_1_1");
    if(revapi1==undefined || revapi1.revolution == undefined){
      revslider_showDoubleJqueryError("rev_slider_1_1");
    }else{
      revapi1.revolution({
        sliderLayout:"fullwidth",
        visibilityLevels:"1400,1240,778,480",
        gridwidth:"1330,1330,778,480",
        gridheight:"946,946,450,350",
        spinner:"spinner0",
        perspective:600,
        perspectiveType:"global",
        editorheight:"946,946,450,350",
        responsiveLevels:"1330,1330,778,480",
        progressBar:{disableProgressBar:true},
        navigation: {
          onHoverStop:false,
          arrows: {
            enable:true,
            style:"hesperiden",
            hide_onmobile:true,
            hide_under:778,
            hide_onleave:true,
            left: {
              h_offset:30
            },
            right: {
              h_offset:30
            }
          }
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
    
  });
  } // End of RevInitScript
var once_revslider11 = false;
if (document.readyState === "loading") {document.addEventListener('readystatechange',function() { if((document.readyState === "interactive" || document.readyState === "complete") && !once_revslider11 ) { once_revslider11 = true; revinit_revslider11();}});} else {once_revslider11 = true; revinit_revslider11();}


/* (homepage -3 )*/

jQuery(function() {
tpj = jQuery;

if(tpj("#rev_slider_2_1").revolution == undefined){
    revslider_showDoubleJqueryError("#rev_slider_2_1");

  }else{

    revapi2 = tpj("#rev_slider_2_1").show().revolution({
    sliderType:"standard",
    visibilityLevels:"1240,1240,778,480",
    gridwidth:"1330,1330,778,480",
    gridheight:"833,833,450,350",
    perspective:600,
    perspectiveType:"global",
    editorheight:"833,833,450,350",
    responsiveLevels:"1330,1330,778,480",
    progressBar:{disableProgressBar:true},
    navigation: {
      onHoverStop:false,
      arrows: {
        enable:true,
        style:"hesperiden",
        hide_onmobile:true,
        hide_under:778,
        hide_onleave:true,
        left: {
          h_offset:30
        },
        right: {
          h_offset:30
        }
      }
    },
    fallbacks: {
      allowHTML5AutoPlayOnAndroid:true
    },
  });
}
});

/* (team )*/

jQuery(function() {
tpj = jQuery;

if(tpj("#rev_slider_3_1").revolution == undefined){
    revslider_showDoubleJqueryError("#rev_slider_3_1");

  }else{

    revapi3 = tpj("#rev_slider_3_1").show().revolution({
    sliderType:"standard",
    visibilityLevels:"1240,1240,778,480",
    gridwidth:"1240,1240,778,480",
    gridheight:"885,885,450,350",
    perspective:600,
    perspectiveType:"global",
    editorheight:"885,885,450,350",
    responsiveLevels:"1240,1240,778,480",
    progressBar:{disableProgressBar:true},
    navigation: {
      onHoverStop:false,
      arrows: {
        enable:false,
        style:"hesperiden",
        hide_onmobile:true,
        hide_under:778,
        hide_onleave:true,
        left: {
          h_offset:30
        },
        right: {
          h_offset:30
        }
      }
    },
    fallbacks: {
      allowHTML5AutoPlayOnAndroid:true
    },
  });
}
});
