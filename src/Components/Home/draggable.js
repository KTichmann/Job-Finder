import { Draggable, Droppable } from '@shopify/draggable';

const makeCardsDraggable = (dropEventFunction) => {
    const droppable = new Droppable(document.querySelectorAll('.dropContainer'), 
        {
            draggable: '.jobCard', 
            dropzone: '.dropContainer',
            appendTo: document.querySelector('.jobCard')
        }
    )
    droppable.on('drag:start', () => {
        document.querySelector('.draggable-source--is-dragging').style.visibility = 'hidden'
    });
    droppable.on('drag:move', () => {
        const mirror = document.querySelector('.draggable-mirror')
        const mirrorClassList = mirror.classList
        mirrorClassList.add('mirrorSizing');
        // if(document.querySelector('.draggable-container--over')){
        //     const containerOverClass = document.querySelector('.draggable-container--over').classList[1];
        //     if(containerOverClass.includes('yes')){
        //         mirror.querySelector('.card').classList.add('rotatedRight')
        //         console.log(mirror.querySelector('.card').classList)
        //     } else if(containerOverClass.includes('no')){
        //         mirror.querySelector('.card').classList.add('rotatedLeft')
        //         console.log(mirror.querySelector('.card').classList)
        //     }
        // }
    });
    droppable.on('drag:stop', () => {
        const userChoiceClassList = document.querySelector('.draggable-container--over').classList;
        if(userChoiceClassList[1].includes('yes')){
            dropEventFunction(1)
            document.querySelector('.draggable-source--is-dragging').remove()
        } else if (userChoiceClassList[1].includes('no')){
            dropEventFunction(0)
            document.querySelector('.draggable-source--is-dragging').remove()
        }
    })
}

export default makeCardsDraggable;