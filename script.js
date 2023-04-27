function validate(){
    var origin = d3.select("#orgBtn");
    var destination = d3.select("#dstBtn");

    destination.on("click", function(){
        if(destination.classed("destination")){
            destination.classed("destination", false);
            destination.classed("destinationClicked", true);
            origin.classed("originClicked", false)
                    .classed("origin", true);
        }
    });

    origin.on("click", function(){
        if(origin.classed("origin")){
            origin.classed("origin", false);
            origin.classed("originClicked", true);
            destination.classed("destinationClicked", false)
                        .classed("destination", true);
        }
    });

}


function findDataOnYear(both, male, female){
    var dataset = [];

    d3.csv("https://raw.githubusercontent.com/jastinelaksmono/dumps/main/DVfolder/destinationFull.csv")
    .then(function(rows){

        //var years = rows.columns.slice(0);
        
        var row = [];
        for(i=0; i<rows.length; i++)
        {
            row = [];
            row.push(rows[i][both]);
            row.push(rows[i][male]);
            row.push(rows[i][female]);
            dataset.push(row);
        }
    });

    //console.log(dataset);
    return dataset;
}

function exec(year)
{    
    var dataset;

    console.log("#y" + year);
    dataset = findDataOnYear("b"+year, "m"+year, "f"+year);
    console.log(dataset);
  
}

function getCountries(rows){

    var countries = [];
    for(i=0; i<rows.length; i++)
    {
        countries.push(rows[i].name);
    }
    return countries;
}

function selectYear()
{
    d3.select("#y1990").on("click", function(){
        exec("1990");
    });  

    d3.select("#y1995").on("click", function(){
        exec("1995");
    }); 
}

