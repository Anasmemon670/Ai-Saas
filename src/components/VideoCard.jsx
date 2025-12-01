import { Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VideoCard({ thumbnail, title, duration, isDarkTheme }) {
  return (
    <div 
      className={`rounded-2xl overflow-hidden border group cursor-pointer transition-transform hover:scale-[1.02] ${
        isDarkTheme 
          ? 'bg-[#141414] border-gray-800' 
          : 'bg-white border-gray-200 shadow-sm'
      }`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <ImageWithFallback
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Watermark */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-white text-xs">
          PixVerse.ai
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 
              className={`text-sm line-clamp-2 mb-2 ${
                isDarkTheme ? 'text-white' : 'text-gray-900'
              }`}
            >
              {title}
            </h3>
            <p className={`text-sm ${isDarkTheme ? 'text-gray-500' : 'text-gray-500'}`}>
              {duration}
            </p>
          </div>
          
          {/* Download Button */}
          <button
            onClick={() => {
              // Download video functionality
              console.log('Downloading video:', title);
              // You can add actual download logic here
            }}
            className={`p-2 rounded-lg transition-colors ${
              isDarkTheme
                ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Download video"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

