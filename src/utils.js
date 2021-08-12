function getDomFromString(str){
    var domEl = document.createElement('div');
    domEl.innerHTML = str;

    return domEl.firstChild;
}

function editDom(cb, wrapWithEditor = true){
    const invisibleButton = document.createElement("button");
    invisibleButton.innerText = "Invisible button";
    invisibleButton.style.display = "none";
    document.body.appendChild(invisibleButton);

    invisibleButton.addEventListener("click", () => {
        const { editDocument } = require("application");

        if(wrapWithEditor){
            editDocument(async (...args) => {
                cb(...args);
            });
        }
        else
            cb();
    });

    invisibleButton.click();

    setTimeout(() => {
        invisibleButton.remove();
    }, 200);
}

function placeInParent(node, coords){
    coords = coords || node.parent.topLeftInParent;
    let nodeBounds = node.localBounds;
    let nodeTopLeft = {x: nodeBounds.x, y: nodeBounds.y};
    node.placeInParentCoordinates(nodeTopLeft, coords);
}

function getDimensions(node) {
    let width, height;
    switch(node.constructor.name) {
        case "Rectangle":
        case "Polygon":
            width = node.width;
            height = node.height;
            break;
        case "Ellipse": 
            width = node.radiusX * 2;
            height = node.radiusY * 2;
            break;
        case "BooleanGroup": // Selecting arbitrary values for path and boolean group
        case "Path": 
            width = 500;
            height = 500;
            break;
        default:
            return null;
    }

    return {
        width, height
    }
}

module.exports = {
    getDomFromString,
    editDom,
    placeInParent,
    getDimensions
}