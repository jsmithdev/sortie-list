import { LightningElement } from 'lwc';

export default class SortieDemo extends LightningElement {

    list = ''

    array = ['Border Collie', 'Dragon', 'Quokka', 'Kangaroo', 'dan cortese']

    handleChange(event){

        event.detail // is Array of given list in new order set by user

        this.list = event.detail.join(', ')
    }
}