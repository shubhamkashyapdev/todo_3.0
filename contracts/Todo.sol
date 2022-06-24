//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Todo {
    uint256 public todoCount = 0;
    //@TODO list of users

    // list of todos
    enum Status {
        pending,
        done
    }
    enum Category {
        sensitive,
        urgent,
        normal
    }

    struct TodoStruct {
        string task;
        string taskTitle;
        Category taskCategory;
        string[] taskTags;
        Status status;
        uint256 createdAt;
        uint256 updatedAt;
        bool isValue;
        address user;
    }

    mapping(uint256 => TodoStruct) todos;
    TodoStruct[] public todosArr;

    // user to todos relation

    // ---------- Functions ----------- //

    function addTodo(
        string memory _task,
        string memory _taskTitle,
        Category _taskCategory,
        string[] memory _taskTags
    ) public {
        require(bytes(_task).length > 0, "Please add a valid todo item!");

        // update todo count
        todoCount += 1;
        // add todo to todos mapping
        todos[todoCount] = TodoStruct(
            _task,
            _taskTitle,
            Category(_taskCategory),
            _taskTags,
            Status.pending,
            block.timestamp,
            block.timestamp,
            true,
            msg.sender
        );
        todosArr.push(
            TodoStruct(
                _task,
                _taskTitle,
                Category(_taskCategory),
                _taskTags,
                Status.pending,
                block.timestamp,
                block.timestamp,
                true,
                msg.sender
            )
        );
    }

    function updateTodo(
        uint8 _num,
        string memory _task,
        string memory _taskTitle,
        Category _taskCategory,
        string[] memory _taskTags,
        Status _status
    ) public {
        // check if the todo item exists
        require(
            todos[_num].isValue,
            "Todo item does not exists you want to update"
        );
        // check if user updating the todo is the one who had created it
        require(
            todos[_num].user == msg.sender,
            "Not authorized to update the todo item!"
        );
        if (
            keccak256(abi.encodePacked(_status)) ==
            keccak256(abi.encodePacked("done"))
        ) {
            todos[_num] = TodoStruct(
                _task,
                _taskTitle,
                Category(_taskCategory),
                _taskTags,
                Status.done,
                todos[_num].createdAt,
                block.timestamp,
                true,
                msg.sender
            );
            todosArr[_num] = TodoStruct(
                _task,
                _taskTitle,
                Category(_taskCategory),
                _taskTags,
                Status.done,
                todos[_num].createdAt,
                block.timestamp,
                true,
                msg.sender
            );
        } else {
            todos[_num] = TodoStruct(
                _task,
                _taskTitle,
                Category(_taskCategory),
                _taskTags,
                Status.pending,
                todos[_num].createdAt,
                block.timestamp,
                true,
                msg.sender
            );
            todosArr[_num] = TodoStruct(
                _task,
                _taskTitle,
                Category(_taskCategory),
                _taskTags,
                Status.pending,
                todos[_num].createdAt,
                block.timestamp,
                true,
                msg.sender
            );
        }
    }

    // get single todo
    function getTodo(uint256 _num) public view returns (TodoStruct memory) {
        require(_num <= todoCount, "Invalid Todo Number");
        require(_num >= 0, "Todo count can not be less than zero");
        // check if the todo item exists
        require(
            todos[_num].isValue,
            "Todo item does not exists you want to update"
        );
        return todos[_num];
    }

    function getAllTodos() public view returns (TodoStruct[] memory) {
        return todosArr;
    }
}
// const instance = await Todo.deployed()
// await instance.addTodo("Setup a new proect for jobs-bharo application in next.js as frontend and typescript express as backend","Jobs-bharo Application Setup - 4",2,["React.js","Next.js","Typescript","Express","MongoDB"])
// await instance.updateTodo(2,"Setup a new proect for jobs-bharo application in next.js as frontend and typescript express as backend - UPDATED","Jobs-bharo Application Setup - 2",2,["React.js","Next.js","Typescript","Express","MongoDB"],0)
// let todoCount = await instance.todoCount()  | todoCount.toString() => will return the todo count in blockchain ledger
// const todos = await instance.getAllTodos() | todos => will return all todos in blockchain ledger
