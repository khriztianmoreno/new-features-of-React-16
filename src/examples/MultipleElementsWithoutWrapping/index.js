/**
 * @description Render Multiple Elements without a Wrapping Element in a Component in React 16
 * @author Cristian Moreno
 */

import React, { PureComponent } from 'react';

import { RawRows, SumRow, TrendRow, StatsRows } from './utils';

import './style.css';

// Signups per year in 3 different age groups (0-20, 20-40, 40+)
const data = [[14, 24, 125, 182], [10, 122, 220, 310], [0, 19, 38, 50]];

const Fruits = () => [
  <li key="1">Apple</li>,
  <li key="2">Orange</li>,
  <li key="3">Banana</li>
];

class MoreFruits extends PureComponent {
  render() {
    return [<li key="1">Strawberry</li>, <li key="2">Blueberry</li>];
  }
}

export default class MultipleElements extends PureComponent {
  render() {
    return (
      <div>
        <ul>
          <li>Peach</li>
          <li>Ananas</li>
          <Fruits />
          <MoreFruits />
        </ul>
        <table>
          <tbody>
            <RawRows data={data} />
            <StatsRows data={data} />
          </tbody>
        </table>
      </div>
    );
  }
}
