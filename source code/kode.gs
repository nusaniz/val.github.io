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

  return cekdong;
    }
   }
     if(flag==1){
  var cekdong ="Tidak Terdaftar";
      return cekdong;
    } 
    };


  // return data;
  //   }
  //  }
  //    if(flag==1){
  // var data ="Tidak Terdaftar";
  //     return data;
  //   } 
  //   };
