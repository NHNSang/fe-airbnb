import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
    );
    const element = document.documentElement;
    const darkQurery = window.matchMedia("(prefers-color-scheme: dark)");

    const option = [
        {
            icon: theme === 'light' ? <MoonOutlined /> : <SunOutlined />,
            text: theme === 'light' ? 'dark' : 'light'
          }

    ]

    function onWindowChange() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQurery.matches)) {
            element.classList.add('dark');
        }else{
            element.classList.remove('dark');
        }
    }
    onWindowChange();

    useEffect(()=>{
        switch(theme){
            case 'dark':   element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            break;
            case 'light': element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            break;
            default:
            break;
        }
    },[theme])
  return (
    <div className='top-5 right-10 duration-100 darks:slate-200 ' > 
        {option.map((x) => (
            <button key={x.text} className={`w-10 h-10 text-xl rounded-lg m-1 border duration-100 darks:slate-200 ${x.text === 'light' ? '	' : 'border-black'}`} onClick={() => setTheme(x.text)}>
                {x.icon}
            </button>
        ))}
    </div>
  )
}

export default ThemeToggle
