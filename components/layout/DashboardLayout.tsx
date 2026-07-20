import TopHeader from '@/components/header/TopHeader';
import LeftSidebar from '@/components/sidebar/LeftSidebar';
import MainContent from '@/components/core/MainContent';
import RightSidebar from '@/components/widgets/RightSidebar';
import BottomTimeline from '@/components/timeline/BottomTimeline';

export default function DashboardLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#050b14] text-slate-20000">
      <TopHeader />
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
      <BottomTimeline />
    </div>
  );
}
