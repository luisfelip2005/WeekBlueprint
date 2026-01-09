import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import './main.css';

export default function Main() {
  const [week, setWeek] = useState([])
  const [indexHovered, setIndexHovered] = useState(null)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

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
                        {indexHovered == index ? <button onClick={openModal}>+</button> : <button className='fake-button'>+</button>}
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

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Example Modal"
      >
        <section>
          <div className="container">
            <form className='form-add-task'>
              <input className='input-title' value={"New Task"} />
              <span>
                <label htmlFor="input-date">Date</label>
                <div>
                  <input type="date" />
                </div>
              </span>
              <span>
                <label htmlFor="task-status">Completed</label>
                <div>
                  <input type="checkbox" />
                </div>
              </span>
              <span>
                <label htmlFor="last-edited">Last edited time</label>
                <div>
                  <p>January 8, 2026 7:56 PM</p>
                </div>
              </span>
            </form>
            <div className="task-description">

            </div>
            <div className="select-task">

            </div>
          </div>
        </section>
      </Modal>
    </section>
  )
}
