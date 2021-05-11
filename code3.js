gdjs.End_32ScreenCode = {};
gdjs.End_32ScreenCode.GDDeadKnightObjects1= [];
gdjs.End_32ScreenCode.GDDeadKnightObjects2= [];
gdjs.End_32ScreenCode.GDPlayerObjects1= [];
gdjs.End_32ScreenCode.GDPlayerObjects2= [];
gdjs.End_32ScreenCode.GDDialogueObjects1= [];
gdjs.End_32ScreenCode.GDDialogueObjects2= [];
gdjs.End_32ScreenCode.GDKeyCountObjects1= [];
gdjs.End_32ScreenCode.GDKeyCountObjects2= [];
gdjs.End_32ScreenCode.GDScoreObjects1= [];
gdjs.End_32ScreenCode.GDScoreObjects2= [];
gdjs.End_32ScreenCode.GDCoinIconObjects1= [];
gdjs.End_32ScreenCode.GDCoinIconObjects2= [];
gdjs.End_32ScreenCode.GDRedKeyIconObjects1= [];
gdjs.End_32ScreenCode.GDRedKeyIconObjects2= [];
gdjs.End_32ScreenCode.GDStatisticsObjects1= [];
gdjs.End_32ScreenCode.GDStatisticsObjects2= [];
gdjs.End_32ScreenCode.GDspeedHackTextObjects1= [];
gdjs.End_32ScreenCode.GDspeedHackTextObjects2= [];
gdjs.End_32ScreenCode.GDgodModeTextObjects1= [];
gdjs.End_32ScreenCode.GDgodModeTextObjects2= [];
gdjs.End_32ScreenCode.GDspeedHackOnorOffObjects1= [];
gdjs.End_32ScreenCode.GDspeedHackOnorOffObjects2= [];
gdjs.End_32ScreenCode.GDgodModeOnorOffObjects1= [];
gdjs.End_32ScreenCode.GDgodModeOnorOffObjects2= [];
gdjs.End_32ScreenCode.GDendTextObjects1= [];
gdjs.End_32ScreenCode.GDendTextObjects2= [];
gdjs.End_32ScreenCode.GDplayerScoreObjects1= [];
gdjs.End_32ScreenCode.GDplayerScoreObjects2= [];

gdjs.End_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.End_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.End_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.End_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.End_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.End_32ScreenCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("playerScore"), gdjs.End_32ScreenCode.GDplayerScoreObjects1);
{for(var i = 0, len = gdjs.End_32ScreenCode.GDplayerScoreObjects1.length ;i < len;++i) {
    gdjs.End_32ScreenCode.GDplayerScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


};

gdjs.End_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32ScreenCode.GDDeadKnightObjects1.length = 0;
gdjs.End_32ScreenCode.GDDeadKnightObjects2.length = 0;
gdjs.End_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.End_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.End_32ScreenCode.GDDialogueObjects1.length = 0;
gdjs.End_32ScreenCode.GDDialogueObjects2.length = 0;
gdjs.End_32ScreenCode.GDKeyCountObjects1.length = 0;
gdjs.End_32ScreenCode.GDKeyCountObjects2.length = 0;
gdjs.End_32ScreenCode.GDScoreObjects1.length = 0;
gdjs.End_32ScreenCode.GDScoreObjects2.length = 0;
gdjs.End_32ScreenCode.GDCoinIconObjects1.length = 0;
gdjs.End_32ScreenCode.GDCoinIconObjects2.length = 0;
gdjs.End_32ScreenCode.GDRedKeyIconObjects1.length = 0;
gdjs.End_32ScreenCode.GDRedKeyIconObjects2.length = 0;
gdjs.End_32ScreenCode.GDStatisticsObjects1.length = 0;
gdjs.End_32ScreenCode.GDStatisticsObjects2.length = 0;
gdjs.End_32ScreenCode.GDspeedHackTextObjects1.length = 0;
gdjs.End_32ScreenCode.GDspeedHackTextObjects2.length = 0;
gdjs.End_32ScreenCode.GDgodModeTextObjects1.length = 0;
gdjs.End_32ScreenCode.GDgodModeTextObjects2.length = 0;
gdjs.End_32ScreenCode.GDspeedHackOnorOffObjects1.length = 0;
gdjs.End_32ScreenCode.GDspeedHackOnorOffObjects2.length = 0;
gdjs.End_32ScreenCode.GDgodModeOnorOffObjects1.length = 0;
gdjs.End_32ScreenCode.GDgodModeOnorOffObjects2.length = 0;
gdjs.End_32ScreenCode.GDendTextObjects1.length = 0;
gdjs.End_32ScreenCode.GDendTextObjects2.length = 0;
gdjs.End_32ScreenCode.GDplayerScoreObjects1.length = 0;
gdjs.End_32ScreenCode.GDplayerScoreObjects2.length = 0;

gdjs.End_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['End_32ScreenCode'] = gdjs.End_32ScreenCode;
