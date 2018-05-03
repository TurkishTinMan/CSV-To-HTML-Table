var CsvToHtml = CsvToHtml || {};

CsvToHtml = {
    boot: function (options) {
        var csv_path = options.csv_path;
        var el = options.element;
        var paging = options.paging;
        if (typeof paging === 'undefined'){
            paging = true;   
        }
        
        var ordering = options.ordering;
        if (typeof ordering === 'undefined'){
            ordering = true;   
        }

        var datatableoption = options.datatableoption || {};
        datatableoption["paging"] = paging;
        datatableoption["ordering"] = ordering;
        

        $.ajax({
            type: "GET",
            url: csv_path,
        }).done(function(result) {
            var data = "<table class='table table-striped table-bordered'>";
            var rows = result.split("\n");
            $( rows ).each(function( index ) {
                if (index == 0){
                    data += '<thead>';  
                }
                data += '<tr>';  
                if(rows[index].indexOf('"') > -1){
                    rows[index] = rows[index].replace(/\"(.[^"]*?),(.[^"]*?)\"/g,'$1&#44;$2');
                }
                var col = rows[index].split(",");
                $( col ).each(function( index ) {
                    data += '<td>'+col[index]+'</td>'; 
                });
                data += '</tr>';  
                if (index == 0){
                    data += '</thead>';  
                }
            });

            data += '</table>';  
            $("#"+el+"").html( data );
            
            console.log(datatableoption)
            $("#"+el+" table").DataTable(datatableoption);

        });
    }
}