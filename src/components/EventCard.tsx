import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ExternalLink, Download } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { downloadICS, getGoogleCalendarUrl, getOutlookCalendarUrl, CalendarEvent } from '@/utils/calendar';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  description: string;
  mapUrl: string;
  calendarEvent: CalendarEvent;
  index: number;
}

const EventCard = ({
  title,
  date,
  time,
  venue,
  address,
  description,
  mapUrl,
  calendarEvent,
  index,
}: EventCardProps) => {
  const [showQR, setShowQR] = useState(false);

  const handleDownloadICS = () => {
    downloadICS(calendarEvent, `${title.toLowerCase().replace(/\s+/g, '-')}.ics`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="p-8 space-y-6">
        {/* Header */}
        <div className="text-center border-b border-border pb-6">
          <h3 className="text-3xl font-playfair font-bold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        {/* Event Details */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">{date}</p>
              <p className="text-sm text-muted-foreground">{time}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">{venue}</p>
              <p className="text-sm text-muted-foreground">{address}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          {/* Add to Calendar Dropdown */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground mb-2">Add to Calendar:</p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={getGoogleCalendarUrl(calendarEvent)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm"
              >
                <Calendar className="w-4 h-4" />
                Google
              </a>
              <a
                href={getOutlookCalendarUrl(calendarEvent)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm"
              >
                <Calendar className="w-4 h-4" />
                Outlook
              </a>
              <button
                onClick={handleDownloadICS}
                className="col-span-2 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors text-sm"
              >
                <Download className="w-4 h-4" />
                Download .ics (Apple Calendar)
              </button>
            </div>
          </div>

          {/* Get Directions */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 hover:scale-105"
          >
            <MapPin className="w-5 h-5" />
            Get Directions
          </a>

          {/* QR Code Toggle */}
          <button
            onClick={() => setShowQR(!showQR)}
            className="w-full py-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
          >
            {showQR ? 'Hide' : 'Show'} Location QR Code
          </button>

          {showQR && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex justify-center pt-4 pb-2"
            >
              <div className="bg-white p-4 rounded-lg">
                <QRCodeSVG value={mapUrl} size={200} />
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Scan to open in Maps
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
