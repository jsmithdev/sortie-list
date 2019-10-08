import { LightningElement, api, track } from 'lwc';

export default class SortieList extends LightningElement {

    @api list

    @track currentList

    connectedCallback(){
        
        if(!this.currentList){
            this.currentList = [...this.list]
        }
    }

    handleDragStart(event) {
        
        event.target.classList.add('dragStartClass')
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/html', event.target.textContent)
    }

    handleDragEnter(event) {
        
        if(event.target.classList){
            event.target.classList.add('over') // this / e.target is the current hover target.
        }
    }

    handleDragOver(event) {
        
        event.preventDefault()

        event.target.classList.add('over')

        event.dataTransfer.dropEffect = 'move'  // See the section on the DataTransfer object.

        return false
    }

    handleDragLeave(event) {
        
        if(event.target.classList){
            event.target.classList.remove('over'); // this / e.target is previous target element.
        }
    }

    handleDrop(event) {

        event.stopPropagation()
        
        this.handleOrder(event)
    }

    handleDragEnd(event) {
        event.target.classList.remove('over')
    }
    preventDefault(event){
        return event.preventDefault()
    }

    handleOrder(event) {

        const elements = this.template.querySelectorAll('.listItem')
        const name_dragged = this.template.querySelector('.dragStartClass').textContent
        const name_event = event.target.textContent

        if(name_dragged === name_event){ return false }

        const index_below = this.currentList.indexOf(name_event)
        const index_dragged = index_below

        this.currentList = this.currentList.reduce((acc, curr, index) => {
            
            if(index === index_dragged){
                return [...acc, name_dragged, curr]
            }
            else if(curr !== name_dragged){
                return [...acc, curr]
            }
            return acc
        }, [])

        elements.forEach(element => {
            element.classList.remove('over')
            element.classList.remove('dragStartClass')
        })

        this.dispatchEvent(new CustomEvent('change', {
            detail: this.currentList
        }))

        return this.currentList
    }
}