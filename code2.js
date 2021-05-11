gdjs.Level_321_32BossCode = {};
gdjs.Level_321_32BossCode.GDDeadKnightObjects1= [];
gdjs.Level_321_32BossCode.GDDeadKnightObjects2= [];
gdjs.Level_321_32BossCode.GDDeadKnightObjects3= [];
gdjs.Level_321_32BossCode.GDPlayerObjects1= [];
gdjs.Level_321_32BossCode.GDPlayerObjects2= [];
gdjs.Level_321_32BossCode.GDPlayerObjects3= [];
gdjs.Level_321_32BossCode.GDDialogueObjects1= [];
gdjs.Level_321_32BossCode.GDDialogueObjects2= [];
gdjs.Level_321_32BossCode.GDDialogueObjects3= [];
gdjs.Level_321_32BossCode.GDKeyCountObjects1= [];
gdjs.Level_321_32BossCode.GDKeyCountObjects2= [];
gdjs.Level_321_32BossCode.GDKeyCountObjects3= [];
gdjs.Level_321_32BossCode.GDScoreObjects1= [];
gdjs.Level_321_32BossCode.GDScoreObjects2= [];
gdjs.Level_321_32BossCode.GDScoreObjects3= [];
gdjs.Level_321_32BossCode.GDCoinIconObjects1= [];
gdjs.Level_321_32BossCode.GDCoinIconObjects2= [];
gdjs.Level_321_32BossCode.GDCoinIconObjects3= [];
gdjs.Level_321_32BossCode.GDRedKeyIconObjects1= [];
gdjs.Level_321_32BossCode.GDRedKeyIconObjects2= [];
gdjs.Level_321_32BossCode.GDRedKeyIconObjects3= [];
gdjs.Level_321_32BossCode.GDStatisticsObjects1= [];
gdjs.Level_321_32BossCode.GDStatisticsObjects2= [];
gdjs.Level_321_32BossCode.GDStatisticsObjects3= [];
gdjs.Level_321_32BossCode.GDspeedHackTextObjects1= [];
gdjs.Level_321_32BossCode.GDspeedHackTextObjects2= [];
gdjs.Level_321_32BossCode.GDspeedHackTextObjects3= [];
gdjs.Level_321_32BossCode.GDgodModeTextObjects1= [];
gdjs.Level_321_32BossCode.GDgodModeTextObjects2= [];
gdjs.Level_321_32BossCode.GDgodModeTextObjects3= [];
gdjs.Level_321_32BossCode.GDspeedHackOnorOffObjects1= [];
gdjs.Level_321_32BossCode.GDspeedHackOnorOffObjects2= [];
gdjs.Level_321_32BossCode.GDspeedHackOnorOffObjects3= [];
gdjs.Level_321_32BossCode.GDgodModeOnorOffObjects1= [];
gdjs.Level_321_32BossCode.GDgodModeOnorOffObjects2= [];
gdjs.Level_321_32BossCode.GDgodModeOnorOffObjects3= [];
gdjs.Level_321_32BossCode.GDMinotaurObjects1= [];
gdjs.Level_321_32BossCode.GDMinotaurObjects2= [];
gdjs.Level_321_32BossCode.GDMinotaurObjects3= [];
gdjs.Level_321_32BossCode.GDBackgroundObjects1= [];
gdjs.Level_321_32BossCode.GDBackgroundObjects2= [];
gdjs.Level_321_32BossCode.GDBackgroundObjects3= [];
gdjs.Level_321_32BossCode.GDFloorObjects1= [];
gdjs.Level_321_32BossCode.GDFloorObjects2= [];
gdjs.Level_321_32BossCode.GDFloorObjects3= [];
gdjs.Level_321_32BossCode.GDDoorObjects1= [];
gdjs.Level_321_32BossCode.GDDoorObjects2= [];
gdjs.Level_321_32BossCode.GDDoorObjects3= [];
gdjs.Level_321_32BossCode.GDEnemyRightObjects1= [];
gdjs.Level_321_32BossCode.GDEnemyRightObjects2= [];
gdjs.Level_321_32BossCode.GDEnemyRightObjects3= [];
gdjs.Level_321_32BossCode.GDEnemyLeftObjects1= [];
gdjs.Level_321_32BossCode.GDEnemyLeftObjects2= [];
gdjs.Level_321_32BossCode.GDEnemyLeftObjects3= [];

