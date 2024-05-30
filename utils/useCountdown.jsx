import { useEffect, useMemo, useState } from "react";

const useCountdown = (targetDate) => {
  const countDownDate = useMemo(
    () => new Date(targetDate).getTime(),
    [targetDate]
  );

  const [countDown, setCountDown] = useState(() => {
    const offset = countDownDate - new Date().getTime();
    return offset > 0 ? offset : 0;
  });

  useEffect(() => {
    var interval;
    if (countDownDate - new Date().getTime() > 0) {
      interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
};

export default useCountdown;
