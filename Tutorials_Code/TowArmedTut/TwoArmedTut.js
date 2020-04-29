$(document).ready(function() {
    //Initial Experiment Parameters

    var NumTrials = 10;
    var P1 = 0.7;
    var P2 = 0.3;
    var SumReward = 0;

    var Init = (new Date()).getTime();

    var SubID = CreateCode();

    // Initial Display Parameters
    var thisHeight = $(document).height() * 0.9;
    var thisWidth = thisHeight * 4 / 3;

    var DispWidth = thisHeight * 5 / 6;
    var DispHeight = DispWidth / 2;

    $('#Main').css('min-height', thisHeight);
    $('#Main').css('width', thisWidth);

    Information();//Start with information sheet


    // Experiment Functions

    function Information() {


        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

        CreateDiv('Stage', 'TextBoxDiv');

        var Title = '<H3 align = "center">Information page for participants in research studies</H3>';
        var Info = 'Here is a lot of information. It is important.';

        $('#TextBoxDiv').html(Title + Info);

        var Buttons = '<div align="center"><input align="center" type="button"  class="btn btn-default" id="toConsent" value="Next" ></div>';
        $('#Bottom').html(Buttons);

        $('#toConsent').click(function() {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            Consent();
        });
    }
    ;

    function Consent() {


        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

        CreateDiv('Stage', 'TextBoxDiv');

        var Title = '<H3 align = "center">Consent form for participants in research studies</H3>';
        var Info = 'Please read the following criteria and tick all boxes. <br><br>';
        var Ticks = '<input type="checkbox" name="consent" value="consent1" id= >I have read the information page<br>' +
                '<input type="checkbox" name="consent" value="consent2">I have had the opportunity to contact the researcher to ask questions and discuss the study<br>' +
                '<input type="checkbox" name="consent" value="consent3">I have received satisfactory answers to my questions or have been advised of an individual to contact for answers to pertinent questions about the research and my rights as a participant<br>' +
                '<input type="checkbox" name="consent" value="consent4">I understand that I am free to withdraw at any time, without giving a reason, and without incurring any penalty<br>' +
                '<input type="checkbox" name="consent" value="consent5">I am over 18 years of age.<br>';

        $('#TextBoxDiv').html(Title + Info + Ticks);

        var Buttons = '<div align="center"><input align="center" type="button"  class="btn btn-default" id="toInstructions" value="Next" ></div>';
        $('#Bottom').html(Buttons);

        $('#toInstructions').click(function() {
            if ($("input:checkbox:not(:checked)").length > 0) {
                alert('You must tick all check boxes to continue.');

            } else {
                $('#TextBoxDiv').remove();
                $('#Stage').empty();
                $('#Bottom').empty();
                Instructions(1);//move to first page of instructions
            }
            ;
        });
    }
    ;

    function Instructions(PageNum) {


        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

        var NumPages = 2;//number of pages
        var PicHeight = DispWidth / 2;

        CreateDiv('Stage', 'TextBoxDiv');

        var Title = '<H2 align = "center">Instructions</H2>';

        switch (PageNum) {
            case 1:
                var Info = '<H3>In this experiment you have to collect as many coins as possible, hidden behind two doors. \n\
On each trial you have to choose between the doors.<br> Each door has some probability of getting a coin. \n\
You chose the door by clicking on it with your mouse.  <br>There are' + NumTrials + ' trials in this experiment.</h3><br><br>';

                break;
            case 2:
                var Info = '<H3>After each decision you will see the outcome – coin or nothing. You will then continue directly\n\
 to the next trial. At the end you will see how many coins you earned.<br>Good luck!</h3><br><br>';

                break;
            default:
                var Info;
                break;
        }
        ;
        var ThisImage = '<div align = "center"><img src="images/Inst' + PageNum + '.png" alt="house" height="' + PicHeight + '" align="center"><br><br></div>';


        $('#TextBoxDiv').html(Title + Info + ThisImage);

        var Buttons = '<div align="center"><input align="center" type="button"  class="btn btn-default" id="Back" value="Back" >\n\
<input align="center" type="button"  class="btn btn-default" id="Next" value="Next" >\n\
<input align="center" type="button"  class="btn btn-default" id="Start" value="Start!" ></div>';

        $('#Bottom').html(Buttons);


        if (PageNum === 1) {
            $('#Back').hide();
        }
        ;
        if (PageNum === NumPages) {
            $('#Next').hide();
        }
        ;
        if (PageNum < NumPages) {
            $('#Start').hide();
        }
        ;


        $('#Back').click(function() {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            Instructions(PageNum - 1);

        });
        $('#Next').click(function() {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            Instructions(PageNum + 1);

        });
        $('#Start').click(function() {

            $('#TextBoxDiv').remove();
            $('#Stage').empty();
            $('#Bottom').empty();
            setTimeout(function() {
                $('#Stage').html('<H1 align = "center">Ready</H1>');
                setTimeout(function() {
                    $('#Stage').html('<H1 align = "center">Steady</H1>');
                    setTimeout(function() {
                        $('#Stage').html('<H1 align = "center">Go!</H1>');
                        setTimeout(function() {
                            $('#Stage').empty();
                            Options(1);//Start with the first trial
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 10);

        });
    }
    ;

    function Options(TrialNum) {


        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

       var  InitTime = (new Date()).getTime();

        CreateDiv('Stage', 'TextBoxDiv');

        var Title = '<div id = "Title"><H2 align = "center">Choose a door:</H2></div>';

        var Door1 = '<img id = "Door1" src="images/Door1.png" class="img-responsive center-block" >';
        var Door2 = '<img id = "Door2" src="images/Door2.png" class="img-responsive center-block" >';

        var RandPosition = Math.random();
        if (RandPosition < 0.5) {
            var Images = '<div class="row">  <div class="col-md-1"></div>  <div class="col-md-3">' + Door1 + '</div><div id = "Middle" class="col-md-4"></div><div class="col-md-3">' + Door2 + '</div><div class="col-md-1"></div></div>';
        } else {
            var Images = '<div class="row">  <div class="col-md-1"> </div> <div class="col-md-3">' + Door2 + '</div><div  id = "Middle"  class="col-md-4"></div><div class="col-md-3">' + Door1 + '</div><div class="col-md-1"></div></div>';

        }

        $('#TextBoxDiv').html(Title + Images);
        var Press=0;
        $('#Door1').click(function() {
            if (Press===0){
                Press=1;
           
            $(this).css({"border-color": "#CCFF33",
                "border-width": "3px",
                "border-style": "solid"});
  var  ThisTime = (new Date()).getTime();

            Reward(TrialNum, 1,Sign(RandPosition-0.5),ThisTime-InitTime);
 }
        });
        $('#Door2').click(function() {
            if (Press===0){
                Press=1;
            $(this).css({"border-color": "#CCFF33",
                "border-width": "3px",
                "border-style": "solid"});
  var  ThisTime = (new Date()).getTime();


            Reward(TrialNum, 2,Sign(0.5-RandPosition),ThisTime-InitTime);
            }
        });

    }

    function Reward(TrialNum, Choice,Side,RT) {

        $('#Title').empty();

        var ThisReward = 0;
        var RandomNum = Math.random();
        if (Choice === 1) {//Door1
            if (RandomNum < P1) {
                ThisReward = 1;
            }
        } else {//Door2
            if (RandomNum < P2) {
                ThisReward = 1;
            }
        }

        if (ThisReward === 1) {//Coin

            $('#Title').html('<H2 align = "center">You got a coin!!</H2>');
            $('#Middle').html('<img id = "Door1" src="images/coin.png" class="img-responsive center-block" >');
            SumReward = SumReward + 1;
          //   InsertDataAjax(TrialNum,Choice,Side,RT,ThisReward)
            if (TrialNum + 1 < NumTrials) {
                setTimeout(function() {
                    $('#TextBoxDiv').fadeOut(500);
                    setTimeout(function() {
                        $('#Stage').empty();
                        $('#Bottom').empty();
                        Options(TrialNum + 1);
                    }, 500);
                }, 1500);
            } else {
                $('#TextBoxDiv').remove();
                $('#Stage').empty();
                $('#Bottom').empty();
                End();

            }

        } else {//no coin

            $('#Title').html('<H2 align = "center">You got nothing...</H2>');
            $('#Middle').html('<img id = "Door1" src="images/frowny.png" class="img-responsive center-block" >');

           //  InsertDataAjax(TrialNum,Choice,Side,RT,ThisReward);
            if (TrialNum + 1 < NumTrials) {
                setTimeout(function() {
                    $('#TextBoxDiv').fadeOut(500);
                    setTimeout(function() {
                        $('#Stage').empty();
                        $('#Bottom').empty();
                        Options(TrialNum + 1);
                    }, 500);
                }, 1500);

            } else {
                $('#TextBoxDiv').remove();
                $('#Stage').empty();
                $('#Bottom').empty();
                End();

            }
        }
    }


    function End() {


        $('#Top').css('height', thisHeight / 20);
        $('#Stage').css('width', DispWidth);
        $('#Stage').css('min-height', thisHeight * 17 / 20);
        $('#Bottom').css('min-height', thisHeight / 20);

        CreateDiv('Stage', 'TextBoxDiv');

        var Title = '<H2 align = "center">You have finished the experiment!<br> <br> You earned '+SumReward+' coins!<br><br> Thanks for participating!</H2>';

        $('#TextBoxDiv').html(Title );

       
    }
    ;

    
    
    
    function InsertDataAjax(TrialNum,Choice,Side,RT,Reward){
          var  ThisTime = (new Date()).getTime();

        
      $.ajax({
                type: 'POST',
                data: {ID:SubID,TrialNum:TrialNum,Choice:Choice,Side:Side,RT:RT,Reward:Reward,Time:ThisTime},
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
    
    

    //Utility Functions
    function CreateCode() {
        return Math.floor(Math.random() * 10000000000);
    }
    ;

    function Sign(x) {
        return x > 0 ? 1 : x < 0 ? -1 : 0;
    };

    function CreateDiv(ParentID, ChildID) {

        var d = $(document.createElement('div'))
                .attr("id", ChildID);
        var container = document.getElementById(ParentID);

        d.appendTo(container);
    }
    ;
});

