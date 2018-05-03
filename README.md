# CSV to HTML Table

Display a csv file in an html table

##Usage
```
CsvToHtml.boot({
    csv_path: 'data/DemographicData.csv', 
    element: 'table', 
    paging:false,
    ordering:false,
    datatableoption:'{paging:true,ordering:true}',
});
```

csv_path: 'the path to the csv file'
element: 'the id of the container'
paging: 'true/false of the paging (default:true)'
ordering: 'true/false of the ordering (default:true)'
datatableoption: 'other option to feed the datatable function'[a link](https://datatables.net/)



