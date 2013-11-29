/* ***************************** CONCATENATION OF JS AND CSS FILES ******************************************** */
  
document.write( 
//jQuery CSS and App CSS
    "<link rel='stylesheet' type='text/css' href='./Libraries/jQuery/jquery.mobile-1.3.2.css' />"+
    "<link rel='stylesheet' type='text/css' href='./CSS/style.css'/>"+
    "<link rel='stylesheet' type='text/css' href='./CSS/flat_ui/jquery.mobile.flatui.css'/>"+

//Libraries (seperate folder) 
    //jQuery 
        "<script type='text/javascript' src='./Libraries/jQuery/jquery-1.9.1.js'></script>"+
        "<script type='text/javascript' src='./Libraries/jQuery/jquery-ui.js'></script>"+
        "<script type='text/javascript' src='./Libraries/jQuery/jquery.mobile-1.3.2.js'></script>"+
    //chart.js 
        "<script type='text/javascript' src='./Libraries/chart.js/Chart.min.js'></script>"+

//General Package 
    "<script type='text/javascript' src='./JavaScript/General/Analyse.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/General/Track.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/General/Assign.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/General/Analyse_DrawCharts.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/General/SampleData.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/General/Settings_Edit.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/General/Register.js'></script>"+
  
//Input_Output 
    "<script type='text/javascript' src='./JavaScript/Input_Output/InitDatabase.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/Input_Output/Database_GetSet.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/Input_Output/LocalStorage_GetSet.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/Input_Output/File_Get.js'></script>"+
  
//UI-Elements 
    "<script type='text/javascript' src='./JavaScript/UI-Elements/AllPages.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/UI-Elements/Home_Menu.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/UI-Elements/PatientList.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/UI-Elements/BehaviourList.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/UI-Elements/Track2_Buttons.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/UI-Elements/Assign2_Menu.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/UI-Elements/Analyse1_BehaviourSelection.js'></script>"+
    "<script type='text/javascript' src='./JavaScript/UI-Elements/About_Text.js'></script>"
    

    );
