import React, {useEffect, useState} from 'react';
import './main.css';

export default function Main() {
  const [week, setWeek] = useState([])
  const [indexHovered, setIndexHovered] = useState(null)

  useEffect(() => {
    const today = new Date()
    const dayOfWeek = today.getDay() 
    const sunday = new Date(today)

    sunday.setDate(today.getDate() - dayOfWeek)

    const weekArray = []

    for (let i = 0; i < 7; i++) {
      let d = new Date(sunday) 
      d.setDate(sunday.getDate() + i)
      d = d.toString()

      const dayOfWeek = d.slice(0,3);
      const month = d.slice(4, 7)
      const day = d.slice(8, 10)
      const year = d.slice(11, 15)

      weekArray.push({day, dayOfWeek, month, year})
    }

    setWeek(weekArray)
    console.log(weekArray)
  }, [])

  return (
    <section className='main-section'>
      <div className="container">
        <div className="calendar-container">
          <div className="calendar-header">
            <div className='header1'>
              <div>
                <span>Timetable</span>
                <span>Today</span>
                <span>Done</span>
              </div>
              <div>
                <span>Filter</span>
                <span>Sort</span>
                <span>Search</span>
              </div>
            </div>
            <div className='header2'>
              <span>January 2026</span>
              <span>Today</span>
            </div>
            <div className="calendar">
              {week.map((date, index) => {
                return (
                  <div key={index} onMouseEnter={() => setIndexHovered(index)} onMouseLeave={() => setIndexHovered(null)} className="div-date">
                    <span className='week-day'>{date.dayOfWeek}</span>
                    <div className="div-content">
                      <span className='div-content-header'>
                        {indexHovered == index ? <button>+</button> : <button className='fake-button'>+</button>}
                        <span>{date.day}</span>
                      </span>
                      <div className='div-task'>
                        <div>Running</div>
                        <span>Any Time</span>
                      </div>
                      <div className='div-task'>
                        <div>Running</div>
                        <span>Any Time</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
