// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.
var today = new Date();
var expiry = new Date(today.getTime() + 30*24*3600*1000*6); // plus 180 days
var cookjson;

var AllExpt = []
var thisExpt = []

window.onload = function (e) {
  console.log("Inside function");
  var form = document.getElementById("form2")
  form.onsubmit = function (e) {
    e.preventDefault()
    if(form2.reportValidity()) {
      console.log("Valid data");
      
      //f/m/n + y/n + y/n + r/s/c/f + y/n
      //LBQ(Full/Min/No) + ShowScore(Y/N) + PartID(Rand/Seq/Cust/Polf) + Redirect(Y/N)
      optionsIdentifier = form2.exp7_lbq.value[0] + form2.exp8_showScore.value + form2.exp10_partID.value[0] + form2.exp11_callback.value
      ts = getPrefix()

      datEXPT = {timestamp:ts, expireExpt:expiry, ExptID:eid, ExptName:form2.exp1_name.value, ExptTitle:form2.exp2_title.value, ExptAbbr:form2.exp3_abbr.value, ExptUni:form2.exp4_uni.value, ExptEmail:form2.exp5_email.value, ExptNsub:form2.exp6_nSubjects.value, ifLBQ:form2.exp7_lbq.value, ifScore:form2.exp8_showScore.value, typePartID:form2.exp10_partID.value, ifCallBack:form2.exp11_callback.value, cbURL:form2.exp11_cbURL.value, ethics1:form2.exp12_eth1.value, ethics2:form2.exp12_eth2.value, ethics3:form2.exp12_eth3.value, optionsID:optionsIdentifier};
      //datEXPT = JSON.parse(datEXPT);
      console.log(datEXPT);
      //datEXPT = JSON.stringify(datEXPT); 
    }
    console.log("[LOG] - making JSON object - thisExpt");
    //console.log(e);
    //console.log(thisExpt);
    thisExpt.push(datEXPT);
    console.log("[LOG] - JSON made, sending to server to append");
    console.log(thisExpt)
    sendToServer(thisExpt);
    hide_forms();

    make_roster(eid, form2.exp1_name.value, form2.exp3_abbr.value, form2.exp5_email.value, form2.exp6_nSubjects.value, form2.exp7_lbq.value, form2.exp8_showScore.value, form2.exp10_partID.value, form2.exp11_callback.value, optionsIdentifier);
  }
}

function make_roster(expID, expName, abbr, expEmail, nSub, ifLBQ, ifShwSc, typePID, cb, optID) {
  expID = eid.substr(-7);

  roster = []
  headers = ['Experimenter','UniqueID','Abbreviation','Email','lbqType','scoreType','pidType','urlType','options','nthPID','participantID','hilexLink']
  roster.push(headers)
  for (var i = 0; i < nSub; i++) {
    if(typePID == 'random') {
      tempID = makeid(5)
    } else if (typePID == 'sequal') {
      tempID = (i+1).toString().padStart(4, '0')
    } else if (typePID == 'custom') {
      tempID = '{{enter-Part-ID-here}}'
    } else if (typePID == 'prolific') {
      tempID = '{{%PROLIFIC_PID%}}'
    }
    fullID = 'hilex.com/?expID='+expID+'&options='+optID+'&pid='+tempID

    expName = expName.replaceAll(",","").replaceAll('"','').replaceAll("'","");
    abbr = abbr.replaceAll(",","").replaceAll('"','').replaceAll("'","");
    tempRow = [expName, expID, abbr, expEmail, ifLBQ, ifShwSc, typePID, cb, optID, i+1, tempID, fullID]
    roster.push(tempRow)
  }

  fileDownloadName = expName + '-' + abbr + '_' + expID + '.csv';
  downloadCSV(roster, fileDownloadName);
  
  save_data_csv(expID+'_roster','data_experimenters/rosters',csvToDownload);
  saveData(expID+'_bkRoster.txt','data_experimenters/backup',csvToDownload);
  save_data_json(expID,'data_experimenters/rosters',JSON.stringify(thisExpt));
  save_data_json(expID+'_roster','data_experimenters/rosters',JSON.stringify(CSV_to_JSON(roster)));
  //set up experiment data folders
  save_data_json(expID+'_profile','data_experimenters/data',JSON.stringify([]));
  save_data_json(expID+'_HiLex','data_experimenters/data',JSON.stringify([]));
  save_data_json(expID+'_HiLexEmail','data_experimenters/data',JSON.stringify([datEXPT]));
  }

var sendToServer = function (note) {
  //https://stackoverflow.com/questions/14484613/load-local-json-file-into-variable
  //fetch('data_experimenters/all_expts.json').then(response => AllExpt = response.json());
  AllExpt = (function() {
    var json = null;
    $.ajax({'async': false, 'global': false, 'cache':false, 'url': "data_experimenters/all_expts.json", 'dataType': "json", 
      'success': function(data) {
        json = data;
      }
    });
    return json;
  })();

  console.log("[LOG] - read previous Expts, appending this Expt to the list");
  AllExpt = thisExpt.concat(AllExpt);
  console.log("[LOG] - Done, saving now");
  save_data_json('all_expts',"data_experimenters",JSON.stringify(AllExpt)); 
  console.log("[LOG] - OVER");
}

