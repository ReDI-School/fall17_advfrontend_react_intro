import React from "react"
import CalendarCard from "../../components/cards/calendarCard"

const TabCalendar = ({ course: { events } }) => {
  return (
    <div>
      {events.map(
        ({ title, startTime, endTime, address, agenda, addressModified }) => (
          <CalendarCard
            title={title}
            startTime={startTime}
            endTime={endTime}
            address={address}
            addressModified={addressModified}
            agenda={agenda}
            key={title}
          />
        )
      )}
    </div>
  )
}

export default TabCalendar