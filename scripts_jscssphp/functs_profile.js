//https://stackoverflow.com/questions/53021813/html-two-language-option-with-button-without-having-to-redirect-to-different-pa
function toggleLanguage() {
    curr_lang = document.getElementById("just_flag").innerHTML;
    if (curr_lang=='E') {
      just_flag.innerHTML = 'H'

      i0.innerHTML = "Change this to English"
      head1.innerHTML = "लोगों के बारे में सर्वेक्षण सवाल";
      line1.innerHTML = "कृपया शुरू करने से पहले नीचे दिए गए प्रश्नों को पूरा करें। यह शोध में हमारी बहुत मदद करेगा।";
      i00.innerHTML = "आपकी आई. डी. (बेनाम)"
      i01.innerHTML = "उम्र"
      i02.innerHTML = "लिंग"
      i21.innerHTML = "महिला"
      i22.innerHTML = "पुरुष"
      i23.innerHTML = "अन्य"
      i24.innerHTML = "मैं कहना नहीं चाहूँगा"
      i03.innerHTML = "आप सबसे ज्यादा कहाँ रहे हैं ?<br> <span class='text-info'><small style='font-size: 12px;'>अधिक स्थानों के लिए आगे स्क्रॉल करें।</small></span>";
      i31.innerHTML = "देश"
      i32.innerHTML = "राज्य"
      i33.innerHTML = "शहर/ जिला"
      i04.innerHTML = "अभी आप किस उच्च डिग्री के लिए काम कर रहे हैं है ?"
      i41.innerHTML = "प्राथमिक शिक्षा (आठवीं कक्षा तक)"
      i42.innerHTML = "माध्यमिक शिक्षा (10वीं कक्षा तक)"
      i43.innerHTML = "उच्च माध्यमिक शिक्षा (12वीं कक्षा तक)"
      i44.innerHTML = "स्नातक शिक्षा"
      i45.innerHTML = "स्नातकोत्तर शिक्षा"
      i46.innerHTML = "डॉक्टरेट"
      i47.innerHTML = "पोस्टडॉक"
      head2.innerHTML = "भाषा से संबंधित सवाल"
      line2.innerHTML = "जहां भी आवश्यक हो कृपया स्लाइडर का उपयोग करें।"
      i05.innerHTML = "आपकी पहली भाषा<br><span class='text-info'><small style='font-size: 12px;'>मातृभाषा/ मूल भाषा </small>"
      i06.innerHTML = "अन्य भाषाएं <br><span class='text-info'><small style='font-size: 12px;'>सबसे परिचित से कम परिचित</small></span>"   
      i07.innerHTML = "आपकी हिन्दी कितनी अच्छी है (कृपया 1-10 तक अंक दें) ?<br><span class='text-info'><small style='font-size: 12px;'>1-कोई ज्ञान नहीं, &nbsp; 10-सहज/ निपुण</small><br><strong>कृपया स्लाइडर का उपयोग करें</strong></small></span>"
      i71.innerHTML = "&nbsp;&bull;&nbsp;अपनी हिंदी बोलने की क्षमता का मूल्यांकन करें<br><span class='text-info'><small style='font-size: 12px;'>1-कोई ज्ञान नहीं, &nbsp; 10-सहज/ निपुण<br></small></span>"
      i72.innerHTML = "&nbsp;&bull;&nbsp;अपनी हिंदी समझने की क्षमता का मूल्यांकन करें<br><span class='text-info'><small style='font-size: 12px;'>1-कोई ज्ञान नहीं, &nbsp; 10-सहज/ निपुण<br></small></span>"
      i73.innerHTML = "&nbsp;&bull;&nbsp;अपनी हिंदी पढ़ने की क्षमता का मूल्यांकन करें<br><span class='text-info'><small style='font-size: 12px;'>1-कोई ज्ञान नहीं, &nbsp; 10-सहज/ निपुण<br></small></span>"
      i74.innerHTML = "&nbsp;&bull;&nbsp;अपनी हिंदी लिखने की क्षमता का मूल्यांकन करें<br><span class='text-info'><small style='font-size: 12px;'>1-कोई ज्ञान नहीं, &nbsp; 10-सहज/ निपुण<br></small></span>"
      i08.innerHTML = "वह उम्र जब आपने हिंदी सीखना शुरू किया था"
      i09.innerHTML = "हिन्दी के साथ आपका कुल कितने वर्षों का अनुभव है "
      i10.innerHTML = "आपने स्कूल/ कॉलेज में कुल कितने वर्षों तक हिन्दी विषय का अध्ययन किया है"
      i11.innerHTML = "शिक्षा के समय निर्देश की भाषा हिन्दी थी"
      i12.innerHTML = "प्रति दिन कितने घंटे आप हिंदी उपयोग में लेते हैं <br><span class='text-info'><small style='font-size: 12px;'>सब कुछ शामिल करें (पढ़ना/लिखना/संवाद करना)</small></span>"
      i13.innerHTML = "आपने कुल कितने वर्ष हिंदी भाषी क्षेत्र में निवास किया"
      i14.innerHTML = "मैं शोध के लिए अपना डेटा साझा करने के की सहमति देता/ देती हूँ <br><span class='text-info'><small style='font-size: 12px;'>90 दिनों के बाद आपका सारा डाटा सर्वर से हटा दिया जाएगा।<br>आपका डेटा गुमनाम और पहचानने योग्य नहीं रहता है।<br>आपका डाटा तीसरे पक्ष के साथ साझा नहीं किया जाएगा।</small></span>"
      i141.innerHTML = "&nbsp;&nbsp;हाँ"
      i142.innerHTML = "&nbsp;&nbsp;नहीं"
    }
    else {
      just_flag.innerHTML = 'E'
      i0.innerHTML = "इसे हिंदी में बदलें"
      head1.innerHTML = "Demographic Survey Questions";
      line1.innerHTML = "Please complete the following questions before you start. It will help us immensely in research study.";
      i00.innerHTML = "Participation ID (anonymous)"
      i01.innerHTML = "Age"
      i02.innerHTML = "Gender"
      i21.innerHTML = "Female"
      i22.innerHTML = "Male"
      i23.innerHTML = "Others"
      i24.innerHTML = "Rather not say"
      i03.innerHTML = "Where have you lived the most ?<br> <span class='text-info'><small style='font-size: 12px;'>Scroll further to see more places</small></span>";
      i31.innerHTML = "Country"
      i32.innerHTML = "State"
      i33.innerHTML = "City/ District"
      i04.innerHTML = "What is the highest degree you are currently working towards ?"
      i41.innerHTML = "Primary school (upto class 8th)"
      i42.innerHTML = "Secondary school (upto class 10th)"
      i43.innerHTML = "Higher secondary (upto class 12th)"
      i44.innerHTML = "Graduation - Bachelor"
      i45.innerHTML = "Postgraduation - Master"
      i46.innerHTML = "Doctorate"
      i47.innerHTML = "Postdoc"
      head2.innerHTML = "Language Related Questions";
      line2.innerHTML = "Please use sliders wherever necessary.";
      i05.innerHTML = "Your first language<br><span class='text-info'><small style='font-size: 12px;'>Native language/ Mother tongue</small>"
      i06.innerHTML = "Other languages<br><span class='text-info'><small style='font-size: 12px;'>from most familiar to least</small></span>"
      i07.innerHTML = "How good is your Hindi? (please rate 1-10)<br><span class='text-info'><small style='font-size: 12px;'>1-No knowlege, &nbsp; 10-Fluent/ Expert<br><strong>Please use the slider for response</strong></small></span>"
      i71.innerHTML = "&nbsp;&bull;&nbsp;Rate your ability to speak Hindi<br><span class='text-info'><small style='font-size: 12px;'>1-No knowlege, &nbsp; 10-Fluent/ Expert<br></small></span>"
      i72.innerHTML = "&nbsp;&bull;&nbsp;Rate your ability to understand Hindi<br><span class='text-info'><small style='font-size: 12px;'>1-No knowlege, &nbsp; 10-Fluent/ Expert<br></small></span>"
      i73.innerHTML = "&nbsp;&bull;&nbsp;Rate your ability to read Hindi<br><span class='text-info'><small style='font-size: 12px;'>1-No knowlege, &nbsp; 10-Fluent/ Expert<br></small></span>"
      i74.innerHTML = "&nbsp;&bull;&nbsp;Rate your ability to write Hindi<br><span class='text-info'><small style='font-size: 12px;'>1-No knowlege, &nbsp; 10-Fluent/ Expert<br></small></span>"
      i08.innerHTML = "Age when you started learning Hindi"
      i09.innerHTML = "Number of years of experience with Hindi"
      i10.innerHTML = "Number of years you studied Hindi subject in school/ college"
      i11.innerHTML = "Language of instruction was Hindi during education"
      i12.innerHTML = "Approx. number of hours spent per day using of Hindi <br><span class='text-info'><small style='font-size: 12px;'>Sum up all (reading/ writing/ communicating)</small></span>"
      i13.innerHTML = "Total number of years lived in Hindi speaking region"
      i14.innerHTML = "I agree to share my data for research <br><span class='text-info'><small style='font-size: 12px;'>All your data will be deleted from server after 90 days.<br>Your data remains anonymized and unidentifiable.<br>Your data will not be shared with third parties.</small></span>"
      i141.innerHTML = "&nbsp;&nbsp;Yes"
      i142.innerHTML = "&nbsp;&nbsp;No"
    }
  };

// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.
var today = new Date();
var expiry = new Date(today.getTime() + 30*24*3600*1000*3); // plus 30 days
var cookjson;

function getPrefix() {
  var today = new Date();
  year  = String(today.getFullYear()).slice(-2);
  month = (today.getMonth() + 1).toString().padStart(2, "0");
  day   = today.getDate().toString().padStart(2, "0");
  hrs   = today.getHours().toString().padStart(2, "0");
  mins  = today.getMinutes().toString().padStart(2, "0")
  secs  = today.getSeconds().toString().padStart(2, "0");
  zone = today.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];

  var pid_prefix = year+month+day+'_'+hrs+mins+secs+'_'+zone;  
  return pid_prefix;
};

function hide_forms() {
  $("#head2").css("display", "None");
  $("#line2").css("display", "None");
  $("#head1").css("display", "None");
  $("#line1").css("display", "None");
  $(".form-control").css("display", "None");
  $(".form-check-input").css("display", "None");
  $("#help").css("display", "None");
  $(".inp").css("display", "None");
  $("#tickmarks").css("display", "None");
  $(".form-group").css("display", "None");
  $("#clear").css("display", "");
  $("#start").css("display", "");
  $("#pid_head").css("display", "");
  $("#pid_auto").css("display", "");
  $("#i01").css("display", "None");
  $("#i02").css("display", "None");

}

