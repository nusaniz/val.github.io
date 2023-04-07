## Verification System
Sistem ini dibuat sebagai alat bantu untuk verifikasi keaslian sertifikat.

## Persiapan
- Spreadsheet
- AppScript
- Github (hosting)

## A. Spreadsheet
- Struktur
- ![image](https://user-images.githubusercontent.com/67667654/230601448-d6cfb747-0c18-41a5-a846-78bab98d8b7e.png)

## B. AppScript
- index.html
```html
<!DOCTYPE html>
<html>
<title>CodyLab</title>
<base target="_top">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<style>
.loader {
  margin: 0 auto;
  /* margin-left:45%; */
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.tg  {border-collapse:collapse;border-spacing:0;width:600px;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<body>
<div id="lod" class="w3-modal">
<div class="w3-center">
<div class="loader"></div>
</div>
</div>
<?!= include('js'); ?>




    <style>
        .box {
            /* background: aquamarine; */
            max-width: 600px;
            margin: 0 auto;
            padding: 1rem;
        }
    </style>
    <section style="margin-top:3rem;">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="box">
                        <h4 class="text-center">Ilmu Komunikasi - FDK UINSA Surabaya</h4>
                        <form id="lab" class="text-center" onsubmit="event.preventDefault();subm(this)">
                            <label for="inputSertifikat"
                                class="col-8 col-sm-8 col-md-6 col-lg-4 col-xxl-6 col-form-label">Nomor
                                Sertifikat:</label>
                            <div class="col-8 col-sm-8 col-md-6 row-cols-lg-6 col-xxl-6" style="margin: 0 auto;">
                                <input type="text" name="roll" class="form-control" id="inputPassword" value="EV/FDK-UINSASBY/06042023002">
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mt-3 mb-3">Check IN</button>
                                <!-- <input type="submit" class="mt-2 btn btn-primary"> -->
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>




    <section>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div id='PrintDiv'>
                        <div id="rs" class="w3-margin-top text-align-center col-xxl-4" style="text-align:center;max-width:500px;margin:0 auto;"></div>
                    </div>
                    <!-- <input type="button" name="btnprint" value="Print" onclick="Print('PrintDiv')" /> -->
                </div>
            </div>
        </div>
    </section>


<p class="mt-3 text-center">Copyright Nizar</p>



<!-- <div id='PrintDiv'> 
<div id="rs"class="w3-margin-top text-align-center" style="text-align:center;"></div>
</div>
<input type="button" name="btnprint" value="Print" onclick="Print('PrintDiv')"/> -->


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>
```

- kode.gs
```
function doGet(e){
  var x = HtmlService.createTemplateFromFile("index");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
                    //  .evaluate()
                    //  setTitle("CodyLab");

  // return HtmlService.createTemplateFromFile("index")
  //                    .evaluate()
  //                    .setTitle("CodyLab");
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function sub(v){
  // Koneksi ID Spreadsheet
  var ss = SpreadsheetApp.openById("1foLrt5fhL8fydJqU9ug5kGnV-b5jTcg6aJb3taeR9lw");

  // Koneksi Sheet Tab
  var sheet = ss.getSheetByName("Sheet5");

  var  flag  =  1 ;

  // Identifier (data kata kunci pencarian)
  // Kata kunci pencarian adalah kolom B (2)
  // Kolom B (2), dimulai dari baris ke-2 (i,2)
  // col B - Nomor Sertifikat
  var lr = sheet.getLastRow();
      for(var i = 2;i <= lr;i++){
  if(v.roll == sheet.getRange(i, 2).getValue()){
      flag = 0;

// Mengambil data kolom pada sheet
// Header      
var tt = sheet.getRange(1, 2).getValue(); // No
var h1 = sheet.getRange(1, 3).getValue(); // Peserta
var h2 = sheet.getRange(1, 5).getValue(); // Status
var h3 = sheet.getRange(1, 6).getValue(); // Kode
var h4 = sheet.getRange(1, 7).getValue(); // As
var h5 = sheet.getRange(1, 8).getValue();  
var h6 = sheet.getRange(1, 9).getValue();  
var h7 = sheet.getRange(1, 10).getValue();
// Data
var b1 = sheet.getRange(i, 1).getValue(); // col A - Timestamp
var b1 = sheet.getRange(i, 3).getValue(); // col C - Peserta
var b2 = sheet.getRange(i, 4).getValue(); // col D - Status
var b3 = sheet.getRange(i, 5).getValue(); // col E - Kode
var m1 = sheet.getRange(i, 6).getValue(); // col F - As
var m2 = sheet.getRange(i, 6).getValue();  
var m3 = sheet.getRange(i, 7).getValue();  
var m4 = sheet.getRange(i, 8).getValue();  
var m5 = sheet.getRange(i, 9).getValue();  
var m6 = sheet.getRange(i, 10).getValue();


// A timestamp 1
// B nosertif 2
// C nama 3
// D status 4
// E kode 5
// F sebagai 6

  
  var lo = "https://www.pngitem.com/pimgs/m/436-4365026_ibps-logo-hd-png-download-png-download-ibps.png";

  // Eksekusi Peengembalian Hasil Pencarian (default)
  var data ='<table class="tg"><thead><tr><th class="tg-0pky"><img src='+lo+' height="50px"width="50px"></th><th class="tg-0pky" colspan="5"><h4>'+tt+'</h4></th></tr></thead><tbody><tr><td class="tg-0pky">Roll No.</td><td class="tg-0pky">'+v.roll+'</td><td class="tg-0pky">Name:</td><td class="tg-0pky"colspan="3">'+b1+'</td></tr><tr><td class="tg-0pky"colspan="6">Results:</td></tr><tr><td class="tg-0pky">slr.</td><td class="tg-0pky">Competition</td><td class="tg-0pky">Maximum score</td><td class="tg-0pky">CutOff Score</td><td class="tg-0pky">Obtained Score</td><td class="tg-0pky">Remarks</td></tr><tr><td class="tg-0pky">1.</td><td class="tg-0pky">Reasoning</td><td class="tg-0pky">'+h2+'</td><td class="tg-0pky">11.50</td><td class="tg-0pky">'+m1+'</td><td class="tg-0pky">qualified</td></tr><tr><td class="tg-0pky">2.</td><td class="tg-0pky">General awareness</td><td class="tg-0pky">'+h3+'</td><td class="tg-0pky">17.10</td><td class="tg-0pky">'+m2+'</td><td class="tg-0pky">qualified</td></tr><tr><td class="tg-0pky">3.</td><td class="tg-0pky">Computer knowledge</td><td class="tg-0pky">'+h4+'</td><td class="tg-0pky">29.20</td><td class="tg-0pky">'+m3+'</td><td class="tg-0pky">qualified</td></tr><tr><td class="tg-0pky">4.</td><td class="tg-0pky">English</td><td class="tg-0pky">'+h5+'</td><td class="tg-0pky">23.50</td><td class="tg-0pky">'+m4+'</td><td class="tg-0pky">not qualified</td></tr><tr><td class="tg-0pky">5.</td><td class="tg-0pky">Hindi</td><td class="tg-0pky">'+h6+'</td><td class="tg-0pky">-</td><td class="tg-0pky">'+m5+'</td><td class="tg-0pky">-</td></tr><tr><td class="tg-0pky">6.</td><td class="tg-0pky">Quantitative aptitude</td><td class="tg-0pky">'+h7+'</td><td class="tg-0pky">30.10</td><td class="tg-0pky">'+m6+'</td><td class="tg-0pky">qualified</td></tr></tbody><tfooter><tr><td class="tg-0pky"colspan="2">Total</td><td class="tg-0pky">'+h1+'</td><td class="tg-0pky">111.4</td><td class="tg-0pky">'+b2+'</td><td class="tg-0pky"></td></tr></tfooter></table>*Not secured cutoff score of English language, whereever necessary.';

  // Eksekusi Peengembalian Hasil Pencarian (modifikasi)
var cekdong = '<p>Saudara/i <strong>'+b1+'</strong> '+b2+' dengan nomor <strong>'+v.roll+'</strong> dalam roll '+b3+' sebagai '+m2;
return cekdong;

  return data;
    }
   }
     if(flag==1){
  var data ="Tidak Terdaftar";
      return data;
    } 
    };
```

- js.html
```
<script>
function subm(v){
  document.getElementById('lod').style.display='block';
  google.script.run.withFailureHandler(fail)
                     .withSuccessHandler(pass)
                     .sub(v);}                    
  
function fail(v){
document.getElementById('lod').style.display='none';
document.getElementById("rs").innerHTML = v;}
function pass(v){
document.getElementById('lod').style.display='none';
document.getElementById("rs").innerHTML = v;
document.getElementById("lab").reset();}
</script>
<script>
   function Print(DivID) {
   var iPrint = document.getElementById(DivID).innerHTML;
   var docprint=window.open("","");
   docprint.document.open();
   docprint.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"');
   docprint.document.write('<head><meta name="viewport"
 content="width=device-width, initial-scale=1.0">');
   docprint.document.write('<title>Print</title>');
   docprint.document.write('<style type="text/css">@page {size:auto;margin:0.2em;}');
   docprint.document.write('table,td{ border:1px dashed red;}</style>');

   docprint.document.write('</head><center><body onLoad="self.print()">');
   docprint.document.write(iPrint);
   docprint.document.write('</body></center></html>');
   docprint.document.close();
   docprint.focus();
}
</script> 
```
