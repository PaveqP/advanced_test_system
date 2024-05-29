import React, { useEffect, useState } from 'react'
import './Timer.scss'
import { useTypedSelector } from '../../hooks';
import { RoutesList } from '../../utils';
import { useNavigate } from 'react-router-dom';

function Timer() {

    const testData = useTypedSelector((state) => state.tests.testData)

    const getInitialSeconds = (): number => {
      const storedCountdown = localStorage.getItem('countdown');
      if (storedCountdown) {
        const parsedCountdown = parseInt(storedCountdown, 10);
        if (!isNaN(parsedCountdown)) {
          return parsedCountdown;
        }
      }
      return Number(testData.deadlineTime) * 60;
    };

    const [seconds, setSeconds] = useState<number>(getInitialSeconds());
    const navigate: any = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
          setSeconds(prevSeconds => {
            const newSeconds = prevSeconds - 1;
            localStorage.setItem('countdown', newSeconds.toString());
            return newSeconds > 0 ? newSeconds : 0; 
          });
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

    useEffect(() => {
        if (seconds === 0) {
            navigate(RoutesList.results)
        }
    }, [seconds]);
    
    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

  return (
    <div className='timer'>
      {formatTime(seconds)}
    </div>
  )
}

export {Timer}