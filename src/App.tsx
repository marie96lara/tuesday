import TopHeader from './components/TopHeader';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import BottomTimeline from './components/BottomTimeline';

function App() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-[#050b14] text-slate-200">
      <TopHeader />
      <div className="flex flex-1 overflow-hidden min-h-0">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <BottomTimeline />
    </div>
  );
}

export default App;