gdjs.Level_321_32BossCode.conditionTrue_0 = {val:false};
gdjs.Level_321_32BossCode.condition0IsTrue_0 = {val:false};
gdjs.Level_321_32BossCode.condition1IsTrue_0 = {val:false};
gdjs.Level_321_32BossCode.condition2IsTrue_0 = {val:false};
gdjs.Level_321_32BossCode.conditionTrue_1 = {val:false};
gdjs.Level_321_32BossCode.condition0IsTrue_1 = {val:false};
gdjs.Level_321_32BossCode.condition1IsTrue_1 = {val:false};
gdjs.Level_321_32BossCode.condition2IsTrue_1 = {val:false};


gdjs.Level_321_32BossCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_321_32BossCode.GDPlayerObjects1, gdjs.Level_321_32BossCode.GDPlayerObjects2);


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
gdjs.Level_321_32BossCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_321_32BossCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDPlayerObjects2[k] = gdjs.Level_321_32BossCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDPlayerObjects2.length = k;}if ( gdjs.Level_321_32BossCode.condition0IsTrue_0.val ) {
{
gdjs.Level_321_32BossCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "x"));
}}
if (gdjs.Level_321_32BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDPlayerObjects2[i].setAnimationName("Idle");
}
}}

}


{

/* Reuse gdjs.Level_321_32BossCode.GDPlayerObjects1 */

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32BossCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDPlayerObjects1[k] = gdjs.Level_321_32BossCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDPlayerObjects1.length = k;}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


};gdjs.Level_321_32BossCode.eventsList1 = function(runtimeScene) {

{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
{gdjs.Level_321_32BossCode.conditionTrue_1 = gdjs.Level_321_32BossCode.condition0IsTrue_0;
gdjs.Level_321_32BossCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11917180);
}
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}}

}


};gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDMinotaurObjects2Objects = Hashtable.newFrom({"Minotaur": gdjs.Level_321_32BossCode.GDMinotaurObjects2});gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDEnemyRightObjects2Objects = Hashtable.newFrom({"EnemyRight": gdjs.Level_321_32BossCode.GDEnemyRightObjects2});gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDMinotaurObjects2Objects = Hashtable.newFrom({"Minotaur": gdjs.Level_321_32BossCode.GDMinotaurObjects2});gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDEnemyLeftObjects2Objects = Hashtable.newFrom({"EnemyLeft": gdjs.Level_321_32BossCode.GDEnemyLeftObjects2});gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDMinotaurObjects2Objects = Hashtable.newFrom({"Minotaur": gdjs.Level_321_32BossCode.GDMinotaurObjects2});gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_321_32BossCode.GDPlayerObjects2});gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_321_32BossCode.GDPlayerObjects2});gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDMinotaurObjects2Objects = Hashtable.newFrom({"Minotaur": gdjs.Level_321_32BossCode.GDMinotaurObjects2});gdjs.Level_321_32BossCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Level_321_32BossCode.GDPlayerObjects2 */

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
gdjs.Level_321_32BossCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_32BossCode.GDPlayerObjects2[i].isCurrentAnimationName("Attack") ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDPlayerObjects2[k] = gdjs.Level_321_32BossCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDPlayerObjects2.length = k;}if ( gdjs.Level_321_32BossCode.condition0IsTrue_0.val ) {
{
{gdjs.Level_321_32BossCode.conditionTrue_1 = gdjs.Level_321_32BossCode.condition1IsTrue_0;
gdjs.Level_321_32BossCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11055420);
}
}}
if (gdjs.Level_321_32BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDMinotaurObjects2 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].returnVariable(gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].getVariables().getFromIndex(0)).sub(10);
}
}}

}


};gdjs.Level_321_32BossCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_321_32BossCode.GDMinotaurObjects1, gdjs.Level_321_32BossCode.GDMinotaurObjects2);


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].getVariableString(gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].getVariables().getFromIndex(1)) == "Left" ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDMinotaurObjects2[k] = gdjs.Level_321_32BossCode.GDMinotaurObjects2[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDMinotaurObjects2.length = k;}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDMinotaurObjects2 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].addForce(-(40), 0, 0);
}
}}

}


