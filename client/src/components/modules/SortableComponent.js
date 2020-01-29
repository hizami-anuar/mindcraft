import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import './SortableComponent.css'

const SortableItem = SortableElement(({value}) => <li><img src={value} className='SortableComponent-listItem' /></li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul id='items'>
      {items.map((value, index) => (
        <SortableItem key={`sortableItem-${value.key}`} index={index} value={value.image} />
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
          <ul id='items'>
          {this.props.objects.map((value, index) => (
            <li><img src={value.image} className='SortableComponent-listItem' /></li>
          ))}
          </ul>
        )}
      </>
    );
  }
}

export default SortableComponent;;