import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const easeInOutCubic = t =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const smoothScrollTo = (element, duration = 1500) => {
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);
    window.scrollTo(0, startPosition + distance * easeProgress);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

export const useSmoothScrollOnState = (ref, locationState, targetStateValue) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (locationState?.scrollTo === targetStateValue && ref?.current) {
      smoothScrollTo(ref.current);

      navigate('.', { replace: true, state: {} });
    }
  }, [locationState, ref, targetStateValue]);
};

