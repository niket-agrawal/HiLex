/* To Disable Inspect Element  START */
$(document).bind("contextmenu",function(e) {
e.preventDefault();
});

$(document).keydown(function(e){
  if(e.which === 123){
     return false;
  }
});

document.onkeydown = function(e) {
if(event.keyCode == 123) {
  return false; }
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
  return false; }
if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
  return false; } }

document.oncontextmenu = new Function("return false");

/* To Disable Inspect Element  END */

function save_data_json(f_name, dir, data) {
  jQuery.ajax({type: 'post', cache: false, url: save_script,
    data: {data_dir: dir,
      file_name: f_name + '.json', // the file type should be added
      exp_data: data }
    });
}

function save_data_csv(f_name, dir, data) {
  jQuery.ajax({type: 'post', cache: false, url: save_script,
      data: { data_dir: dir,
        file_name: f_name + '.csv', // the file type should be added
        exp_data: data }
      });
}

function saveData(f_name, dir, data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', backup_script);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: f_name, directory: dir, filedata: data}));
}

// https://stackoverflow.com/questions/40362456/put-data-from-a-csv-file-into-an-array-javascript
// Create an array of objects
// Use the first line as keys
// Split by ","
function process(dataString) {
  //console.log(dataString);
  var lines = dataString.split(/\n/)
    .map(function(lineStr) {
        return lineStr.split(",");
    });
  var keys = lines[0];
  var objects = lines.slice(1)
    .map(function(arr) {
      return arr.reduce(function(obj, val, i) {
        obj[keys[i]] = val;
        return obj;
      }, {});
    });
  return JSON.stringify(objects, null, 2);
}

// Randomize array in-place using Durstenfeld shuffle algorithm 
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

var main_stim_1 = "stim,type,corrResp\nनीर,word,m\nमनुष्य,word,m\nआश्चर्य,word,m\nमौसम,word,m\nसोम,word,m\nअल्प,word,m\nसमय,word,m\nसमृद्ध,word,m\nत्वचा,word,m\nप्रयोजन,word,m\nअतीत,word,m\nविस्मय,word,m\nउपभोग,word,m\nसमर्पण,word,m\nविशाल,word,m\nद्वार,word,m\nप्रथा,word,m\nसदैव,word,m\nअंततः,word,m\nऋतु,word,m\nप्रकोप,word,m\nदशक,word,m\nशोषित,word,m\nमूर्छित,word,m\nधुंध,word,m\nपगडंडी,word,m\nउद्यम,word,m\nनिहित,word,m\nनिष्ठुर,word,m\nनिष्कासित,word,m\nभूतल,word,m\nयुगल,word,m\nअवसाद,word,m\nअभ्यागत,word,m\nमुखाग्नि,word,m\nबधिर,word,m\nअमुक,word,m\nपोखर,word,m\nबाह्य,word,m\nदंश,word,m\nलालायित,word,m\nव्युत्पत्ति,word,m\nकपोल,word,m\nपिपासा,word,m\nसुबकना,word,m\nशुश्रूषा,word,m\nपर्ण,word,m\nक्रंदन,word,m\nसंदूषण,word,m\nभूमिति,word,m\nसाही,word,m\nअभ्रक,word,m\nस्वायत्तता,word,m\nरतालू,word,m\nसलहज,word,m\nरोकड़िया,word,m\nभिश्ती,word,m\nकंदरा,word,m\nस्यंदन,word,m\nऔत्सुक्य,word,m\nअनिऊंर,nonword,z\nटूर्ख,nonword,z\nटिंर,nonword,z\nफिहमना,nonword,z\nटगुधुंध,nonword,z\nशत्फ,nonword,z\nफांथक,nonword,z\nजटिदी,nonword,z\nकाष्ट्रमषा,nonword,z\nतजुकिना,nonword,z\nरौवधात,nonword,z\nकुमुलिड़ी,nonword,z\nअखिश,nonword,z\nबंगाम,nonword,z\nविभोणु,nonword,z\nधांडेर,nonword,z\nप्रतिधाका,nonword,z\nप्रंकन,nonword,z\nउतयंक,nonword,z\nअधिभक,nonword,z\nसंदिष्का,nonword,z\nअपजत,nonword,z\nनिरायना,nonword,z\nविरोश,nonword,z\nबिरौना,nonword,z\nउधति,nonword,z\nअनाकष्ट,nonword,z\nप्रचाहित,nonword,z\nपरिपान,nonword,z\nसमायावसार,nonword,z";

