gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDDeadKnightObjects1= [];
gdjs.Main_32MenuCode.GDDeadKnightObjects2= [];
gdjs.Main_32MenuCode.GDPlayerObjects1= [];
gdjs.Main_32MenuCode.GDPlayerObjects2= [];
gdjs.Main_32MenuCode.GDDialogueObjects1= [];
gdjs.Main_32MenuCode.GDDialogueObjects2= [];
gdjs.Main_32MenuCode.GDKeyCountObjects1= [];
gdjs.Main_32MenuCode.GDKeyCountObjects2= [];
gdjs.Main_32MenuCode.GDScoreObjects1= [];
gdjs.Main_32MenuCode.GDScoreObjects2= [];
gdjs.Main_32MenuCode.GDCoinIconObjects1= [];
gdjs.Main_32MenuCode.GDCoinIconObjects2= [];
gdjs.Main_32MenuCode.GDRedKeyIconObjects1= [];
gdjs.Main_32MenuCode.GDRedKeyIconObjects2= [];
gdjs.Main_32MenuCode.GDStatisticsObjects1= [];
gdjs.Main_32MenuCode.GDStatisticsObjects2= [];
gdjs.Main_32MenuCode.GDspeedHackTextObjects1= [];
gdjs.Main_32MenuCode.GDspeedHackTextObjects2= [];
gdjs.Main_32MenuCode.GDgodModeTextObjects1= [];
gdjs.Main_32MenuCode.GDgodModeTextObjects2= [];
gdjs.Main_32MenuCode.GDspeedHackOnorOffObjects1= [];
gdjs.Main_32MenuCode.GDspeedHackOnorOffObjects2= [];
gdjs.Main_32MenuCode.GDgodModeOnorOffObjects1= [];
gdjs.Main_32MenuCode.GDgodModeOnorOffObjects2= [];
gdjs.Main_32MenuCode.GDstartButtonObjects1= [];
gdjs.Main_32MenuCode.GDstartButtonObjects2= [];
gdjs.Main_32MenuCode.GDexitButtonObjects1= [];
gdjs.Main_32MenuCode.GDexitButtonObjects2= [];
gdjs.Main_32MenuCode.GDplayTextObjects1= [];
gdjs.Main_32MenuCode.GDplayTextObjects2= [];
gdjs.Main_32MenuCode.GDexitTextObjects1= [];
gdjs.Main_32MenuCode.GDexitTextObjects2= [];
gdjs.Main_32MenuCode.GDtitleTextObjects1= [];
gdjs.Main_32MenuCode.GDtitleTextObjects2= [];
gdjs.Main_32MenuCode.GDtwoKeyObjects1= [];
gdjs.Main_32MenuCode.GDtwoKeyObjects2= [];
gdjs.Main_32MenuCode.GDoneKeyObjects1= [];
gdjs.Main_32MenuCode.GDoneKeyObjects2= [];
gdjs.Main_32MenuCode.GDxKeyObjects1= [];
gdjs.Main_32MenuCode.GDxKeyObjects2= [];
gdjs.Main_32MenuCode.GDfKeyObjects1= [];
gdjs.Main_32MenuCode.GDfKeyObjects2= [];
gdjs.Main_32MenuCode.GDleftArrowKeyObjects1= [];
gdjs.Main_32MenuCode.GDleftArrowKeyObjects2= [];
gdjs.Main_32MenuCode.GDrightArrowKeyObjects1= [];
gdjs.Main_32MenuCode.GDrightArrowKeyObjects2= [];
gdjs.Main_32MenuCode.GDspaceKeyObjects1= [];
gdjs.Main_32MenuCode.GDspaceKeyObjects2= [];
gdjs.Main_32MenuCode.GDjumpTextObjects1= [];
gdjs.Main_32MenuCode.GDjumpTextObjects2= [];
gdjs.Main_32MenuCode.GDattackTextObjects1= [];
gdjs.Main_32MenuCode.GDattackTextObjects2= [];
gdjs.Main_32MenuCode.GDinteractTextObjects1= [];
gdjs.Main_32MenuCode.GDinteractTextObjects2= [];
gdjs.Main_32MenuCode.GDdeveloperTextObjects1= [];
gdjs.Main_32MenuCode.GDdeveloperTextObjects2= [];
gdjs.Main_32MenuCode.GDspeedHackTextObjects1= [];
gdjs.Main_32MenuCode.GDspeedHackTextObjects2= [];
gdjs.Main_32MenuCode.GDgodModetextObjects1= [];
gdjs.Main_32MenuCode.GDgodModetextObjects2= [];
gdjs.Main_32MenuCode.GDmoveTextObjects1= [];
gdjs.Main_32MenuCode.GDmoveTextObjects2= [];
gdjs.Main_32MenuCode.GDstatsTextObjects1= [];
gdjs.Main_32MenuCode.GDstatsTextObjects2= [];
gdjs.Main_32MenuCode.GDkKeyObjects1= [];
gdjs.Main_32MenuCode.GDkKeyObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDstartButtonObjects1Objects = Hashtable.newFrom({"startButton": gdjs.Main_32MenuCode.GDstartButtonObjects1});gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDstartButtonObjects1Objects = Hashtable.newFrom({"startButton": gdjs.Main_32MenuCode.GDstartButtonObjects1});gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDexitButtonObjects1Objects = Hashtable.newFrom({"exitButton": gdjs.Main_32MenuCode.GDexitButtonObjects1});gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDexitButtonObjects1Objects = Hashtable.newFrom({"exitButton": gdjs.Main_32MenuCode.GDexitButtonObjects1});gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("startButton"), gdjs.Main_32MenuCode.GDstartButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDstartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDstartButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDstartButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDstartButtonObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("startButton"), gdjs.Main_32MenuCode.GDstartButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDstartButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDstartButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDstartButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDstartButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("exitButton"), gdjs.Main_32MenuCode.GDexitButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDexitButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDexitButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDexitButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDexitButtonObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("exitButton"), gdjs.Main_32MenuCode.GDexitButtonObjects1);

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDexitButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDexitButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDexitButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDexitButtonObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDDeadKnightObjects1.length = 0;
gdjs.Main_32MenuCode.GDDeadKnightObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects2.length = 0;
gdjs.Main_32MenuCode.GDDialogueObjects1.length = 0;
gdjs.Main_32MenuCode.GDDialogueObjects2.length = 0;
gdjs.Main_32MenuCode.GDKeyCountObjects1.length = 0;
gdjs.Main_32MenuCode.GDKeyCountObjects2.length = 0;
gdjs.Main_32MenuCode.GDScoreObjects1.length = 0;
gdjs.Main_32MenuCode.GDScoreObjects2.length = 0;
gdjs.Main_32MenuCode.GDCoinIconObjects1.length = 0;
gdjs.Main_32MenuCode.GDCoinIconObjects2.length = 0;
gdjs.Main_32MenuCode.GDRedKeyIconObjects1.length = 0;
gdjs.Main_32MenuCode.GDRedKeyIconObjects2.length = 0;
gdjs.Main_32MenuCode.GDStatisticsObjects1.length = 0;
gdjs.Main_32MenuCode.GDStatisticsObjects2.length = 0;
gdjs.Main_32MenuCode.GDspeedHackTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDspeedHackTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDgodModeTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDgodModeTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDspeedHackOnorOffObjects1.length = 0;
gdjs.Main_32MenuCode.GDspeedHackOnorOffObjects2.length = 0;
gdjs.Main_32MenuCode.GDgodModeOnorOffObjects1.length = 0;
gdjs.Main_32MenuCode.GDgodModeOnorOffObjects2.length = 0;
gdjs.Main_32MenuCode.GDstartButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDstartButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDexitButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDexitButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDplayTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDplayTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDexitTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDexitTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDtitleTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDtitleTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDtwoKeyObjects1.length = 0;
gdjs.Main_32MenuCode.GDtwoKeyObjects2.length = 0;
gdjs.Main_32MenuCode.GDoneKeyObjects1.length = 0;
gdjs.Main_32MenuCode.GDoneKeyObjects2.length = 0;
gdjs.Main_32MenuCode.GDxKeyObjects1.length = 0;
gdjs.Main_32MenuCode.GDxKeyObjects2.length = 0;
gdjs.Main_32MenuCode.GDfKeyObjects1.length = 0;
gdjs.Main_32MenuCode.GDfKeyObjects2.length = 0;
gdjs.Main_32MenuCode.GDleftArrowKeyObjects1.length = 0;
gdjs.Main_32MenuCode.GDleftArrowKeyObjects2.length = 0;
gdjs.Main_32MenuCode.GDrightArrowKeyObjects1.length = 0;
gdjs.Main_32MenuCode.GDrightArrowKeyObjects2.length = 0;
gdjs.Main_32MenuCode.GDspaceKeyObjects1.length = 0;
gdjs.Main_32MenuCode.GDspaceKeyObjects2.length = 0;
gdjs.Main_32MenuCode.GDjumpTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDjumpTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDattackTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDattackTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDinteractTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDinteractTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDdeveloperTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDdeveloperTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDspeedHackTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDspeedHackTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDgodModetextObjects1.length = 0;
gdjs.Main_32MenuCode.GDgodModetextObjects2.length = 0;
gdjs.Main_32MenuCode.GDmoveTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDmoveTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDstatsTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDstatsTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDkKeyObjects1.length = 0;
gdjs.Main_32MenuCode.GDkKeyObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList2(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