{

gdjs.copyArray(gdjs.Level_321_32BossCode.GDMinotaurObjects1, gdjs.Level_321_32BossCode.GDMinotaurObjects2);


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].getVariableString(gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].getVariables().getFromIndex(1)) == "Right" ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDMinotaurObjects2[k] = gdjs.Level_321_32BossCode.GDMinotaurObjects2[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDMinotaurObjects2.length = k;}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDMinotaurObjects2 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].addForce(40, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyRight"), gdjs.Level_321_32BossCode.GDEnemyRightObjects2);
gdjs.copyArray(gdjs.Level_321_32BossCode.GDMinotaurObjects1, gdjs.Level_321_32BossCode.GDMinotaurObjects2);


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDMinotaurObjects2Objects, gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDEnemyRightObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDMinotaurObjects2 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].returnVariable(gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].getVariables().getFromIndex(1)).setString("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyLeft"), gdjs.Level_321_32BossCode.GDEnemyLeftObjects2);
gdjs.copyArray(gdjs.Level_321_32BossCode.GDMinotaurObjects1, gdjs.Level_321_32BossCode.GDMinotaurObjects2);


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDMinotaurObjects2Objects, gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDEnemyLeftObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDMinotaurObjects2 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].returnVariable(gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].getVariables().getFromIndex(1)).setString("Left");
}
}}

}


