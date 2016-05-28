$(function(){
  var targetTdElementIndex = [0, 1, 3];
  var csvHeader = ["日付", "金額", "店舗名", "カテゴリ", "出金口座"];

  var tableData = [];
  var tr = $("table tbody tr");//テーブルの全行を取得
  for(var i=1 ; i<tr.length-1 ; i++){
  var cells = tr.eq(i).children();//1行目から順番に列を取得(th、td)
  var k = 0;
    for(var j=0 ; j<cells.length ; j++){
      if($.inArray(j,targetTdElementIndex) != -1){
        if( typeof tableData[i-1] == "undefined" ){
          tableData[i-1] = [];
        }
        tableData[i-1][k] = cells.eq(j).text();//i行目j列の文字列を取得
        if(j == 3){
          tableData[i-1][k] = tableData[i-1][k].replace("円","");
          tableData[i-1][k] = tableData[i-1][k].replace(",","");
        }
        k++;
      }
    }
  }

  var exportData = new Array(tableData.length+1);

  exportData[0] = csvHeader;
  for(var i=1 ; i<tableData.length+1 ; i++){
    exportData[i] = [];
    exportData[i][0] = tableData[i-1][0];
    exportData[i][1] = tableData[i-1][2];
    exportData[i][2] = tableData[i-1][1];
    exportData[i][3] = "食費";
    exportData[i][4] = "Yahoo!カード mas******";
  }

  var hoge = exportData;

  var csvString = "";
  for(var i = 0 ; i<exportData.length ; i++){
    for(var j = 0 ; j<exportData[0].length ; j++){
      csvString += exportData[i][j];
      if(j != exportData[0].length - 1){
        csvString += ",";
      }else{
        csvString += "\n";
      }
    }
  }

  console.log(csvString);
});
