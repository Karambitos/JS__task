$(document).ready(function (){   

    updateDisplay();
    let table = $('table');

    function updateDisplay() {
        var url = "http://uncovid.com/wp-json/cov/mapcases"
        fetch(url).then(function(response) {
            response.json().then(function(response) { 
                console.log(response);
                console.log(dataСonversion(response));
                table.dataTable( {
                    data: dataСonversion(response),
                    columns: [
                        // { title: "ID"},
                        { title: "Date-time" },
                        { title: "Country" },
                        // { title: "Region"},
                        { title: "Cases" },
                        { title: "Deaths" },
                        { title: "Total recovered" },
                        { title: "New cases" },
                        { title: "New deaths" },
                        { title: "Serious critical" },
                        { title: "Total cases per 1m population" },
                        { title: "Active cases" },
                        { title: "TotalCount" },
                        // { title: "lat" },
                        // { title: "long" }
                    ]
                } );
            });
        });
    };


function dataСonversion(response) {
    var dataSet = [];
    response.forEach((value) => {
    dataSet.push([value.statistic_taken_at, value.country_name, value.cases, value.deaths,
    value.total_recovered, value.new_cases, value.new_deaths, value.serious_critical,
    value.total_cases_per_1m_population,value.active_cases, value.TotalCount ]);  
    })
    return dataSet;
}

    // function dataСonversion(response) {
    //     var dataSet = [];
    //     response.forEach((value, item) => {
    //         if ((item[0])){
    //         dataSet.push(Object.values(value));
    //         }
    //     })      dataSet.push([value.statistic_taken_at, value.country_name, ]);

    // return dataSet;
    // }

    // var jqxhr = $.getJSON( "http://uncovid.com/wp-json/cov/mapcases", function() {
    // console.log( "success" );
    // })
    // .done(function(data) {
    //     console.log( "second success" );
    // })
    // .fail(function() {
    //     console.log( "error" );
    // })
    // .always(function() {
    //     console.log( "complete" );
    // });
    // console.log(jqxhr)
});