{

gdjs.copyArray(gdjs.Level_321_32BossCode.GDMinotaurObjects1, gdjs.Level_321_32BossCode.GDMinotaurObjects2);

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects2);

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDMinotaurObjects2Objects, gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDPlayerObjects2Objects, 350, false);
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDMinotaurObjects2 */
/* Reuse gdjs.Level_321_32BossCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].addForceTowardObject((gdjs.Level_321_32BossCode.GDPlayerObjects2.length !== 0 ? gdjs.Level_321_32BossCode.GDPlayerObjects2[0] : null), 60, 0);
}
}{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].setY(216);
}
}}

}


{

gdjs.copyArray(gdjs.Level_321_32BossCode.GDMinotaurObjects1, gdjs.Level_321_32BossCode.GDMinotaurObjects2);

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects2);

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDPlayerObjects2Objects, gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDMinotaurObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDMinotaurObjects2 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).add(1);
}
}
{ //Subevents
gdjs.Level_321_32BossCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Level_321_32BossCode.GDMinotaurObjects1, gdjs.Level_321_32BossCode.GDMinotaurObjects2);


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length;i<l;++i) {
    if ( gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) >= 10 ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDMinotaurObjects2[k] = gdjs.Level_321_32BossCode.GDMinotaurObjects2[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDMinotaurObjects2.length = k;}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDMinotaurObjects2 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].setAnimationName("Attack");
}
}{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects2.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].returnVariable(gdjs.Level_321_32BossCode.GDMinotaurObjects2[i].getVariables().getFromIndex(2)).setNumber(0);
}
}}

}


{

/* Reuse gdjs.Level_321_32BossCode.GDMinotaurObjects1 */

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
gdjs.Level_321_32BossCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDMinotaurObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32BossCode.GDMinotaurObjects1[i].getVariableNumber(gdjs.Level_321_32BossCode.GDMinotaurObjects1[i].getVariables().getFromIndex(0)) <= 0 ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDMinotaurObjects1[k] = gdjs.Level_321_32BossCode.GDMinotaurObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDMinotaurObjects1.length = k;}if ( gdjs.Level_321_32BossCode.condition0IsTrue_0.val ) {
{
{gdjs.Level_321_32BossCode.conditionTrue_1 = gdjs.Level_321_32BossCode.condition1IsTrue_0;
gdjs.Level_321_32BossCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10882772);
}
}}
if (gdjs.Level_321_32BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDMinotaurObjects1 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects1[i].setAnimationName("Dead");
}
}}

}


};gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321_32BossCode.GDPlayerObjects1});gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDDeadKnightObjects1Objects = Hashtable.newFrom({"DeadKnight": gdjs.Level_321_32BossCode.GDDeadKnightObjects1});gdjs.Level_321_32BossCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("DeadKnight"), gdjs.Level_321_32BossCode.GDDeadKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects1);

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
gdjs.Level_321_32BossCode.condition1IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDPlayerObjects1Objects, gdjs.Level_321_32BossCode.mapOfGDgdjs_46Level_95321_9532BossCode_46GDDeadKnightObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level_321_32BossCode.condition0IsTrue_0.val ) {
{
gdjs.Level_321_32BossCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}}
if (gdjs.Level_321_32BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDDialogueObjects1 */
{gdjs.dialogueTree.startFrom("Start");
}{for(var i = 0, len = gdjs.Level_321_32BossCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDDialogueObjects1[i].hide(false);
}
}}

}


};gdjs.Level_321_32BossCode.eventsList5 = function(runtimeScene) {

{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), "textScroll");
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "textScroll");
}}

}


};gdjs.Level_321_32BossCode.eventsList6 = function(runtimeScene) {

{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EnemyLeft"), gdjs.Level_321_32BossCode.GDEnemyLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyRight"), gdjs.Level_321_32BossCode.GDEnemyRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Minotaur"), gdjs.Level_321_32BossCode.GDMinotaurObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "POL-combat-plan-short.wav", true, 4, 1);
}{for(var i = 0, len = gdjs.Level_321_32BossCode.GDEnemyRightObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDEnemyRightObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32BossCode.GDEnemyLeftObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDEnemyLeftObjects1[i].hide();
}
}{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "BossDialogue.json");
}{for(var i = 0, len = gdjs.Level_321_32BossCode.GDMinotaurObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDMinotaurObjects1[i].returnVariable(gdjs.Level_321_32BossCode.GDMinotaurObjects1[i].getVariables().getFromIndex(0)).setNumber(100);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Sec");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level_321_32BossCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321_32BossCode.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects1);

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32BossCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDPlayerObjects1[k] = gdjs.Level_321_32BossCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDPlayerObjects1.length = k;}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321_32BossCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects1);

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
gdjs.Level_321_32BossCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321_32BossCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDPlayerObjects1[k] = gdjs.Level_321_32BossCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDPlayerObjects1.length = k;}if ( gdjs.Level_321_32BossCode.condition0IsTrue_0.val ) {
{
gdjs.Level_321_32BossCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "x"));
}}
if (gdjs.Level_321_32BossCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDPlayerObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects1);

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32BossCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDPlayerObjects1[k] = gdjs.Level_321_32BossCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDPlayerObjects1.length = k;}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDPlayerObjects1[i].setAnimationName("Running");
}
}}

}


{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects1);

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32BossCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDPlayerObjects1[k] = gdjs.Level_321_32BossCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDPlayerObjects1.length = k;}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}
{ //Subevents
gdjs.Level_321_32BossCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects1);

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32BossCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDPlayerObjects1[k] = gdjs.Level_321_32BossCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDPlayerObjects1.length = k;}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321_32BossCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDPlayerObjects1[i].setAnimationName("Jumping");
}
}}

}


