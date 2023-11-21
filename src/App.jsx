import { useEffect, useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import PostService from './API/postService';
import { getPageCount } from './utils/pages';
import { useContent } from './hooks/useContent';
import Modal from './components/modal/Modal';
import AuthForm from './components/auth-form/AuthForm';
import CreateForm from './components/create-form/CreateForm';

function App() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(8);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [authOpen, setAuthOpen] = useState(false);
  const [open, setOpen] = useState(false);

  console.log(setLimit);

  const SearchedContent = useContent(content, filter.sort, filter.query);

  useEffect(() => {
    getContent();
  }, []);

  async function getContent() {
    const response = await PostService.getAll(limit, page);
    setContent(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  }

  return (
    <div className="app">
      {authOpen && (
        <Modal setAuthOpen={setAuthOpen}>
          <AuthForm />
        </Modal>
      )}
      {open && (
        <Modal open={open} setOpen={setOpen}>
          <CreateForm />
        </Modal>
      )}
      <MainPage
        content={SearchedContent}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        filter={filter}
        setFilter={setFilter}
        setOpen={setOpen}
        setAuthOpen={setAuthOpen}
      />
    </div>
  );
}

export default App;
