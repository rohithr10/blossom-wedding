// Calendar utilities for generating .ics files and calendar links

export interface CalendarEvent {
  title: string;
  description: string;
  location: string;
  startTime: Date;
  endTime: Date;
}

// Format date for iCal format (YYYYMMDDTHHMMSS)
const formatICalDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
};

// Generate .ics file content
export const generateICS = (event: CalendarEvent): string => {
  const startDate = formatICalDate(event.startTime);
  const endDate = formatICalDate(event.endTime);
  
  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Victor & Preethi Wedding//EN
BEGIN:VEVENT
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
BEGIN:VALARM
TRIGGER:-PT24H
ACTION:DISPLAY
DESCRIPTION:Reminder: ${event.title} tomorrow
END:VALARM
END:VEVENT
END:VCALENDAR`;
};

// Download .ics file
export const downloadICS = (event: CalendarEvent, filename: string = 'event.ics') => {
  const icsContent = generateICS(event);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Generate Google Calendar URL
export const getGoogleCalendarUrl = (event: CalendarEvent): string => {
  const startDate = formatICalDate(event.startTime).replace(/[-:]/g, '');
  const endDate = formatICalDate(event.endTime).replace(/[-:]/g, '');
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${startDate}/${endDate}`,
    details: event.description,
    location: event.location,
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

// Generate Outlook Calendar URL
export const getOutlookCalendarUrl = (event: CalendarEvent): string => {
  const startDate = event.startTime.toISOString();
  const endDate = event.endTime.toISOString();
  
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: event.title,
    body: event.description,
    location: event.location,
    startdt: startDate,
    enddt: endDate,
  });
  
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
};
