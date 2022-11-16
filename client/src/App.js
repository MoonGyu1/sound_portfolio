import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Auth from './middleware/Auth';
import NavBar from './component/NavBar/NavBar';
import Footer from './component/Footer/Footer';
// import ThumbnailTest from './component/Thumbnail/ThumbnailTest';
import TodayPage from './page/TodayPage/TodayPage';
import LoginPage from './page/LoginPage/LoginPage';
import SelectUploadPage from './page/UploadPage/SelectUploadPage';
import SoundUploadPage from './page/UploadPage/SoundUploadPage ';
import ChannelPage from './page/ChannelPage/ChannelPage';
import './App.css';

// restricted = null (누구나 접근 가능)
// restricted = true (로그인 한 유저만 접근 가능)
// restricted = false (로그인 안 한 유저만 접근 가능)
function App() {
  // const location = useLocation().pathname;
  const Bottom = () => {
    const location = useLocation().pathname;
    if (location !== '/channel') {
      return <Footer />;
    } else {
      return;
    }
  };

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
                <SelectUploadPage />
              </Auth>
            }
          />
          <Route
            path="/sound"
            element={
              <Auth restricted={true}>
                <SoundUploadPage />
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
        <Bottom />
      </BrowserRouter>
    </div>
  );
}

export default App;
