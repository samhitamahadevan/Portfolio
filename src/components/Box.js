import { disableLoadingAnimation, useBoxAnimation } from '@/hooks/useAnimation';

export default function Box({
  timeline,
  children,
  className = '',
  callbackAnimation,
}) {
  const boxRef = useBoxAnimation(timeline, callbackAnimation);

  const updatedClassName = `${className} ${disableLoadingAnimation ? '!opacity-100 !translate-x-0 !translate-y-0 !scale-100' : ''}`;

  return (
    <div className={`box ${updatedClassName}`} ref={boxRef}>
      {children}
    </div>
  );
}
