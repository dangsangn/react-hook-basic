import "./HomePage.scss";
import { useState, useEffect } from "react";
import queryString from "query-string";
import FormTask from "./../../components/FormTask/FormTask";
import TodoList from "./../../components/TodoList/TodoList";
import PostList from "./../../components/PostList/index";
import Pagination from "./../../components/Pagination/index";
import SearchPostList from "./../../components/SearchPostList/index";
import Clock from "./../../components/Clock/index";
import MagicBox from "./../../components/MagicBox";

function HomePage() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      name: "Hoc Anh van",
    },
    {
      id: 1,
      name: "Hoc React Hook",
    },
    {
      id: 2,
      name: "Tap Gym",
    },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
  });

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    title_like: "",
  });

  //fetch Post list
  useEffect(() => {
    const strURL = queryString.stringify(filters);
    try {
      async function fetchPostList() {
        const url = "http://js-post-api.herokuapp.com/api/posts?" + strURL;
        const response = await fetch(url);
        const responseJson = await response.json();
        const { data, pagination } = responseJson;
        const newData = [...data];
        const newPagination = { ...pagination };
        setPostList(newData);
        setPagination(newPagination);
      }

      fetchPostList();
    } catch (err) {
      console.log("error fetch post list: ", err.message);
    }
  }, [filters]);

  //change page
  function handelOnChangePage(page) {
    setFilters({ ...filters, _page: page });
  }

  function handleDeleteTask(task) {
    console.log(task);
    let index = todoList.findIndex((item) => item.id === task.id);
    if (index > -1) {
      let newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    }
  }

  function handleSubmit(data) {
    if (data) {
      let newList = [...todoList];
      let formValue = {
        id: todoList.length,
        ...data,
      };
      newList.push(formValue);
      setTodoList(newList);
    }
  }

  function handleSearchPostList(keySearch) {
    setFilters({ ...filters, title_like: keySearch, _page: 1 });
  }

  const [isTime, setIsTime] = useState(true);
  function handleHiddenTime() {
    setIsTime(false);
  }

  return (
    <div className="App">
      <MagicBox />
      {/* {isTime && <Clock />}
      <button onClick={handleHiddenTime}>Hidden Time</button> */}
      {/* <SearchPostList onSubmit={handleSearchPostList} /> */}
      {/* <PostList postList={postList} /> */}
      {/* <Pagination onChangePage={handelOnChangePage} pagination={pagination} /> */}
      {/* <FormTask onSubmit={handleSubmit} /> */}
      {/* <TodoList todoList={todoList} onDeleteTask={handleDeleteTask} /> */}
    </div>
  );
}

export default HomePage;
