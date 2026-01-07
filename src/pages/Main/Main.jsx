import React, {useEffect} from 'react';
import './main.css';

export default function Main() {

  useEffect(() => {
    const today = new Date()
    const dayOfWeek = today.getDay() 
    const sunday = new Date(today)

    sunday.setDate(today.getDate() - dayOfWeek)

    const week = []

    for (let i = 0; i < 7; i++) {
      const d = new Date(sunday) 
      d.setDate(sunday.getDate() + i)
      week.push(d)
    }

    console.log(week)
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
              <div className="div-date">
                <span className='week-day'>Sun</span>
                <div className="div-content">
                  <span className='div-content-header'>
                    <button>+</button>
                    <span>4</span>
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

              <div className="div-date">
                <span>Sun</span>
                <div className="div-content">
                  <span>4</span>
                  <div className='div-task'>
                    <div>Running</div>
                    <span>Any Time</span>
                  </div>
                </div>
              </div>
              <div className="div-date">
                <span>Sun</span>
                <div className="div-content">
                  <span>4</span>
                  <div className='div-task'>
                    <div>Running</div>
                    <span>Any Time</span>
                  </div>
                </div>
              </div><div className="div-date">
                <span>Sun</span>
                <div className="div-content">
                  <span>4</span>
                  <div className='div-task'>
                    <div>Running</div>
                    <span>Any Time</span>
                  </div>
                </div>
              </div><div className="div-date">
                <span>Sun</span>
                <div className="div-content">
                  <span>4</span>
                  <div className='div-task'>
                    <div>Running</div>
                    <span>Any Time</span>
                  </div>
                </div>
              </div><div className="div-date">
                <span>Sun</span>
                <div className="div-content">
                  <span>4</span>
                  <div className='div-task'>
                    <div>Running</div>
                    <span>Any Time</span>
                  </div>
                </div>
              </div><div className="div-date">
                <span>Sun</span>
                <div className="div-content">
                  <span>4</span>
                  <div className='div-task'>
                    <div>Running</div>
                    <span>Any Time</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
