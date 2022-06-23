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

    struct TodoStruct {
        string todo;
        Status status;
        uint256 createdAt;
        uint256 updatedAt;
        bool isValue;
    }
    mapping(uint256 => TodoStruct) todos;
    TodoStruct[] public todosArr;

    // user to todos relation

    // ---------- Functions ----------- //

    function addTodo(string memory _todo) public {
        require(bytes(_todo).length > 0, "Please add a valid todo item!");
        // update todo count
        todoCount += 1;
        // add todo to todos mapping
        todos[todoCount] = TodoStruct(
            _todo,
            Status.pending,
            block.timestamp,
            block.timestamp,
            true
        );
        todosArr.push(
            TodoStruct(
                _todo,
                Status.pending,
                block.timestamp,
                block.timestamp,
                true
            )
        );
    }

    function updateTodo(
        uint256 _num,
        string memory _todo,
        string memory _status
    ) public {
        require(_num <= todoCount, "Invalid Todo Number");
        require(_num >= 0, "Todo count can not be less than zero");
        // check if the todo item exists
        require(
            todos[_num].isValue,
            "Todo item does not exists you want to update"
        );
        if (
            keccak256(abi.encodePacked(_status)) ==
            keccak256(abi.encodePacked("done"))
        ) {
            todos[_num] = TodoStruct(
                _todo,
                Status.done,
                todos[_num].createdAt,
                block.timestamp,
                true
            );
            todosArr[_num] = TodoStruct(
                _todo,
                Status.done,
                todos[_num].createdAt,
                block.timestamp,
                true
            );
        } else {
            todos[_num] = TodoStruct(
                _todo,
                Status.pending,
                todos[_num].createdAt,
                block.timestamp,
                true
            );
            todosArr[_num] = TodoStruct(
                _todo,
                Status.pending,
                todos[_num].createdAt,
                block.timestamp,
                true
            );
        }
    }

    // get single todo
    function getTodo(uint256 _num) public view returns (string memory) {
        return todos[_num].todo;
    }

    function getAllTodos() public view returns (TodoStruct[] memory) {
        return todosArr;
    }

    function getAllTodosCount() public view returns (uint256) {
        return todosArr.length;
    }

    function getTodoByIndex(uint256 _num)
        public
        view
        returns (
            string memory todo,
            Status,
            uint256 createAt,
            uint256 updatedAt
        )
    {
        require(_num <= todoCount, "Invalid Todo Number");
        require(_num >= 0, "Todo count can not be less than zero");
        // check if the todo item exists
        require(
            todos[_num].isValue,
            "Todo item does not exists you want to update"
        );
        TodoStruct memory todoItem = todos[_num];
        return (
            todoItem.todo,
            todoItem.status,
            todoItem.createdAt,
            todoItem.updatedAt
        );
    }
}
// await instance.updateTodo(1,"Watch Movie At PVR","pending")
