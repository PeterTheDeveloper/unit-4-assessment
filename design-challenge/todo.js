class User {
  constructor(user) {
      this.user = user;
      this.list = []; // of strings
      this.completedTasks = [];
  }
  deleteTask(taskIndex) {
      this.list.splice(taskIndex, 1);
      return `Task Deleted`
  }
  addTask(taskString) {
      this.list.push(taskString);
      return `'${taskString}' was added to your List`
  }
  completeTask(taskIndex) {
      let holder = this.list[taskIndex]; // hold it
      this.list.splice(taskIndex, 1); // delete original
      this.completedTasks.push(holder); // push to completedTasks
      return 'Task Completed' // confirm
  }
}
