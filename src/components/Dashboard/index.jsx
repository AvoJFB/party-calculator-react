import React, { Component } from 'react';
import PartyCard from '../PartyCard/index';
import styles from './index.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [
        {
          id: 1,
          name: 'Friday party',
          description: 'This party for fridays only',
          avatarUrl: 'http://static.sfdict.com/editorial-content/55tpbg0qcsp4/1yyCc4qjcMAQGKkSIe0Kqu/42c4df2d9014' +
          '6a9563f66d9cb4140d73/weather_graphic.jpg?w=175&h=148',
        },
        {
          id: 2,
          name: 'Monday party',
          description: 'This party for mondays only, or for tuesdays, or every week',
          avatarUrl: 'http://static.sfdict.com/editorial-content/55tpbg0qcsp4/1yyCc4qjcMAQGKkSIe0Kqu/42c4df2d901' +
          '46a9563f66d9cb4140d73/weather_graphic.jpg?w=175&h=148',
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles['dashboard-container']}>
        {
          this.state.parties.map(party => (
            <PartyCard party={party} key={party.id.toString()} />
          ))
        }
      </div>
    );
  }
}

export default Dashboard;
