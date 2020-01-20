import interact from 'interactjs'

function importMovement () {

  function dragMoveListener (event) {
    console.log('dragMoveListener');
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    // update the position attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  window.dragMoveListener = dragMoveListener
  
  interact('.draggable')
    .draggable({
      inertia: false,
      // keep the element within the area of it's parent
      restrict: {
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      },
      // enable autoScroll
      autoScroll: true,

      onstart: function (event) {
        console.log('onstart');
      },
      // call this function on every dragmove event
      onmove: dragMoveListener,
      // call this function on every dragend event
      onend: function (event) {
        console.log('onend');
                // var textEl = event.target.querySelector('p');

                // textEl && (textEl.textContent =
                //    'moved a distance of '
                //    + (Math.sqrt(event.dx * event.dx +
                //        event.dy * event.dy)|0) + 'px');
      }
    });

    interact('.resize-drag')
    .resizable({
      // resize from all edges and corners
      edges: { left: true, right: true, bottom: true, top: true },
  
      modifiers: [
        // keep the edges inside the parent
        interact.modifiers.restrictEdges({
          outer: 'parent'
        }),
  
        // minimum size
        interact.modifiers.restrictSize({
          min: { width: 50, height: 50 }
        })
      ],
  
      inertia: false
    })
    .draggable({
      onmove: window.dragMoveListener,
      inertia: false,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ]
    })
    .on('resizemove', function (event) {
      var target = event.target
      var x = (parseFloat(target.getAttribute('data-x')) || 0)
      var y = (parseFloat(target.getAttribute('data-y')) || 0)
  
      // update the element's style
      target.style.width = event.rect.width + 'px'
      target.style.height = event.rect.height + 'px'
  
      // translate when resizing from top or left edges
      x += event.deltaRect.left
      y += event.deltaRect.top
  
      target.style.webkitTransform = target.style.transform =
          'translate(' + x + 'px,' + y + 'px)'
  
      target.setAttribute('data-x', x)
      target.setAttribute('data-y', y)
      // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
    })
}

export default importMovement;