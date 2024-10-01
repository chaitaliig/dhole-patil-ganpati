'use client'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
// import events1 from "./events";
export default function Calender() {
    const handleDateClick = (arg) => {
        alert(arg.dateStr)
    }
    const handleEventClick = (eventInfo) => {
        alert(eventInfo.event.title)
    }

    return (
        <>
            <div className="my-5">
                <FullCalendar
                    plugins={[
                        dayGridPlugin,
                        interactionPlugin
                    ]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth'
                    }}
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}
                    events={[
                        { title: 'Gudi Padwa', date: '2024-04-09' },
                        { title: 'Vinayaka Chaturthi', date: '2024-04-12' },
                        { title: 'Vikata Sankashti Chaturthi', date: '2024-04-27' }
                    ]}
                />
            </div>
        </>
    )
}
