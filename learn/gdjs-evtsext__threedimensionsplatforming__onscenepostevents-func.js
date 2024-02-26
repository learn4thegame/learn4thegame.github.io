
if (typeof gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents = {};


gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents.userFunc0x10a1190 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._MousePointerLockExtension.movement = { x: 0, y: 0 };
};
gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents.userFunc0x10a1190(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__ThreeDimensionsPlatforming__onScenePostEvents.registeredGdjsCallbacks.length - 1]);