{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
gdjs.Level_321_32BossCode.condition1IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
}if ( gdjs.Level_321_32BossCode.condition0IsTrue_0.val ) {
{
{gdjs.Level_321_32BossCode.conditionTrue_1 = gdjs.Level_321_32BossCode.condition1IsTrue_0;
gdjs.Level_321_32BossCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11923620);
}
}}
if (gdjs.Level_321_32BossCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDPlayerObjects1[i].setAnimationName("Attack");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Minotaur"), gdjs.Level_321_32BossCode.GDMinotaurObjects1);

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDMinotaurObjects1.length;i<l;++i) {
    if ( !(gdjs.Level_321_32BossCode.GDMinotaurObjects1[i].isCurrentAnimationName("Dead")) ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDMinotaurObjects1[k] = gdjs.Level_321_32BossCode.GDMinotaurObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDMinotaurObjects1.length = k;}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321_32BossCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Minotaur"), gdjs.Level_321_32BossCode.GDMinotaurObjects1);

gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
gdjs.Level_321_32BossCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDMinotaurObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32BossCode.GDMinotaurObjects1[i].hasAnimationEnded() ) {
        gdjs.Level_321_32BossCode.condition0IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDMinotaurObjects1[k] = gdjs.Level_321_32BossCode.GDMinotaurObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDMinotaurObjects1.length = k;}if ( gdjs.Level_321_32BossCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321_32BossCode.GDMinotaurObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32BossCode.GDMinotaurObjects1[i].isCurrentAnimationName("Dead") ) {
        gdjs.Level_321_32BossCode.condition1IsTrue_0.val = true;
        gdjs.Level_321_32BossCode.GDMinotaurObjects1[k] = gdjs.Level_321_32BossCode.GDMinotaurObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32BossCode.GDMinotaurObjects1.length = k;}}
if (gdjs.Level_321_32BossCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End Screen", false);
}}

}


{



}


{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = !(gdjs.dialogueTree.isRunning());
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Level_321_32BossCode.GDDialogueObjects1);
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDDialogueObjects1[i].hide();
}
}
{ //Subevents
gdjs.Level_321_32BossCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.dialogueTree.isDialogueLineType("text");
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.Level_321_32BossCode.GDDialogueObjects1);
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDDialogueObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDDialogueObjects1[i].setString(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.Level_321_32BossCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("TRUE");
}}

}


{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321_32BossCode.GDPlayerObjects1);
{runtimeScene.getVariables().getFromIndex(0).setString("TRUE");
}{for(var i = 0, len = gdjs.Level_321_32BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(gdjs.Level_321_32BossCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").getAcceleration() + (200));
}
}{for(var i = 0, len = gdjs.Level_321_32BossCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(gdjs.Level_321_32BossCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").getMaxSpeed() + (200));
}
}}

}


{



}


{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score")));
}}

}


{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Sec");
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Statistics"), gdjs.Level_321_32BossCode.GDStatisticsObjects1);
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDStatisticsObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDStatisticsObjects1[i].setString("Time Spent Playing:" + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Time"))));
}
}}

}


{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == -(1);
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Statistics"), gdjs.Level_321_32BossCode.GDStatisticsObjects1);
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDStatisticsObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDStatisticsObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Statistics"), gdjs.Level_321_32BossCode.GDStatisticsObjects1);
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDStatisticsObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDStatisticsObjects1[i].setOpacity(255);
}
}}

}


