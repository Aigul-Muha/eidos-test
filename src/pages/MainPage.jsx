import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Table from '../components/table/Table';
import Pagination from '../components/pagination/Pagination';

import '../App.css';

function MainPage({ content, page, totalPages, setPage, filter, setFilter, setOpen, setAuthOpen }) {
  return (
    <>
      <Sidebar />
      <div className="content">
        <div className="top">
          <p className="title">Учебные сессии</p>
          <div>
            <Header
              filter={filter}
              setFilter={setFilter}
              setOpen={setOpen}
              setAuthOpen={setAuthOpen}
            />
          </div>
        </div>
        <Table content={content} />
        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
      </div>
    </>
  );
}

export default MainPage;