const altStim = [{stim:'निरायना', type:'nonword', corrResp:'z'}, {stim:'सोम', type:'word', corrResp:'m'}, {stim:'कुमुलिड़ी', type:'nonword', corrResp:'z'}, {stim:'पर्ण', type:'word', corrResp:'m'}, {stim:'संदिष्का', type:'nonword', corrResp:'z'}, {stim:'बधिर', type:'word', corrResp:'m'}, {stim:'औत्सुक्य', type:'word', corrResp:'m'}, {stim:'अनाकष्ट', type:'nonword', corrResp:'z'}, {stim:'परिपान', type:'nonword', corrResp:'z'}, {stim:'मूर्छित', type:'word', corrResp:'m'}, {stim:'अंततः', type:'word', corrResp:'m'}, {stim:'समायावसार', type:'nonword', corrResp:'z'}, {stim:'अभ्रक', type:'word', corrResp:'m'}, {stim:'साही', type:'word', corrResp:'m'}, {stim:'स्यंदन', type:'word', corrResp:'m'}, {stim:'प्रतिधाका', type:'nonword', corrResp:'z'}, {stim:'आश्चर्य', type:'word', corrResp:'m'}, {stim:'विशाल', type:'word', corrResp:'m'}, {stim:'शत्फ', type:'nonword', corrResp:'z'}, {stim:'बाह्य', type:'word', corrResp:'m'}, {stim:'समर्पण', type:'word', corrResp:'m'}, {stim:'संदूषण', type:'word', corrResp:'m'}, {stim:'अतीत', type:'word', corrResp:'m'}, {stim:'उधति', type:'nonword', corrResp:'z'}, {stim:'मनुष्य', type:'word', corrResp:'m'}, {stim:'उद्यम', type:'word', corrResp:'m'}, {stim:'अल्प', type:'word', corrResp:'m'}, {stim:'अभ्यागत', type:'word', corrResp:'m'}, {stim:'पोखर', type:'word', corrResp:'m'}, {stim:'प्रंकन', type:'nonword', corrResp:'z'}, {stim:'शोषित', type:'word', corrResp:'m'}, {stim:'कपोल', type:'word', corrResp:'m'}, {stim:'काष्ट्रमषा', type:'nonword', corrResp:'z'}, {stim:'युगल', type:'word', corrResp:'m'}, {stim:'टगुधुंध', type:'nonword', corrResp:'z'}, {stim:'लालायित', type:'word', corrResp:'m'}, {stim:'टिंर', type:'nonword', corrResp:'z'}, {stim:'जटिदी', type:'nonword', corrResp:'z'}, {stim:'विरोश', type:'nonword', corrResp:'z'}, {stim:'भिश्ती', type:'word', corrResp:'m'}, {stim:'अखिश', type:'nonword', corrResp:'z'}, {stim:'रोकड़िया', type:'word', corrResp:'m'}, {stim:'शुश्रूषा', type:'word', corrResp:'m'}, {stim:'द्वार', type:'word', corrResp:'m'}, {stim:'समय', type:'word', corrResp:'m'}, {stim:'अधिभक', type:'nonword', corrResp:'z'}, {stim:'तजुकिना', type:'nonword', corrResp:'z'}, {stim:'दशक', type:'word', corrResp:'m'}, {stim:'विभोणु', type:'nonword', corrResp:'z'}, {stim:'धांडेर', type:'nonword', corrResp:'z'}, {stim:'उपभोग', type:'word', corrResp:'m'}, {stim:'मौसम', type:'word', corrResp:'m'}, {stim:'अवसाद', type:'word', corrResp:'m'}, {stim:'बिरौना', type:'nonword', corrResp:'z'}, {stim:'अपजत', type:'nonword', corrResp:'z'}, {stim:'अनिऊंर', type:'nonword', corrResp:'z'}, {stim:'व्युत्पत्ति', type:'word', corrResp:'m'}, {stim:'प्रचाहित', type:'nonword', corrResp:'z'}, {stim:'सदैव', type:'word', corrResp:'m'}, {stim:'पिपासा', type:'word', corrResp:'m'}, {stim:'निहित', type:'word', corrResp:'m'}, {stim:'पगडंडी', type:'word', corrResp:'m'}, {stim:'समृद्ध', type:'word', corrResp:'m'}, {stim:'टूर्ख', type:'nonword', corrResp:'z'}, {stim:'प्रथा', type:'word', corrResp:'m'}, {stim:'धुंध', type:'word', corrResp:'m'}, {stim:'प्रयोजन', type:'word', corrResp:'m'}, {stim:'भूतल', type:'word', corrResp:'m'}, {stim:'क्रंदन', type:'word', corrResp:'m'}, {stim:'उतयंक', type:'nonword', corrResp:'z'}, {stim:'त्वचा', type:'word', corrResp:'m'}, {stim:'सलहज', type:'word', corrResp:'m'}, {stim:'निष्ठुर', type:'word', corrResp:'m'}, {stim:'भूमिति', type:'word', corrResp:'m'}, {stim:'फिहमना', type:'nonword', corrResp:'z'}, {stim:'नीर', type:'word', corrResp:'m'}, {stim:'सुबकना', type:'word', corrResp:'m'}, {stim:'ऋतु', type:'word', corrResp:'m'}, {stim:'अमुक', type:'word', corrResp:'m'}, {stim:'बंगाम', type:'nonword', corrResp:'z'}, {stim:'रतालू', type:'word', corrResp:'m'}, {stim:'स्वायत्तता', type:'word', corrResp:'m'}, {stim:'रौवधात', type:'nonword', corrResp:'z'}, {stim:'कंदरा', type:'word', corrResp:'m'}, {stim:'मुखाग्नि', type:'word', corrResp:'m'}, {stim:'निष्कासित', type:'word', corrResp:'m'}, {stim:'फांथक', type:'nonword', corrResp:'z'}, {stim:'दंश', type:'word', corrResp:'m'}, {stim:'विस्मय', type:'word', corrResp:'m'}, {stim:'प्रकोप', type:'word', corrResp:'m'}];