{


gdjs.Level_321_32BossCode.condition0IsTrue_0.val = false;
{
gdjs.Level_321_32BossCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
}if (gdjs.Level_321_32BossCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).mul(-(1));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("godModeOnorOff"), gdjs.Level_321_32BossCode.GDgodModeOnorOffObjects1);
gdjs.copyArray(runtimeScene.getObjects("speedHackOnorOff"), gdjs.Level_321_32BossCode.GDspeedHackOnorOffObjects1);
{for(var i = 0, len = gdjs.Level_321_32BossCode.GDgodModeOnorOffObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDgodModeOnorOffObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.Level_321_32BossCode.GDspeedHackOnorOffObjects1.length ;i < len;++i) {
    gdjs.Level_321_32BossCode.GDspeedHackOnorOffObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


};

gdjs.Level_321_32BossCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321_32BossCode.GDDeadKnightObjects1.length = 0;
gdjs.Level_321_32BossCode.GDDeadKnightObjects2.length = 0;
gdjs.Level_321_32BossCode.GDDeadKnightObjects3.length = 0;
gdjs.Level_321_32BossCode.GDPlayerObjects1.length = 0;
gdjs.Level_321_32BossCode.GDPlayerObjects2.length = 0;
gdjs.Level_321_32BossCode.GDPlayerObjects3.length = 0;
gdjs.Level_321_32BossCode.GDDialogueObjects1.length = 0;
gdjs.Level_321_32BossCode.GDDialogueObjects2.length = 0;
gdjs.Level_321_32BossCode.GDDialogueObjects3.length = 0;
gdjs.Level_321_32BossCode.GDKeyCountObjects1.length = 0;
gdjs.Level_321_32BossCode.GDKeyCountObjects2.length = 0;
gdjs.Level_321_32BossCode.GDKeyCountObjects3.length = 0;
gdjs.Level_321_32BossCode.GDScoreObjects1.length = 0;
gdjs.Level_321_32BossCode.GDScoreObjects2.length = 0;
gdjs.Level_321_32BossCode.GDScoreObjects3.length = 0;
gdjs.Level_321_32BossCode.GDCoinIconObjects1.length = 0;
gdjs.Level_321_32BossCode.GDCoinIconObjects2.length = 0;
gdjs.Level_321_32BossCode.GDCoinIconObjects3.length = 0;
gdjs.Level_321_32BossCode.GDRedKeyIconObjects1.length = 0;
gdjs.Level_321_32BossCode.GDRedKeyIconObjects2.length = 0;
gdjs.Level_321_32BossCode.GDRedKeyIconObjects3.length = 0;
gdjs.Level_321_32BossCode.GDStatisticsObjects1.length = 0;
gdjs.Level_321_32BossCode.GDStatisticsObjects2.length = 0;
gdjs.Level_321_32BossCode.GDStatisticsObjects3.length = 0;
gdjs.Level_321_32BossCode.GDspeedHackTextObjects1.length = 0;
gdjs.Level_321_32BossCode.GDspeedHackTextObjects2.length = 0;
gdjs.Level_321_32BossCode.GDspeedHackTextObjects3.length = 0;
gdjs.Level_321_32BossCode.GDgodModeTextObjects1.length = 0;
gdjs.Level_321_32BossCode.GDgodModeTextObjects2.length = 0;
gdjs.Level_321_32BossCode.GDgodModeTextObjects3.length = 0;
gdjs.Level_321_32BossCode.GDspeedHackOnorOffObjects1.length = 0;
gdjs.Level_321_32BossCode.GDspeedHackOnorOffObjects2.length = 0;
gdjs.Level_321_32BossCode.GDspeedHackOnorOffObjects3.length = 0;
gdjs.Level_321_32BossCode.GDgodModeOnorOffObjects1.length = 0;
gdjs.Level_321_32BossCode.GDgodModeOnorOffObjects2.length = 0;
gdjs.Level_321_32BossCode.GDgodModeOnorOffObjects3.length = 0;
gdjs.Level_321_32BossCode.GDMinotaurObjects1.length = 0;
gdjs.Level_321_32BossCode.GDMinotaurObjects2.length = 0;
gdjs.Level_321_32BossCode.GDMinotaurObjects3.length = 0;
gdjs.Level_321_32BossCode.GDBackgroundObjects1.length = 0;
gdjs.Level_321_32BossCode.GDBackgroundObjects2.length = 0;
gdjs.Level_321_32BossCode.GDBackgroundObjects3.length = 0;
gdjs.Level_321_32BossCode.GDFloorObjects1.length = 0;
gdjs.Level_321_32BossCode.GDFloorObjects2.length = 0;
gdjs.Level_321_32BossCode.GDFloorObjects3.length = 0;
gdjs.Level_321_32BossCode.GDDoorObjects1.length = 0;
gdjs.Level_321_32BossCode.GDDoorObjects2.length = 0;
gdjs.Level_321_32BossCode.GDDoorObjects3.length = 0;
gdjs.Level_321_32BossCode.GDEnemyRightObjects1.length = 0;
gdjs.Level_321_32BossCode.GDEnemyRightObjects2.length = 0;
gdjs.Level_321_32BossCode.GDEnemyRightObjects3.length = 0;
gdjs.Level_321_32BossCode.GDEnemyLeftObjects1.length = 0;
gdjs.Level_321_32BossCode.GDEnemyLeftObjects2.length = 0;
gdjs.Level_321_32BossCode.GDEnemyLeftObjects3.length = 0;

gdjs.Level_321_32BossCode.eventsList6(runtimeScene);
return;

}

gdjs['Level_321_32BossCode'] = gdjs.Level_321_32BossCode;