function save_data_json(f_name, dir, data) {
  jQuery.ajax({type: 'post', cache: false, url: 'scripts_jscssphp/save2_jquery.php',
    data: {data_dir: dir,
      file_name: f_name + '.json', // the file type should be added
      exp_data: data }
    });
}

var makeid = (length) => {
      var result           = '';
      var characters       = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength)); }
     return result; };

function make_id() {
  //today = new Date();
  year  = today.getFullYear();
  month = (today.getMonth() + 1).toString().padStart(2, "0");
  day   = today.getDate().toString().padStart(2, "0");
  hrs   = today.getHours().toString().padStart(2, "0");
  mins  = today.getMinutes().toString().padStart(2, "0")
  secs  = today.getSeconds().toString().padStart(2, "0")
  ms    = today.getMilliseconds().toString().padStart(4,"0")

  eid = 'HiLexExpt_'+year+month+day+'_'+hrs+mins+secs+ms+'_'+makeid(7);

  pid = 'HiLex_'+year+month+day+'_'+hrs+mins+secs+ms+'_'+makeid(7);
  pid_show = pid.slice(0,4) + pid.slice(24,32);
}

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
  $("#form2").css("display", "None");
  $("#line2").css("display", "");
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
	$("#myAlert2").css("display", "None");
	$("#head2").css("display", "");
  $("#line2").css("display", "");
	$(".form-control").css("display", "");
	$(".form-check-input").css("display", "");
	$("#help").css("display", "");
	$(".inp").css("display", "");
	$("#tickmarks").css("display", "");
	$(".form-group").css("display", "");
	$("#clear").css("display", "None");
	$("#start").css("display", "None");
	$(".form-group").css("display", "");
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
  if(form2.reportValidity()) {
    console.log("Valid data");
    datEXPT = {ExptID:eid, ExptName:form2.exp1_name.value, ExptTitle:form2.exp2_title.value, ExptAbbr:form2.exp3_abbr.value, ExptUni:form2.exp4_uni.value, ExptEmail:form2.exp5_email.value, ExptNsub:form2.exp6_nSubjects.value, ifLBQ:form2.exp7_lbq.value, ifScore:form2.exp8_showScore.value, ifEmail:form2.exp9_emailScore.value, typePartID:form2.exp10_partID.value, ifCallBack:form2.exp11_callback.value, cbURL:form2.exp11_cbURL.value, ethics1:form2.exp12_eth1.value, ethics2:form2.exp12_eth2.value, ethics3:form2.exp12_eth3.value}
    //datEXPT = JSON.parse(datEXPT);
    console.log(datEXPT);
    datEXPT = JSON.stringify(datEXPT);
    datLBQ = datLBQ.replaceAll(",",";").replaceAll('"','').replaceAll(":","=");
    datLBQ = datLBQ.slice(1, datLBQ.length-1);
    
    csv_imp = cook_to_csv(datLBQ);
    csv_clnt = cook_to_csv(merged);
    csv_all = csv_imp+'\n'+csv_clnt;

    setCookie("cook_ClientProfID", pid);
    
    saveData('imp_'+pid+'.txt',"data_profile",csv_imp); 
    saveData('all_'+pid+'.txt',"data_profile",csv_all);
    
    
    $("#myAlert1").css("display", "");
  }
  else {
    console.log("Invalid data");
    //alert("Something is missing from profile data. Please check.");  
  }
}

function updateRangeInput(elem) {
  $(elem).next().val($(elem).val());
}

function cook_to_csv(cook) {
  cookjson = cook.split(";")
  var arr = new Array();
  for (var i = 0; i < cookjson.length; i++) {
    temp = cookjson[i].split('=');
    arr.push(temp);
  }
  arr = JSON.stringify(arr);
  arr = arr.replaceAll('"],["','\n');
  arr = arr.replaceAll('","',',');
  arr = arr.replaceAll('[["','');
  arr = arr.replaceAll('"]]','');
  return arr;
}

// https://stackoverflow.com/questions/8847766/how-to-convert-json-to-csv-format-and-store-in-a-variable
function JSON_to_CSV(data_in_json) {
  const items = data_in_json;
  const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
  const header = Object.keys(items[0])
  const csv = [
  header.join(','), // header row first
  ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
  ].join('\r\n')
  console.log("Converted to CSV file")
  return csv;
};

function CSV_to_JSON(data_in_csv) {
  const csv = data_in_csv;
  const lines = csv.slice(1); // remove header row
  const result = [];
  const headers = csv[0];

  for (const line of lines) {
    const obj = {};
    for (let i = 0; i < headers.length; i++) {
      obj[headers[i]] = line[i];
    }
    result.push(obj);
  }
  return result;
};

function downloadCSV(JSONdata, filename) {
  //console.log(roster)
  //https://www.javatpoint.com/javascript-create-and-download-csv-file
  csvToDownload = ''
  JSONdata.forEach(function(row) {  
    csvToDownload += row.join(',');
    csvToDownload += "\n";  
  });  

  var hiddenElement = document.createElement('a');  
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvToDownload);  
  hiddenElement.target = '_blank';    
  //provide the name for the CSV file to be downloaded  
  hiddenElement.download = filename;
  hiddenElement.click(); 
}