var practStim = [{stim:'सुचारु', type:'word', corrResp:'m', dummyItem:'yes'}, {stim:'म्लेच्छ', type:'word', corrResp:'m', dummyItem:'yes'}, {stim:'संगीषुप्त', type:'nonword', corrResp:'z', dummyItem:'yes'}, {stim:'समग्र', type:'word', corrResp:'m', dummyItem:'yes'}, {stim:'अला', type:'nonword', corrResp:'z', dummyItem:'yes'}]

let __count = 0
const __detectInfiniteLoop = () => {
  if (__count > 500) { throw new Error('Infinite Loop detected') }
  __count += 1
}

function pseudoRandom (mystim) {
  var ncW = 0, ncNW = 0;
  make_new = [];
  a = 0;
  while (mystim.length > 0) 
  { item = mystim[Math.floor(Math.random()*mystim.length)];
    //console.log(a, ncW, ncNW)
    if(item.type=='word' && ncW<5) { 
      ncW=ncW+1; ncNW = 0; 
      make_new.push(item);  mystim = mystim.filter(function (item_to_pop) { return item_to_pop !== item}); }
    else if(item.type=='nonword' && ncNW<5) {
      ncNW=ncNW+1; ncW = 0;  
      make_new.push(item);  mystim = mystim.filter(function (item_to_pop) { return item_to_pop !== item}); }
    __detectInfiniteLoop()
  } //console.log("Niket")
    //console.log(stim_obj)
    //console.log(make_new.length)
    //console.log(make_new)
    return make_new
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

/** Download contents as a file
* Source: https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
*/
function downloadBlob(content, filename, contentType) {
  var BOM = new Uint8Array([0xEF,0xBB,0xBF]);
  // Create a blob
  var blob = new Blob([BOM, content], { type: contentType });
  var url = URL.createObjectURL(blob);
  // Create a link to download it
  var pom = document.createElement('a');
  pom.href = url;
  pom.setAttribute('download', filename);
  pom.click();
};

function roundTo(num, roundToDigit) {
    return +(Math.round(num + "e+"+roundToDigit)  + "e-"+roundToDigit);
}

function validateEmail(email) {
  var re = /^\S+@\S+\.\S+$/;
  return re.test(email);
}