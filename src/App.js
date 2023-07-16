import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BoardList from './components/BoardList';
import Board from './components/Board';
import MemberList from './components/MemberList';
import ActivityFeed from './components/ActivityFeed';
import CardModal from './components/CardModal';
import Comment from './components/Comment';
import Checklist from './components/CheckList';
import Attachment from './components/Attachment';
import Search from './components/Search';
import Task from './components/Task';
import List from './components/List';
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<BoardList/>} />
          <Route exact path="/board/:boardId" element={<Board/>} />
          <Route exact path="/task/:taskId" element={<Task/>} />
          <Route exact path="/list/:listId" element={<List/>} />

          {/* Add more routes for other components as needed */}
        </Routes>

        <MemberList />
        <ActivityFeed />
        <CardModal />
        <Comment />
        <Checklist />
        <Attachment />
        <Search />
      </div>
    </Router>
  );
};

export default App;
