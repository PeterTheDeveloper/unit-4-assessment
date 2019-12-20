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
      let holder = this.list[taskIndex];
      this.list.splice(taskIndex, 1);
      this.completedTasks.push(holder);
      return 'Task Completed'
  }
}

//Above does not include

class Lists {
   constructor(user) {
      this.user == user;
   }
   newList()
}