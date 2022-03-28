import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from "./view/MainPage";
import BookList from "./view/BookList";
import BookPage from "./view/BookPage";
import Order from "./view/Order";
import Login from './view/Login';
import React from "react";

const bookin = [
    {
        key: '1',
        name: 'Java核心技术卷II',
        author: '凯S.霍斯特曼',
        category: '计算机相关',
        price: <span style={{color: "red", fontSize: 20}}>¥35.1</span>,
        states: 1,
        num: 2010,
        img: <img src={require("../public/Java.jpg")} alt="1" />,
    },
    {
        key: '2',
        name: '5年高考 3年模拟',
        author: '5·3名师课题组',
        category: '高考',
        price: <span style={{color: "red", fontSize: 20}}>¥45.1</span>,
        states: 0,
        num: 0,
        img: <img src={require("../public/53.jpg")} alt="3" />,
    },
    {
        key: '3',
        name: '深入理解计算机系统',
        author: '兰德尔·E·布莱恩特',
        category: '计算机相关',
        price: <span style={{color: "red", fontSize: 20}}>¥105.5</span>,
        states: 1,
        num: 518,
        img: <img src={require("../public/Csapp.jpg")} alt="2" />,
    },
]
function App() {
  return (
    <>
      <Router>
          <Switch>
              <Route exact path={'/'} component={MainPage} />
              <Route exact path={'/booklist'} component={BookList} />
              <Route exact path={'/bookpage/java'} render={() => <BookPage data={bookin[0]}/>} />
              <Route exact path={'/bookpage/53'} render={() => <BookPage data={bookin[1]}/>} />
              <Route exact path={'/bookpage/csapp'} render={() => <BookPage data={bookin[2]}/>} />
              <Route exact path={'/order'} component={Order} />
              <Route exact path={'/login'} component={Login} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
