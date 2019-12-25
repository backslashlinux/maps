// Render World Copies

var renderOptions = document.getElementById('render_world_copies');
var renderInputs = renderOptions.getElementsByTagName('input');

function switchRenderOption(option) {
    var status = option.target.id;
    map.setRenderWorldCopies(status === 'true');
}

for (var i = 0; i < renderInputs.length; i++) {
    renderInputs[i].onclick = switchRenderOption;
}