import React from 'react'
import './Home.scss'
import testApp1 from '../assets/testApp1.png'
import testApp2 from '../assets/testApp2.png'
import testApp3 from '../assets/testApp3.png'
import testApp4 from '../assets/testApp4.png'
import close from '../assets/close.png'
import supaps from '../build/index.html'

export default function Home () {
  return (
    <div className='home'>
      <header></header>
      <main>
        <div className='userInfoCard'></div>
        <div className='appList'>
          <div className='appListItem'>
            <img src={testApp1} className='imgIcon' draggable={true} alt='' />

            <div className='closeImg'>
              <img src={close} alt='' />
            </div>
            <div className='textDesc'>生产</div>
          </div>

          <div className='appListItem'>
            <img src={testApp2} className='imgIcon' draggable={true} alt='' />
            <div className='closeImg'>
              <img src={close} alt='' />
            </div>
            <div className='textDesc'>流程管理</div>
          </div>

          <div className='appListItem'>
            <img src={testApp3} className='imgIcon' draggable={true} alt='' />
            <div className='closeImg'>
              <img src={close} alt='' />
            </div>
            <div className='textDesc'>质量服务</div>
          </div>

          <div className='appListItem'>
            <img src={testApp4} className='imgIcon' draggable={true} alt='' />
            <div className='closeImg'>
              <img src={close} alt='' />
            </div>
            <div className='textDesc'>质量管理</div>
          </div>
          <div className='appListItem'>
            <img src={testApp4} className='imgIcon' draggable={true} alt='' />
            <div className='closeImg'>
              <img src={close} alt='' />
            </div>
            <div className='textDesc'>质量管理</div>
          </div>
          <div className='appListItem'>
            <img src={testApp4} className='imgIcon' draggable={true} alt='' />
            <div className='closeImg'>
              <img src={close} alt='' />
            </div>
            <div className='textDesc'>质量管理</div>
          </div>
          <div className='appListItem'>
            <img src={testApp4} className='imgIcon' draggable={true} alt='' />
            <div className='closeImg'>
              <img src={close} alt='' />
            </div>
            <div className='textDesc'>质量管理</div>
          </div>
        </div>
        
        <div className='componentMainWrapper'>
          <iframe title="supaps" width="100%" height='100%' srcDoc={supaps} frameBorder="0"></iframe>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}
