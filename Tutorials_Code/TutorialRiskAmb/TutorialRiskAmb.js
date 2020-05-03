$(document).ready(function () {
   
    
    var Init = (new Date()).getTime();
    
    var NumTrials = 10;//Number of trials
    var SubID = CreateCode();// random code for each participant

    var SumVec=[5,8,20,50,125]; // conditions in our experiments - levels of sums of money
    var RiskVec=[25,50,75];//levels of risk
    var AmbVec=[25,50,75];//levels of ambiguity
    
    // We now fill in the arrays containing the different information for each trial - sum, risk, ambiguity. We want each condition to occur twice.   
    var Order = [];
    var RiskTrial=[];
    var AmbiguityTrial=[];
    var SumTrial=[];


    for (i = 0; i < 5; i++) {
        for (j=0;j<3;j++){
            RiskTrial.push(0);
            AmbiguityTrial.push(AmbVec[j]);
            SumTrial.push(SumVec[i]);
        }     
    }
    
    for (i = 0; i < 5; i++) {
        for (j=0;j<3;j++){
            AmbiguityTrial.push(0);
            RiskTrial.push(RiskVec[j]);
            SumTrial.push(SumVec[i]);
    }     
    }
    
         for (i = 0; i < 5; i++) {
        for (j=0;j<3;j++){
            RiskTrial.push(0);
            AmbiguityTrial.push(AmbVec[j]);
            SumTrial.push(SumVec[i]);
        }     
    }
    
    for (i = 0; i < 5; i++) {
        for (j=0;j<3;j++){
            AmbiguityTrial.push(0);
            RiskTrial.push(RiskVec[j]);
            SumTrial.push(SumVec[i]);
    }     
    }
    


//now we set the order - we take an array 0-Numtrials and shuffle it
    for (i = 0; i < 60; i++) {
        Order.push(i);
    }
    
    Order = Shuffle(Order);
    
    // for debuging we can put information on the console
     console.log('Order: '+Order)
    // We can also present information using alert
   //  alert('Ambiguity shuffled: '+ AmbiguityTrial[Order[0]])
    
    

   // Initiating the survey js module, if you use one
    Survey.StylesManager.applyTheme("bootstrap");

    // Initial Display Parameters
    // Initial Display Parameters
    var thisHeight = $(document).height() * 0.9;
   
    $('#Main').addClass('container')



 Information();//Start with welcome screen
//SurveyPageDetails();
    


    function Information() {


        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

        CreateDiv('Stage', 'TextBoxDiv');


        var Html1 = ' <div class="container">\n\
 <div class="row">\n\
            <div class="col-md-12 text-center">\n\
 <div class="page-header">\n\
<h2>Welcome to the lottery experiment, it&#39s nice to meet you!</h2><h4>First, some information about the experiment:</h4>\n\
                </div>\n\
                 <div class="row">\n\
                       <div class="col-md-10 col-md-offset-1 text-left">\n\
                                           <p >This study has been approved by the Univeristy of Haifa, Faculty of Social Sciences Research Ethics Committee as Project ID Number: #####<br>\n\
Name, address and contact details of investigators:<br>\n\
Uri Hertz<br>\n\
Department of Cognitive Sciences <br>\n\
University of Haifa<br>\n\
Haifa, Israel 31905<br>\n\
uhertz@cog.haifa.ac.il<br>\n\
<br>\n\
We would like to invite you to participate in this research project. You should only participate if you want to; choosing not to take part will not disadvantage you in any way. Before you decide whether you want to take part, please read the following information carefully and discuss it with others if you wish. Ask us if there is anything that is not clear or you would like more information.<br>\n\
In this experiment you will see some simple objects on the screen. You will be asked to use your mouse or keyboard to make a decision between two options regarding the objects you saw. You will also be asked to answer some simple questions about yourself and about your experience of the tasks. Full instructions will be provided before the experiment begins. There are no anticipated risks or benefits associated with participation in this study. Data collected in this experiment may be used for scientific publication and presentations, after anonymization and removal of all identifiable details.<br>\n\
It is up to you to decide whether or not to take part. If you choose not to participate, you won&#39t incur any penalties or lose any benefits to which you might have been entitled. However, if you do decide to take part, you can print out this information sheet and you will be asked to fill out a consent form on the next page. Even after agreeing to take part, you can still withdraw at any time and without giving a reason.<br>\n\
Participants in our experiment must be over 18 years of age, with no substantial neurological or psychiatric disease.<br>\n\
                                           </p></div>\n\
                       </div>\n\
            </div>\n\
        </div></div>';



        $('#TextBoxDiv').html(Html1);

        var Buttons = '<div align="center"><input align="center" type="button"  class="btn btn-primary btn-lg" id="toConsent" value="Next" ></div>';
        $('#Bottom').html(Buttons);

        $('#toConsent').click(function () {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            Consent();
        });
    }


    function Consent() {//consent page, there is also an option to add mturk ID to this page


        $('#Top').css('height', thisHeight / 20);
        // $('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

        CreateDiv('Stage', 'TextBoxDiv');

        var Html1 = ' <div class="container">\n\
 <div class="row">\n\
            <div class="col-md-12 text-center">\n\
 <div class="page-header">\n\
<h2>Consent Form</h2>\n\
                </div>\n\
                 <div class="row">\n\
                       <div class="col-md-9 col-md-offset-1 text-left">\n\
                                           <p >Thank you for your interest in taking part in this research. If you have any questions arising from the Information Page that you have already seen, please contact the experimenter before you decide whether to continue. You can go back to the Information Page by clicking the &apos;Back&apos; button below.<br>\n\
</p>\n\
<form data-toggle="validator" role="form" id="ConsentForm">\n\
Please confirm the following:\n\
 <div class="form-group">\n\
    <div class="checkbox">\n\
      <label>\n\
        <input type="checkbox" id="terms" data-error="Please tick all the boxes." required>\n\
        I have read the information page.\n\
      </label>\n\
      <div class="help-block with-errors"></div>\n\
    </div>\n\
     <div class="checkbox">\n\
      <label>\n\
        <input type="checkbox" id="terms" data-error="Please tick all the boxes." required>\n\
        I have had the opportunity to contact the researcher to ask questions and discuss the study.\n\
      </label>\n\
      <div class="help-block with-errors"></div>\n\
    </div>\n\
     <div class="checkbox">\n\
      <label>\n\
        <input type="checkbox" id="terms" data-error="Please tick all the boxes." required>\n\
       I have received satisfactory answers to my questions or have been advised of an individual to contact for answers to pertinent questions about the research and my rights as a participant.\n\
      </label>\n\
      <div class="help-block with-errors"></div>\n\
    </div>\n\
     <div class="checkbox">\n\
      <label>\n\
        <input type="checkbox" id="terms" data-error="Please tick all the boxes." required>\n\
        I understand that I am free to withdraw at any time, without giving a reason, and without incurring any penalty.\n\
      </label>\n\
      <div class="help-block with-errors"></div>\n\
    </div>\n\
        <div class="checkbox">\n\
      <label>\n\
        <input type="checkbox" id="terms" data-error="Please tick all the boxes." required>\n\
       I am over 18 years of age.\n\
      </label>\n\
      <div class="help-block with-errors"></div>\n\
    </div>\n\
  </div>\n\
  <div class="form-group">\n\
 <div class="form-group col-sm-3"></div>\n\
  <div class="form-group col-sm-6">\n\
   <label for="CodeBox" class="control-label">Amazon Worker ID</label>\n\
    <input type="text" class="form-control" id="CodeBox" required>\n\
  </div>\n\
<div class="form-group col-sm-3"></div>\n\
</div>\n\
<div class="form-group col-sm-12" align="center">\n\
<button type="button" class="btn btn-primary btn-lg" id="ToInformation">Back</button>\n\
    <button type="submit" class="btn btn-primary btn-lg">Submit</button>\n\
  </div>\n\
        </div>\n\
                       </div>\n\
            </div>\n\
        </div></div>';


        $('#TextBoxDiv').html(Html1);


        var form = document.getElementById('ConsentForm');
        if (form.attachEvent) {
            form.attachEvent("submit", processForm);
        } else {
            form.addEventListener("submit", processForm);
        }

        function processForm(e) {
            if (e.preventDefault)
                e.preventDefault();

            var ThusForm = document.getElementById('ConsentForm');
           var thisCode = ThusForm.elements[5].value;
         
            

            $('#TextBoxDiv').remove();
            $('#CheckAlert').remove();
            $('#Stage').empty();
             SurveyPageDetails();
            /*$.ajax({
                type: 'POST',
                data: {
                    thisCode: thisCode,
                    ID: SubID
                },
                async: false,
                url: 'CheckSubCode.php',
                dataType: 'json',
                success: function (r) {
                    //alert(r)
                    if (r[0].ErrorNo > 0) {

                        Duplicate(6);
                    } else {
                        SurveyPageDetails();
                    };
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);
                }
            });*/
          

            return false;
        }


        $('#ToInformation').click(function () {
            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            Information();
        });
    }





function SurveyPageDetails(){
      console.log('SurveyDetails');
 
        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
       // $('#Stage').css('width', DispWidth);
        $('#Bottom').css('min-height', thisHeight / 20);  
    
       


    
    var JsonDetails =  JSON.parse(JSON.stringify(DemogJson));
       console.log(JsonDetails)
/*$.ajax({
    'async': false,
    'global': false,
    'url': "jsons/DemogJson.json",
    'dataType': "json",
    'success': function (data) {
        console.log(JsonDetails)
        JsonDetails = data;
    }
});
    */

    
    var survey_details = new Survey.Model(JsonDetails);
   console.log(survey_details)
    
$("#Stage").Survey({
    model: survey_details,
    onComplete: InsertDemog
});

    
}
    
    
    
    
    function InsertDemog(survey) {
            $('#TextBoxDiv').remove();
            $('#Stage').empty();
           //send Ajax request to your web server.
var Json1=[survey.data]

var csv = ConvertToCSV_quest(Json1)

console.log("The results are:" +csv)
     Instructions(1);

/*      $.ajax({
                type: 'POST',
                data: {ID:SubID,Responses:csv},
                async: false,
                url: 'InsertDemogData.php',
                dataType: 'json',
                success: function(r) {
                    if (r[0].ErrorNo > 0) {
                        Error();
                    } else {
                        $('#Stage').empty();
            $('#Bottom').empty();
                   Instructions(1);
                           
                    }
                    ;
                }, error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);
                }
            });*/

    }
    
    
    
     function ConvertToCSV_quest(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    var num = index.match(/\d+/g);
                    if (line != '') line += ','
console.log(num)
                  
                    line += array[i][index];
                  
                }

                str += line + '\r\n';
            }

            return line;
        }
    
    
    

    
    

    
    
    
    
    function Instructions(PageNum) {
        console.log('Instructions');

        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('min-height', thisHeight * 17 / 20);

        $('#Bottom').css('min-height', thisHeight / 20);

        var NumPages = 4; //number of pages

        CreateDiv('Stage', 'TextBoxDiv');

        var Title = '\n\
 <div class="row">\n\
            <div class="col-md-12 text-center">\n\
 <div class="page-header">\n\
<h2>Instructions</h2>\n\
                </div></div>';

        var Pre = '\n\
 <div class="row">\n\
            <div class="col-md-10 col-md-offset-1 text-left">';
        var Post = '</div> </div>';
        var ThisImage = '';
        switch (PageNum) {

            case 1:
                var Info = '<p class="lead">In this game you will be asked to make a series of choices between two options. On one side you will have a sure amount of 5$  and on the other side you will have a lottery option in which you either win some money or gain nothing. </p>';


                break;
                 case 2:
                var Info = '<p class="lead">All lotteries have some probability of gaining money, indicated by the blue slice, and some probability of gaining nothing, indicated by the orange slice. <br>Here is a lottery with a 75% chance of gaining 125$, compared with 100% chance of gaining 5$. </p>';


                break;
                
           case 3:
                var Info = '<p class="lead">Some lotteries have a part of them covere by a gray obstacle, so it is not possible to see exactly the ratio of blue and red . <br>Here is a lottery which is half covered, with some probability to gain 8$, compared with 100% chance of gaining 5$..</p>';


                break;
                case 4:
                var Info = '<p class="lead">Please consider which option you prefer on each trial carefully, the 5$ for sure or the lottery.<br> There are 60 choices in this experiment. You make a choice by clicking the mouse on the preferred lottery.</p>';

           
                break;
                
            default:
                var Info;
                break;
        };

 var ThisImage = '<div class="row" align = "center"> <div class="col-md-3 "></div><div class="col-md-6"><img class= "img-fluid" src="images/Inst' + PageNum + '.png" alt="house" align="center" width = 100%></div></div>';

        $('#TextBoxDiv').html(Title + Pre + Info + ThisImage + Post);

        var Buttons = '<div align="center"><input align="center" type="button"  class="btn btn-primary  btn-lg" id="Back" value="Back" >\n\
<input align="center" type="button"  class="btn btn-primary  btn-lg" id="Next" value="Next" >\n\
<input align="center" type="button"  class="btn btn-primary  btn-lg" id="Start" value="Start!" ></div>';

        $('#Bottom').html(Buttons);


        if (PageNum === 1) {
            $('#Back').hide();
        };
        if (PageNum === NumPages) {
            $('#Next').hide();
        };
        if (PageNum < NumPages) {
            $('#Start').hide();
        };

        $('#Back').click(function () {
            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            Instructions(PageNum - 1);

        });

        $('#Next').click(function () {
            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            Instructions(PageNum + 1);
        });

        $('#Start').click(function () {
            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            Init = (new Date()).getTime();

            setTimeout(function () {

                            Experiment(0);

                        }, 500);
        });
    }


 function Experiment(TrialNum) {

console.log(TrialNum)
        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

       var  InitTime = (new Date()).getTime();

     $('#Stage').append('<div class="row"> <div class="col-md-3"></div>  <div id= "progressBarFrame" class="col-md-6 nopadding"></div> </div>')
   

     $('#progressBarFrame').css({ "height": thisHeight / 32 + 'px', "background-color": "grey"});
    $('#progressBarFrame').show();
              var thisWidth = $('#progressBarFrame').width() ;

    CreateDiv('progressBarFrame', 'progressBar');
    $('#progressBar').css({"width": ((TrialNum+1) * thisWidth / (NumTrials)) + 'px', "height": thisHeight / 32 + 'px', "background-color": "#A4DE78"});

    $('#progressBar').show();
     
     
        CreateDiv('Stage', 'TextBoxDiv');

        var Title = '<div id = "Title"><H2 align = "center">Choose your preferred option:</H2></div>';
     var DoorName='tmp';
     var Press=0;

    if (AmbiguityTrial[Order[TrialNum]]>0){// ambiguity Trial
                       DoorName='amb_'+AmbiguityTrial[Order[TrialNum]]+'.png';
    }else{//Risk  trial
        DoorName='risk_'+RiskTrial[Order[TrialNum]]+'.png'; 
    }

        
        var Door1 = '<img id = "Door1" src="images/sure.png" class="img-responsive center-block myborder"  >';
        var Door2 = '<img id = "Door2" src="images/'+DoorName+'" class="img-responsive center-block myborder" >';
        var Sum1 = '5$';
        var Sum2 = SumTrial[Order[TrialNum]]+'$';

        var RandPosition = Math.random();
        if (RandPosition < 0.5) {
            var Images = '<div class="row">  <div class="col-md-1"></div>  <div class="col-md-3">' + Door1 + '</div><div id = "Middle" class="col-md-4"></div><div class="col-md-3">' + Door2 + '</div><div class="col-md-1"></div></div>';
             var Sums = '<div class="row">  <div class="col-md-1"></div>  <div class="col-md-3"><h2 align = "center">' + Sum1 + '</h2></div><div id = "Middle" class="col-md-4"></div><div class="col-md-3"><h2 align = "center">' + Sum2 + '</h2></div><div class="col-md-1"></div></div>';
        } else {
            var Images = '<div class="row">  <div class="col-md-1"> </div> <div class="col-md-3">' + Door2 + '</div><div  id = "Middle"  class="col-md-4"></div><div class="col-md-3">' + Door1 + '</div><div class="col-md-1"></div></div>';
             var Sums = '<div class="row">  <div class="col-md-1"></div>  <div class="col-md-3"><h2 align = "center">' + Sum2 + '</h2></div><div id = "Middle" class="col-md-4"></div><div class="col-md-3"><h2 align = "center">' + Sum1 + '</h2></div><div class="col-md-1"></div></div>';

        }

        $('#TextBoxDiv').html(Title + Images+Sums);

        $('#Door1').click(function() {
            if (Press===0){
                Press=1;
            $(this).css({"border-color": "#CCFF33",
                "border-width": "3px",
                "border-style": "solid"});
       var  ThisTime = (new Date()).getTime();

            InsertData(TrialNum, 1,Sign(RandPosition-0.5),ThisTime-InitTime);
            }
        });
        $('#Door2').click(function() {
             if (Press===0){
                Press=1;
            $(this).css({"border-color": "#CCFF33",
                "border-width": "3px",
                "border-style": "solid"});

  var  ThisTime = (new Date()).getTime();
            InsertData(TrialNum, 2,Sign(0.5-RandPosition),ThisTime-InitTime);
             }
        });

    }
    
    

    function InsertData(TrialNum, Choice,Side,RT) {

                 if (TrialNum + 1 < NumTrials) {
           //  InsertDataAjax(TrialNum,Choice,Side,RT);   
                setTimeout(function() {
                    $('#TextBoxDiv').fadeOut(500);
                    setTimeout(function() {
                        $('#Stage').empty();
                        $('#Bottom').empty();
                        Experiment(TrialNum + 1);
                    }, 750);
                }, 1000);
            } else {
               // InsertDataAjax(TrialNum,Choice,Side,RT);    
                setTimeout(function() {
                    $('#TextBoxDiv').fadeOut(500);
                    setTimeout(function() {
                        $('#Stage').empty();
                        $('#Bottom').empty();
                        End();
                    }, 750);
                }, 1000);            
            }
    }
    
    
    function InsertDataAjax(TrialNum,Choice,Side,RT){
          var  ThisTime = (new Date()).getTime();
        console.log(RiskTrial[Order[TrialNum]])

        
      $.ajax({
                type: 'POST',
                data: {ID:SubID,TrialNum:TrialNum,Choice:Choice,Side:Side,RT:RT,Amb:AmbiguityTrial[Order[TrialNum]],Risk:RiskTrial[Order[TrialNum]],Catch:CatchTrial[Order[TrialNum]],Sum:SumTrial[Order[TrialNum]],Time:ThisTime},
                async: false,
                url: 'InsertTrialData.php',
                dataType: 'json',
                success: function(r) {
                    if (r[0].ErrorNo > 0) {
                        Error();
                    } 
                }, error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("Status: " + textStatus);
                    alert("Error: " + errorThrown);
                }
            });
        
    }
    
       
    
    function End() {
        console.log('End');

        $('.Stage').empty();
        $('.Stage').show();
        $('.Top').css('height', thisHeight / 12);
        $('.Stage').css('min-height', thisHeight * 11 / 12);
        $('.Bottom').css('min-height', thisHeight / 20);
        $('.Stage').show();

        var ThisHTML = '<div >\n\
 <div class="row">\n\
            <div class="col-md-12 text-center">\n\
 <div class="page-header ">\n\
<h2>Well done, you have finished the experiment!</h2>\n\
\n\
<h2> Your completion code is:' + SubID + '\n\
<h1>Thank you for participating!</h1>\n\
</div>\n\
</div>\n\
</div>\n\
</div>';


        $('.Stage').html(ThisHTML);


        var startTime = (new Date()).getTime();

        /*$.ajax({
            type: 'POST',
            data: {
                SubID: SubID
            },

            async: false,
            url: 'FinishCode.php',
            dataType: 'json',
            success: function (r) {

            }
        });*/


    }


    function Duplicate() {
        $('.Stage').empty();
        $('.Stage').show();
        $('.Top').css('width', thisHeight / 2);
        $('.Top').css('height', thisHeight / 12);
        $('.Stage').css('width', ConfWidth);
        $('.Stage').css('min-height', thisHeight * 11 / 12);
        $('.Bottom').css('min-height', thisHeight / 20);
        $('.Stage').show();

        var ThisHTML = '<div >\n\
 <div class="row">\n\
            <div class="col-md-12 text-center">\n\
 <div class="page-header ">\n\
<h2>Sorry, but it appears you already participated in this study or similar ones.</h2>\n\
<h2>If you have any enquiries please contact us:\n\
<h2>uhertz@is.haifa.ac.il</h2>\n\
</div>\n\
</div>\n\
</div>\n\
</div>';


        $('.Stage').html(ThisHTML);



    }
    //Utility Functions


    function Sign(x) {
        return x > 0 ? 1 : x < 0 ? -1 : 0;
    };


    function CreateCode() {
        return Math.floor(Math.random() * 10000000000);
    };

    function CreateDiv(ParentID, ChildID) {

        var d = $(document.createElement('div'))
            .attr("id", ChildID);
        var container = document.getElementById(ParentID);

        d.appendTo(container);
    };

    function Shuffle(array) {

        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

  

});