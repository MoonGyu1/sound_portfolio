import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './middleware/Auth';
import './App.css';
import NavBar from './component/NavBar/NavBar';
// import ThumbnailTest from './component/Thumbnail/ThumbnailTest';
import TodayPage from './page/TodayPage/TadayPage';
import LoginPage from './page/LoginPage/LoginPage';
import UploadPage from './page/UploadPage/UploadPage';
import ChannelPage from './page/ChannelPage/ChannelPage';

// restricted = null (누구나 접근 가능)
// restricted = true (로그인 한 유저만 접근 가능)
// restricted = false (로그인 안 한 유저만 접근 가능)
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Auth restricted={null}>
                <TodayPage />
              </Auth>
            }
          />
          <Route
            path="/signin"
            element={
              <Auth restricted={false}>
                <LoginPage />
              </Auth>
            }
          />
          <Route
            path="/upload"
            element={
              <Auth restricted={true}>
                <UploadPage />
              </Auth>
            }
          />
          <Route
            path="/channel"
            element={
              <Auth restricted={null}>
                <ChannelPage />
              </Auth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
