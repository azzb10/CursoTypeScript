"use strict";
(function () {
    var Reminder = /** @class */ (function () {
        function Reminder(description, date, notifications) {
            this.id = '';
            this.dateCreated = new Date();
            this.dateUpdated = new Date();
            this.description = '';
            this.date = new Date();
            this.notifications = ['EMAIL'];
            this.description = description;
            this.date = date;
            this.notifications = notifications;
        }
        Reminder.prototype.render = function () {
            return JSON.stringify(this);
        };
        return Reminder;
    }());
    var ToDo = /** @class */ (function () {
        function ToDo(description) {
            this.id = '';
            this.dateCreated = new Date;
            this.dateUpdated = new Date;
            this.description = '';
            this.done = false;
            this.description = description;
        }
        ToDo.prototype.render = function () {
            return JSON.stringify(this);
        };
        return ToDo;
    }());
    var todo = new ToDo('Todo criado por uma classe');
    var reminder = new Reminder('Reminder criado por uma classe', new Date(), ['Email']);
    var taskView = {
        render: function (tasks) {
            var tasksList = document.getElementById('taskList');
            while (tasksList === null || tasksList === void 0 ? void 0 : tasksList.firstChild) {
                tasksList.removeChild(tasksList.firstChild);
            }
            tasks.forEach(function (task) {
                var li = document.createElement('LI');
                var textNode = document.createTextNode(task.render());
                li.appendChild(textNode);
                tasksList === null || tasksList === void 0 ? void 0 : tasksList.appendChild(li);
            });
        }
    };
    var TaskController = function (view) {
        var _a;
        var tasks = [todo, reminder];
        var handleEvent = function (event) {
            event.preventDefault();
            view.render(tasks);
        };
        (_a = document
            .getElementById('taskForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleEvent);
    };
    TaskController(taskView);
})();
