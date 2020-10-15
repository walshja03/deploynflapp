
//pull in data from outputfile.js which corresponds to my chosen model
tableData = resultsdata
//save the size for use in the filters js
var size = tableData.length

//Populate table with data from my model on initial load
tableData.forEach(function (playerrating) {

    var row = d3.select("tbody").append("tr");
    Object.values(playerrating).forEach(v => {
        // console.log(v);
        row.append("td").text(v);
    })
})

//List of attributes that a model can be run by
var optdata = ['ExcludeZeroFPTS','pickNum','Conf','Class','Age', 
'Wt', 'Forty', 'Vertical', 'BenchReps', 'BroadJump', 'ThreeCone', 'Shuttle',
'careerRec', 'careerRecYds', 'careerYPC', 'careerRecTds',
'careerTotalYds', 'careerTotalTds','dr_1Rec', 'dr_1RecYds',
'dr_1YPC', 'dr_1RecTds', 'dr_1TotalYds',  'dr_1TotalTds',
 'dr_2Rec', 'dr_2RecYds', 'dr_2YPC', 'dr_2RecTds',
'dr_2TotalYds', 'dr_2YPT', 'dr_2TotalTds']

var labels = ['Exclude Busts','Draft Pick Number','Conference','Class (ie: Junior)','Age',
'Weight', '40 Yd Dash', 'Vertical', 'Bench Reps', 'Broad Jump', 'Three Cone Drill', 'Shuttle Run',
'Career Receptions', 'Career Rec Yds', 'Career YPC', 'Career Rec TDs',
'Career Total Yds', 'Career Total TDs','Final Season Receptions', 'Final Season Rec Yds',
'Final Season YPC', 'Final Season Reception TDs', 'Final Season Total Yds', 'Final Season Total TDs',
'Penultimate Season Receptions', 'Penultimate Season Rec Yds', 'Penultimate Season YPC', 'Penultimate Season Rec TDs',
'Penultimate Season Total Yds', 'Penultimate Season YPT', 'Penultimate Season Total TDs']
//append a list of option to the create a model page on initial load
var list = d3.select(".panel-body").append("dl");
list.selectAll("input")
    .data(optdata)
    .enter()
    .append('dt')
        .attr('value', function (d, i) { return d; })
        .text(function (d,i) { return `${labels[i]}  `; })
    .append("input")
        .property("checked", false)
        .attr("type", "checkbox")
        .attr("id", function (d, i) { return d; })



