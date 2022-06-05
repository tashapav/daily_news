import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ArticleContext from './context';
import FirstPage from './pages/FirstPage/FirstPage';
import EntryPage from './pages/EntryPage/EntryPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import { useState } from 'react';

function App() {

  const [openedArticle, setOpenedArticle] = useState({})

  return (
    <ArticleContext.Provider value={{openedArticle, setOpenedArticle}}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/adminentry/*" element={<EntryPage />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ArticleContext.Provider>
  );
}

export default App;
