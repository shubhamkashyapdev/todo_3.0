//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Task {
    uint256 public taskCount = 0;
    //@Task list of users

    // list of tasks
    enum Status {
        pending,
        done
    }
    enum Priority {
        normal,
        urgent,
        sensitive
    }

    struct TaskStruct {
        string taskTitle;
        string taskDescription;
        Priority taskPriority;
        string[] taskTags;
        Status taskStatus;
        uint256 createdAt;
        uint256 updatedAt;
        bool isValue;
        address user;
    }

    mapping(uint256 => TaskStruct) tasks;
    TaskStruct[] public tasksArr;

    // user to tasks relation

    // ---------- Functions ----------- //

    function addTask(
        string memory _taskDescription,
        string memory _taskTitle,
        Priority _taskPriority,
        string[] memory _taskTags
    ) public {
        // update task count
        taskCount += 1;
        // add task to tasks mapping
        tasks[taskCount] = TaskStruct({
            taskTitle: _taskTitle,
            taskDescription: _taskDescription,
            taskPriority: Priority(_taskPriority),
            taskTags: _taskTags,
            taskStatus: Status.pending,
            createdAt: block.timestamp,
            updatedAt: block.timestamp,
            isValue: true,
            user: msg.sender
        });
        tasksArr.push(
            TaskStruct({
                taskTitle: _taskTitle,
                taskDescription: _taskDescription,
                taskPriority: Priority(_taskPriority),
                taskTags: _taskTags,
                taskStatus: Status.pending,
                createdAt: block.timestamp,
                updatedAt: block.timestamp,
                isValue: true,
                user: msg.sender
            })
        );
    }

    function updateTask(
        uint8 _num,
        string memory _taskTitle,
        string memory _taskDescription,
        Priority _taskPriority,
        string[] memory _taskTags,
        Status _status
    ) public {
        // check if the task item exists
        require(
            tasks[_num].isValue,
            "Task item does not exists you want to update"
        );
        // check if user updating the task is the one who had created it
        require(
            tasks[_num].user == msg.sender,
            "Not authorized to update the task item!"
        );
        tasks[_num] = TaskStruct({
            taskTitle: _taskTitle,
            taskDescription: _taskDescription,
            taskPriority: Priority(_taskPriority),
            taskTags: _taskTags,
            taskStatus: Status(_status),
            createdAt: block.timestamp,
            updatedAt: block.timestamp,
            isValue: true,
            user: msg.sender
        });
        tasksArr[_num] = TaskStruct({
            taskTitle: _taskTitle,
            taskDescription: _taskDescription,
            taskPriority: Priority(_taskPriority),
            taskTags: _taskTags,
            taskStatus: Status(_status),
            createdAt: block.timestamp,
            updatedAt: block.timestamp,
            isValue: true,
            user: msg.sender
        });
    }

    // get single task
    function getTask(uint256 _num) public view returns (TaskStruct memory) {
        require(_num <= taskCount, "Invalid Task Number");
        require(_num >= 0, "Task count can not be less than zero");
        // check if the task item exists
        require(
            tasks[_num].isValue,
            "Task item does not exists you want to update"
        );
        return tasks[_num];
    }

    function getAllTasks() public view returns (TaskStruct[] memory) {
        return tasksArr;
    }

    function getTaskCount() public view returns (uint256) {
        return tasksArr.length;
    }
}
