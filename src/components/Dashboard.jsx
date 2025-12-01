import { StatCard } from './StatCard';
import { VideoCard } from './VideoCard';
import { Clock, FileText, Video } from 'lucide-react';

export function Dashboard({ isDarkTheme, userData }) {
  const userName = userData?.name || 'User';
  const userEmail = userData?.email || '';
  const stats = [
    {
      value: '10',
      label: 'In Progress',
      subtitle: 'TTS - Training',
      icon: Clock,
    },
    {
      value: '1000000',
      label: 'Words Total',
      subtitle: 'TTS - Training',
      icon: FileText,
    },
    {
      value: '25',
      label: 'Videos Total',
      subtitle: 'TTS - Training',
      icon: Video,
    },
  ];

  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
      title: 'PixVerse V4.5 - Camera Push Forward',
      duration: '1:23',
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80',
      title: 'PixVerse V5 - Frame Rotation in Space',
      duration: '2:15',
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
      title: 'ZebraCat - Login Animation',
      duration: '0:45',
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-0 pb-4 sm:pb-6 lg:pb-8">

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 mb-8 sm:mb-12">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            subtitle={stat.subtitle}
            icon={stat.icon}
            isDarkTheme={isDarkTheme}
          />
        ))}
      </div>

      {/* Video Section */}
      <div>
        <h2 className={`text-xl sm:text-2xl mb-4 sm:mb-6 ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
          Video Translate Done
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              duration={video.duration}
              isDarkTheme={isDarkTheme}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

