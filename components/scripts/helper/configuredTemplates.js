import ConfigureElement from "./classConfigureElement.js";

export const resetSelectionAreaTemplate = new ConfigureElement(),
  resetContextMenuTemplate = new ConfigureElement(),
  modifiedContextMenuTemplate = new ConfigureElement();

resetSelectionAreaTemplate.add("backgroundColor", "rgba(0,0,0,0.3)");
resetSelectionAreaTemplate.add("border", "1px solid black");

modifiedContextMenuTemplate.add("backdropFilter", "blur(4px)");
modifiedContextMenuTemplate.add("backgroundColor", "rgba(26, 26, 26, 0.7)");
modifiedContextMenuTemplate.add("border", "1px solid black");
modifiedContextMenuTemplate.add("borderRadius", "20px");
modifiedContextMenuTemplate.add("zIndex", "1000");
modifiedContextMenuTemplate.add("height", "350px");
modifiedContextMenuTemplate.add("width", "250px");
