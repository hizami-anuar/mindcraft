import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import ListItem from './ListItem.js';

import './SortableComponent.css';

const SortableItem = SortableElement(({value, index}) => <li className='SortableComponent-listItem'><ListItem index={value.index+1} image={value.value.image} name={value.value.name}/></li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul id='items'>
      {items.map((value, index) => (
        <SortableItem key={`sortableItem-${value.key}`} value={{value: value, index: index}} index={index} />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  state = {

  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.props.reorderObjects(oldIndex, newIndex);
  };

  render() {
    return(
      <>
        {this.props.editable ? (
          <SortableList items={this.props.objects} onSortEnd={this.onSortEnd} />
        ) : (
          <ul id='items' className='SortableComponent-list'>
          {this.props.objects.map((value, index) => (
            <li key={`sortableItem-${value.key}`} className='SortableComponent-listItem'><ListItem index={index+1} image={value.image} name={value.name}/></li>
          ))}
          </ul>
        )}
      </>
    );
  }
}

export default SortableComponent;;