function getCookie(name) {
	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
	return (value != null) ? unescape(value[1]) : null;
}

function setCookie(name, value) {
	document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

function clearCookies() {
	document.cookie.split(";").forEach(function(c) { 
    document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
}

function saveData(filename, dir, data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'scripts_jscssphp/save1_xmlhttp.php');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: filename, directory: dir, filedata: data}));
}

function save_data_csv(f_name, dir, data) {
  jQuery.ajax({type: 'post', cache: false, url: 'scripts_jscssphp/save2_jquery.php',
      data: { data_dir: dir,
        file_name: f_name + '.csv', // the file type should be added
        exp_data: data }
      });
}

function save_data_json(f_name, dir, data) {
  jQuery.ajax({type: 'post', cache: false, url: 'scripts_jscssphp/save2_jquery.php',
    data: {data_dir: dir,
      file_name: f_name + '.json', // the file type should be added
      exp_data: data }
    });
}

function str_obj(str) {
    str = str.split(';');
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var cur = str[i].split('=');
        result[cur[0]] = cur[1];
    }
    return result;
}

function save_and_hide() {
  if(form1.reportValidity()) {
    console.log("Valid data");
    datLBQ = {Q00_timestamp: getPrefix(), Q01_PartID:pid, Q02_age:form1.ans1_age.value, Q03_gender:form1.ans2_gender.value, Q04_place: form1.ans3Count.value+'-'+form1.ans3State.value+'-'+form1.ans3City.value, Q05_education:form1.ans4_edu.value, Q06_nativeLang:form1.ans5_nat.value.replaceAll(',','-').replaceAll(' ','').replaceAll(';','-'), Q07_otherLang:form1.ans5_oth.value.replaceAll(',','-').replaceAll(' ','').replaceAll(';','-'), Q08_rateHindi:form1.cook7_knw.value, Q09_rateSpeak:form1.cook71_speak.value, Q10_rateUnd:form1.cook72_understand.value, Q11_rateRead:form1.cook73_read.value, Q12_rateWrite:form1.cook74_write.value, Q13_age_acq:form1.ans8_age.value, Q14_experienceHi:form1.ans9_exp.value, Q15_formalEduHi:form1.ans10_stud.value, Q16_hiMedium:form1.ans11_med.value, Q17_hrsPerDay:form1.ans12_day.value, Q18_yrsLivedHi:form1.ans13_exp.value, Q19_consent:form1.ans14.value, deleteThis:emailID};
    var csv_clnt = [{...datLBQ, ...tomerge}]
  
    AllParticipantsProfile = (function() {
      var json = null;
      $.ajax({'async': false, 'global': false, 'cache':false, 'url': "data_experimenters/data/"+eid+"_profile.json", 'dataType': "json", 
        'success': function(data) { json = data; }});
      return json; })();
    AllParticipantsProfile = csv_clnt.concat(AllParticipantsProfile);


    console.log(csv_clnt)

    setCookie("cook_ClientProfID", pid);
    
    save_data_json(eid+'_profile','data_experimenters/data/',JSON.stringify(AllParticipantsProfile));
    sessionStorage.setItem("profileData", JSON.stringify(csv_clnt[0])); //for BACKUP
    console.log('sessionStorage SET')
    hide_forms();
    $("#myAlert1").css("display", "");
  }
  else {
    console.log("Invalid data");
  }
}

function updateRangeInput(elem) {
  $(elem).next().val($(elem).val());
}
