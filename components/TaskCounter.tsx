import React, { Component } from 'react';

interface TaskCounterProps {
  tasks: string[];
}

class TaskCounter extends Component<TaskCounterProps> {
    
  render() {
    const { tasks } = this.props;
    return (
      <p className="task-counter">
        Total Tasks: {tasks.length}
      </p>
    );
  }
}

export default TaskCounter;
